import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import React from "react";
import HourlyDisplay from "./HourlyDisplay";

function HourlyForecast() {
  const { combinateHourlyData, weatherData } = useSelector(
    (state) => state.search
  );
  const currentTime = new Date(weatherData.current.time);

  // Tömb szürése idő alapján
  const filteredHourlyData = combinateHourlyData.filter(
    (data) => new Date(data.time) > currentTime
  );

  return (
    <Box
      sx={{
        padding: 0.9,
        display: "flex",
        flexDirection: "Column",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(3px)",
        borderRadius: "10px",
        margin: "10px",
        width: "90%",
      }}
    >
      <Typography
        sx={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }}
      >
        Hourly Forecast
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            overflowX: "auto",
            padding: "10px 0",
            gap: "10px",
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "10px",
            },
            maxWidth: { xs: "320px", sm: "670px", md: "960px" },
          }}
        >
          {filteredHourlyData.map((data) => (
            <HourlyDisplay data={data} key={data.time} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default HourlyForecast;
