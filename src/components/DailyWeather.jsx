import { Box, Typography } from "@mui/material";
import React from "react";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import Sunny from "./Sunny";
import WeatherDetails from "./WeatherDetails";
import SunriseReceipt from "./SunriseReceipt";

function DailyWeather() {
  return (
    <Box
      sx={{
        padding: 0.9,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        margin: { xs: "6px", md: "2px" },
        width: "90%",
      }}
    >
      {/**Box 1 */}
      <Box>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "20px",
                sm: "30px",
                md: "40px",
              },
            }}
          >
            24 C
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
          >
            <Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
              Feels like:{" "}
            </Typography>
            <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
              22 C
            </Typography>
          </Box>
        </Box>
        <SunriseReceipt
          icon={WbTwilightIcon}
          value="15:55 AM"
          label="Sunrise"
          color="orange"
        />
        <SunriseReceipt
          icon={WbTwilightIcon}
          value="06:53 AM"
          label="Sunset"
          color="black"
        />
      </Box>
      {/**Box 2 */}
      <Sunny display={{ xs: "none", md: "flex" }} />
      {/**Box 3 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: {
            xs: "65%",
            md: "300px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <WeatherDetails icon={ThunderstormIcon} value="2mm" label="Rain" />
          <WeatherDetails icon={AirIcon} value="17.6 km/h" label="Wind Speed" />
        </Box>
        {/**Box 4 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <WeatherDetails
            icon={ThermostatIcon}
            value="6 C"
            label="Temperature max"
          />
          <WeatherDetails
            icon={ThermostatIcon}
            value="-10 C"
            label="Temperature min"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DailyWeather;
