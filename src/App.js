// Import React to enable JSX and component usage
import React from "react";

// Import Material UI components
import { CssBaseline, Grid } from "@mui/material";

// Import custom components (ensure the correct case for file paths)
import Header from "./components/Header/Header"; // Correct the case if necessary
import List from "./components/List/List"; // Ensure correct casing for all imports
import Map from "./components/Map/Map";
// Main App component
const App = () => {
  return (
    <>
      {/* Global CSS reset to ensure consistent styles across browsers */}
      <CssBaseline />

      {/* Header component */}
      <Header />

      {/* Grid layout for arranging the list and map */}
      <Grid container spacing={3} style={{ width: "100%" }}>
        {/* Left section for the list (on small and medium screens) */}
        <Grid item xs={12} md={4}>
          <List />
        </Grid>

        {/* Right section for the map (on small and medium screens) */}
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
