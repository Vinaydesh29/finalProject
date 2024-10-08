import TextField from "@mui/material/TextField";
import ButtonBase from "@mui/material/ButtonBase";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
            backgroundColor: "#546e7a",
            borderRadius: "5px",
          }}
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
              label=" Search Movies"
              {...a11yProps(0)}
              sx={{ width: "20%" }}
            />
            <Tab
              label="Search TV Series"
              {...a11yProps(1)}
              sx={{ width: "20%" }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Search Movies
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Search TV Series
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default Search;
