import React from "react";
import { Container, Box, Typography, TextField, Button, Card, CardContent, Avatar, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import  Header  from "./header/header";
import ProfileCard from "./profileCard/profile-card";
import JobList from "./jobList/job-list";
import JobSearch from "./jobSearch/job-search";

function App() {
  return (
    <Box>
      <Box>
        <Header/>
      </Box>
      <Box>
      <Box m={3}>
      <Box display={{ xs: "block", sm: "flex" }} gap={3}>
  {/* Sidebar */}
  <Box mt={2} flex={{ sm: "1" }} maxWidth={{ sm: 300 }} width={{ xs: "100%" }}>
    <ProfileCard />
  </Box>

  {/* Main Content */}
  <Box mt={2} flex={{ sm: "3" }} display="flex" flexDirection="column" width={{ xs: "100%" }}>
    <Box>
      <Typography variant="h5">
        Find your Dream Job, <strong>Albert!</strong>
      </Typography>

      {/* Job Search Filters */}
      <JobSearch />

      {/* Featured Jobs Section */}
      <Typography variant="h6" mt={4}>
        Featured Jobs
      </Typography>
      <JobList />
    </Box>
  </Box>
</Box>
    </Box>
      </Box>

    </Box>

  );
}

export default App;