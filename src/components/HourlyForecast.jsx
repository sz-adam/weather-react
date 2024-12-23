import { Box, Typography } from "@mui/material";
import React from "react";

function HourlyForecast() {
  return (
    <Box
      sx={{
        padding: 0.9,
        display: "flex",
        flexDirection: "Column",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        margin: { xs: "6px", md: "2px" },
        width: "90%",
      }}
    >
      <Typography sx={{textAlign:"center", fontSize:"25px", fontWeight:"bold"}}>Hourly Forecast</Typography>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
            borderRadius: "25px",
          }}
        >
          <Typography sx={{ padding: "2px" }}>12:00</Typography>
          <Typography sx={{ padding: "2px" }}>Icon</Typography>
          <Typography sx={{ padding: "2px" }}>5 C</Typography>
          <Typography sx={{ padding: "2px" }}>Szél icon</Typography>
          <Typography sx={{ padding: "2px" }}>3km/h</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HourlyForecast;
