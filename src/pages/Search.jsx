import TextField from "@mui/material/TextField";
import ButtonBase from "@mui/material/ButtonBase";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function Search() {
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");
  const [content, setContent] = useState([]);
  const [text, setText] = useState("");
  const [searched, setSearched] = useState(false);
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleType = (selectedType) => {
    setType(selectedType);
    console.log(selectedType, "type");
  };
  const [searchText, setSearchText] = useState("");
  const handleClick = () => {
    setSearchText(text);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const testing = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/search/${
            type === "tv" ? "tv" : "movie"
          }?api_key=a9fcb33911f46a7aabb349c6851d0f8a&language=en-US&query=${searchText}&page=1&include_adult=false`
        )
        .then((result) => {
          console.log(result.data.results);
          setContent(result.data.results);
          if (result.data.results.length === 0 && searchText) {
            setSearched(true);
          }
        });
    };
    testing();
  }, [type, searchText]);

  return (
    <>
      <div>
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
          sx={{
            width: "90%",
            marginTop: "50px",
            backgroundColor: "rgba(255, 255, 255, 0.09);",
            borderRadius: "5px",
          }}
          onChange={handleText}
        />
        <ButtonBase
          sx={{
            backgroundColor: "whitesmoke",
            height: "56px",
            width: "7%",
            marginTop: "50px",
            marginLeft: "8px",
            borderRadius: "6px",
          }}
          onClick={handleClick}
        >
          <SearchIcon sx={{ fontSize: "40px", color: " #39445A" }} />
        </ButtonBase>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ marginTop: "10px" }}
          >
            <Tab
              label="Search Movies"
              {...a11yProps(0)}
              sx={{ width: "20%" }}
              onClick={() => handleType("movie")}
            />
            <Tab
              label="Search TV Series"
              {...a11yProps(1)}
              sx={{ width: "20%" }}
              onClick={() => handleType("tv")}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {content.length === 0 && searched ? (
            <Stack sx={{ width: "70%" }} spacing={2}>
              <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                Sorry, we couldn't find any movies matching that name.
              </Alert>
            </Stack>
          ) : (
            content.map((items, index) => {
              return (
                <MovieCard
                  key={index}
                  poster={items.poster_path}
                  title={items.title}
                  date={items.release_date}
                  vote={items.vote_average}
                  name={items.name}
                  type={type}
                />
              );
            })
          )}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {content.length === 0 && searched ? (
            <Stack sx={{ width: "70%" }} spacing={2}>
              <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                Sorry, we couldn't find any TV Series matching that name.
              </Alert>
            </Stack>
          ) : (
            content.map((items, index) => {
              return (
                <MovieCard
                  key={index}
                  poster={items.poster_path}
                  title={items.title}
                  date={items.first_air_date}
                  vote={items.vote_average}
                  name={items.name}
                  type={type}
                />
              );
            })
          )}
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default Search;
