// Import React and necessary components
import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./styles"; // Import custom styles from styles.js

// Header component with top AppBar and search functionality
const Header = () => {
  // Apply custom styles from styles.js
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        {/* Main title of the app */}
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>

        {/* Subtitle and search container */}
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore New Places
          </Typography>

          {/* Search box with Autocomplete */}
          <Autocomplete>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon /> {/* Icon inside the search input */}
              </div>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
