import React from "react";
import { Box, Card, CardContent, Typography, Avatar, Divider, useMediaQuery, useTheme } from "@mui/material";

const ProfileCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect small screens (mobile)

  return (
    <Box width={isMobile ? "100%" : "auto"}> {/* Full width on mobile */}
      <Card
        sx={{
          maxWidth: isMobile ? "100%" : 400, // Full width on mobile, 400px on larger screens
          p: 2,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        {/* Profile Header */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          {/* Background Image */}
          <Box
            sx={{
              backgroundImage: `url(https://via.placeholder.com/400x150)`,
              width: "100%",
              height: 100,
              backgroundSize: "cover",
              borderRadius: 2,
            }}
          />
          {/* Avatar */}
          <Avatar
            src="https://via.placeholder.com/100"
            alt="Albert Flores"
            sx={{
              width: 100,
              height: 100,
              mt: -5, // Overlapping effect
              border: "4px solid white",
            }}
          />
          {/* Profile Info */}
          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
            Albert Flores
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Clinton, Maryland
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Stats Section */}
        <Box display="flex" flexDirection="column" gap={1}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">Profile Visitors</Typography>
            <Typography variant="h6" color="primary">140</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">Resume Viewers</Typography>
            <Typography variant="h6" color="primary">20</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">My Jobs</Typography>
            <Typography variant="h6" color="primary">88</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Calendar Section */}
        <Box>
          <Typography variant="body2" color="text.secondary">My calendar</Typography>
          <Typography variant="body1" fontWeight="bold">Upcoming Interviews</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default ProfileCard;
