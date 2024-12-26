import { Box, Typography } from "@mui/material";
import React from "react";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import SunriseReceipt from "./SunriseReceipt";
import { useSelector } from "react-redux";

function TemperatureOverview() {
  const { combinateDailyData, combinateHourlyData, weatherData } = useSelector(
    (state) => state.search
  );

  /**Legközelebbi időpont */
  let currentHour = weatherData.current.time.slice(0, 13);
  let foundData = combinateHourlyData.find(
    (item) => item.time.slice(0, 13) === currentHour
  );

  /**napkelte napnyugta */
  const sunriseTime = combinateDailyData[0]?.sunrise;
  const sunsetTime = combinateDailyData[0]?.sunset;
  const sunriseT = sunriseTime?.split("T")[1] || "N/A";
  const sunsetT = sunsetTime?.split("T")[1] || "N/A";

  return (
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
          {foundData.temperature_2m} {weatherData.current_units.temperature_2m}
        </Typography>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
        >
          <Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
            Feels like:
          </Typography>
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
            {foundData.apparent_temperature}{" "}
            {weatherData.current_units.temperature_2m}
          </Typography>
        </Box>
      </Box>
      <SunriseReceipt
        icon={WbTwilightIcon}
        value={sunriseT}
        label="Sunrise:"
        color="orange"
      />
      <SunriseReceipt
        icon={WbTwilightIcon}
        value={sunsetT}
        label="Sunset:"
        color="black"
      />
    </Box>
  );
}

export default TemperatureOverview;
