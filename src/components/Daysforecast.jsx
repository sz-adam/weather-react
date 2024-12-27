import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import WeatherIcon from "./WeatherIcon";
import { dayTime } from "../utils/WeatherHelper";

function Daysforecast({ units }) {
  const { combinateDailyData, weatherData } = useSelector(
    (state) => state.search
  );
  const night = dayTime(weatherData);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(3px)",
        borderRadius: "10px",
        margin: "6px",
        width: {
          xs: "90%",
          md: "400px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "16px", md: "28px" },
          fontWeight: "bold",
        }}
      >
        7 Days forecast
      </Typography>

      {combinateDailyData.map((day, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              marginTop: "10px",
              marginBottom: "5px",
            }}
          >
            <WeatherIcon combinateDay={day} night={night} />
            <Typography>
              {day.temperature_max} {units.temperature_2m_max}
            </Typography>
            <Typography>
              {new Date(day.time).toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "short",
              })}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default Daysforecast;
