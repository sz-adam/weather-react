import { Box } from "@mui/material";
import React from "react";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import Sunny from "./Sunny";
import WeatherDetails from "./WeatherDetails";
import TemperatureOverview from "./TemperatureOverview";
import { useSelector } from "react-redux";

function DailyWeather() {
  const { combinateDailyData, weatherData } = useSelector(
    (state) => state.search
  );
  return (
    <Box
      sx={{
        padding: 0.9,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(3px)",
        borderRadius: "10px",
        margin: { xs: "6px", md: "2px" },
        width: "90%",
      }}
    >
      {/**Box 1 */}
      <TemperatureOverview />
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
          <WeatherDetails
            icon={ThunderstormIcon}
            value={{
              weather: combinateDailyData[0].rain_sum,
              unit: weatherData?.daily_units.rain_sum,
            }}
            label="Rain"
            color="lightBlue"
          />
          <WeatherDetails
            icon={AirIcon}
            value={{
              weather: combinateDailyData[0].wind_speed_10m_max,
              unit: weatherData?.daily_units.wind_speed_10m_max,
            }}
            label="Wind Speed"
            color="cyan"
          />
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
            value={{
              weather: combinateDailyData[0].temperature_max,
              unit: weatherData?.daily_units.temperature_2m_max,
            }}
            label="Temperature max"
            color="red"
          />
          <WeatherDetails
            icon={ThermostatIcon}
            value={{
              weather: combinateDailyData[0].temperature_min,
              unit: weatherData?.daily_units.temperature_2m_min,
            }}
            label="Temperature min"
            color="blue"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DailyWeather;
