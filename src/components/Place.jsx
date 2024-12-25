import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { useSelector } from "react-redux";

function Place() {
  const { cityData, weatherData } = useSelector((state) => state.search);
  
  const timeString = weatherData?.current?.time;
  const [date, time] = timeString ? timeString.split("T") : ["N/A", "N/A"];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          padding: 3.4,
          textAlign: "center",
          borderRadius: "10px",
          width: {
            xs: "90%",
            md: "400px",
          },
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: 2, color: "gray" }}
        >
          {cityData.name}
        </Typography>

        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          {time}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 1, color: "gray" }}>
          {date}
        </Typography>
      </Paper>
    </Box>
  );
}

export default Place;
