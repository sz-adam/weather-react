import { Box, Typography } from "@mui/material";
import React from "react";
import WeatherIcon from "./WeatherIcon";
import { useSelector } from "react-redux";

function Sunny({ display }) {
  const { combinateDailyData } = useSelector((state) => state.search);
  const combinateDay = combinateDailyData[0];

  return (
    <Box
      sx={{
        display: display,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: "10px",
        margin: "6px",
        width: {
          xs: "90%",
          md: "0%",
        },
      }}
    >
      <WeatherIcon combinateDay={combinateDay} fontSize={100} />
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "16px", md: "28px" },
          fontWeight: "bold",
        }}
      >
        Sunny
      </Typography>
    </Box>
  );
}

export default Sunny;
