import React from "react";
import { Box, Card, CardContent, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";

const jobs = [
  { id: 1, title: "UI/UX Designer", location: "Seattle, USA (Remote)", details: "1 day ago | 22 applicants" },
  { id: 2, title: "Frontend Developer", location: "New York, USA", details: "2 days ago | 18 applicants" },
  { id: 3, title: "Backend Engineer", location: "San Francisco, USA", details: "5 days ago | 30 applicants" },
  { id: 4, title: "Graphic Designer", location: "Chicago, USA", details: "3 days ago | 12 applicants" },
  { id: 5, title: "Product Manager", location: "Los Angeles, USA", details: "1 week ago | 15 applicants" },
  { id: 6, title: "Software Engineer", location: "Austin, USA", details: "2 days ago | 25 applicants" },
  { id: 7, title: "Data Analyst", location: "Boston, USA", details: "4 days ago | 20 applicants" },
  { id: 8, title: "Marketing Manager", location: "Denver, USA", details: "6 days ago | 10 applicants" },
  { id: 9, title: "Cybersecurity Specialist", location: "San Diego, USA", details: "5 days ago | 8 applicants" },
  { id: 10, title: "DevOps Engineer", location: "Miami, USA", details: "1 day ago | 18 applicants" },
];

const JobList = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // Mobile (1 column)
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // Small tablets (2-3 columns)
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // Tablets (4 columns)
  const isLg = useMediaQuery(theme.breakpoints.up("lg")); // Large screens (5 columns)

  // Determine number of columns dynamically
  const getCardWidth = () => {
    if (isXs) return "100%"; // 1 column on mobile
    if (isSm) return "calc(50% - 16px)"; // 2 columns on small screens
    if (isMd) return "calc(33.33% - 16px)"; // 3 columns on medium screens
    if (isLg) return "calc(20% - 16px)"; // 5 columns on large screens
    return "calc(25% - 16px)"; // Default (4 columns for in-between cases)
  };

  return (
    <Box display="flex" gap={2} mt={2} justifyContent="left" flexWrap="wrap">
      {jobs.map((job) => (
        <Card
          key={job.id}
          sx={{
            flex: `1 1 ${getCardWidth()}`,
            maxWidth: getCardWidth(),
            minHeight: 180,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 2,
            boxShadow: 3,
            transition: "all 0.3s ease-in-out",
            "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
          }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {job.title}
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                {job.location}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <WorkIcon fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                {job.details}
              </Typography>
            </Box>
          </CardContent>
          <Button variant="contained" fullWidth sx={{ mt: 2, fontWeight: "bold" }}>
            Apply Now
          </Button>
        </Card>
      ))}
    </Box>
  );
};

export default JobList;
