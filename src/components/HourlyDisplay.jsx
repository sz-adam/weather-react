import { Box, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AirIcon from "@mui/icons-material/Air";
import NightlightIcon from "@mui/icons-material/Nightlight";
import React from "react";
import { useSelector } from "react-redux";

function HourlyDisplay({ data }) {
  const timeString = data?.time;
  const [date, time] = timeString ? timeString.split("T") : ["N/A", "N/A"];

  const { weatherData, combinateDailyData } = useSelector(
    (state) => state.search
  );

  const isDaytime = combinateDailyData?.some((day) => {
    const { sunrise, sunset } = day;
    return timeString >= sunrise && timeString <= sunset;
  });

  return (
    <Box
      sx={{
        textAlign: "center",
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        borderRadius: "25px",
        minHeight: "300px",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        boxShadow: "0px 4px 6px 4px rgba(0, 0, 0, 0.6)",
      }}    >
      <Typography sx={{ padding: "2px", fontSize: "24px" }}>{time}</Typography>
      <Typography sx={{ padding: "2px", fontSize: "14px" }}>{date}</Typography>
      {isDaytime ? (
        <WbSunnyIcon sx={{ color: "orange", fontSize: "40px" }} />
      ) : (
        <NightlightIcon sx={{ color: "lightslategray", fontSize: "40px" }} />
      )}
      <Typography sx={{ padding: "2px" }}>
        {data.temperature_2m} {weatherData.hourly_units.temperature_2m}
      </Typography>
      <Box>
        <AirIcon sx={{ color: "cyan", fontSize: "40px" }} />
        <Box>
          <Typography sx={{ padding: "2px" }}>{data.wind_speed_10m}</Typography>
          <Typography>{weatherData.hourly_units.wind_speed_10m}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HourlyDisplay;
