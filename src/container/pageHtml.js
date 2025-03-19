import React from "react";
import {Box, Typography } from "@mui/material";
import Header from "../component/header/header";
import ProfileCard from "../component/profileCard/profile-card";
import JobSearch from "../component/jobSearch/job-search";
import JobList from "../component/jobList/job-list";

function JobWeb() {
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

export default JobWeb;