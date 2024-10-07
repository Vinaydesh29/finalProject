import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import TvRoundedIcon from "@mui/icons-material/TvRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navi = ["/", "/Movies", "/TvSeries", "/Search"];
  const navigate = useNavigate();

  useEffect(() => {
    navigate(navi[value]);
  }, [value]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "sticky",
        bottom: "0",
        "& .MuiBottomNavigation-root": {
          bgcolor: "#2d313a",
          "& .MuiButtonBase-root": {
            color: "#fff",
          },
          "& .Mui-selected": {
            color: "aqua",
          },
        },
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Trending"
          icon={<WhatshotRoundedIcon />}
        />
        <BottomNavigationAction
          label="Movies"
          icon={<MovieCreationRoundedIcon />}
        />
        <BottomNavigationAction label="TV Series" icon={<TvRoundedIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchRoundedIcon />} />
      </BottomNavigation>
    </Box>
  );
}
