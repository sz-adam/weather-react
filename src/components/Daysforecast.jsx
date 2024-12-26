import { Box, Typography } from "@mui/material";
import React from "react";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useSelector } from "react-redux";

function Daysforecast({ units }) {
  const { combinateDailyData } = useSelector((state) => state.search);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
        backgroundColor: "#ffffff",
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
        let icon = (
          <WbSunnyIcon
            sx={{
              color: "orange",
              fontSize: "32px",
            }}
          />
        );
        if (day.rain_sum > 0) {
          icon = (
            <ThunderstormIcon
              sx={{
                color: "lightskyblue",
                fontSize: "32px",
              }}
            />
          );
        } else if (day.snowfall_sum > 0) {
          icon = (
            <AcUnitIcon
              sx={{
                color: "white",
                fontSize: "32px",
              }}
            />
          );
        }

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
            {icon}
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
