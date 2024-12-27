import { Box, Typography } from "@mui/material";
import React from "react";
import WeatherIcon from "./WeatherIcon";
import { useSelector } from "react-redux";
import { dayTime } from "../utils/WeatherHelper";

function Sunny({ display }) {
  const { combinateDailyData, weatherData } = useSelector(
    (state) => state.search
  );
  const combinateDay = combinateDailyData[0];
  const night = dayTime(weatherData);

  let weatherString;
  if (combinateDailyData[0].rain_sum > 0) {
    weatherString = (
      <Typography
        sx={{ fontWeight: "bold", fontSize: "24px", letterSpacing: "5px" }}
      >
        Rain
      </Typography>
    );
  } else if (combinateDailyData.snowfall_sum > 0) {
    weatherString = (
      <Typography
        sx={{ fontWeight: "bold", fontSize: "24px", letterSpacing: "5px" }}
      >
        Snow
      </Typography>
    );
  } else {
    weatherString = night ? (
      <Typography
        sx={{ fontWeight: "bold", fontSize: "24px", letterSpacing: "5px" }}
      >
        Sunny
      </Typography>
    ) : (
      <Typography
        sx={{ fontWeight: "bold", fontSize: "24px", letterSpacing: "5px" }}
      >
        Night
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: display,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(3px)",
        borderRadius: "10px",
        margin: "6px",
        width: {
          xs: "90%",
          md: "0%",
        },
      }}
    >
      <WeatherIcon combinateDay={combinateDay} fontSize={100} night={night} />
      <Box
        sx={{
          textAlign: "center",
          fontSize: { xs: "16px", md: "28px" },
          fontWeight: "bold",
        }}
      >
        {weatherString}
      </Box>
    </Box>
  );
}

export default Sunny;
