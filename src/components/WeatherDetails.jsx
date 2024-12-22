import { Box, Typography } from "@mui/material";
import React from "react";

function WeatherDetails({ icon: Icon, value, label }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Icon sx={{ fontSize: { xs: 30, sm: 40 }, }} />
      <Typography
        sx={{ fontSize: { xs: "12px", sm: "14px" }, marginBottom: "4px" }}
      >
        {value}
      </Typography>
      <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
        {label}
      </Typography>
    </Box>
  );
}

export default WeatherDetails;
