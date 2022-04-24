import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation
        style={{
          background: "#1a1e26",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Trending"
          component={Link}
          to={'/trending'}
          value={"/trending"}
          icon={<WhatshotIcon style={{ color: "white" }} />}
        />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Movies"
            component={Link}
            to={'/movies'}
            value={"/"}
            icon={<LocalMoviesIcon />}
          />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Tv series"
          component={Link}
          to={'/tvseries'}
          value={"/tvseries"}
          icon={<SmartDisplayIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Search"
          component={Link}
          to={'/search'}
          value={"/search"}
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
