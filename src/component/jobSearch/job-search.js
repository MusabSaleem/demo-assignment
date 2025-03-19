import React from "react";
import { Box, TextField, Button, Chip, useMediaQuery, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const JobSearch = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect small screens (mobile)

  return (
    <>
      {/* Search Bar */}
      <Box
        mt={2}
        display="flex"
        flexDirection={isMobile ? "column" : "row"} // Stack fields on mobile
        gap={2}
      >
        <TextField label="Job Title, Company, or Keywords" fullWidth />
        <TextField label="Select Location" fullWidth />
        <TextField label="Job Type" fullWidth />
        <Button variant="contained" startIcon={<SearchIcon />} fullWidth>
          Search
        </Button>
      </Box>

      {/* Job Filters */}
      <Box
        mt={2}
        display="flex"
        gap={1}
        flexWrap="wrap" // Wrap filters on small screens
        justifyContent={isMobile ? "center" : "flex-start"} // Center on mobile
      >
        <Chip label="Frontend" variant="outlined" />
        <Chip label="Backend" variant="outlined" />
        <Chip label="Graphic Designer" variant="outlined" />
      </Box>
    </>
  );
};

export default JobSearch;
