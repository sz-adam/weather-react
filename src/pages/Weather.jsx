import React from "react";
import Input from "../components/Input";
import Grid from "@mui/material/Grid2";
import Place from "../components/Place";
import DailyWeather from "../components/DailyWeather";
import { Box } from "@mui/material";
import Sunny from "../components/Sunny";
import Daysforecast from "../components/Daysforecast";
import HourlyForecast from "../components/HourlyForecast";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";

function Weather() {
  const { cityData, weatherData, status, error } = useSelector(
    (state) => state.search
  );
  console.log(weatherData);

  const combinateDailyData = weatherData?.daily.time.map((time, index) => ({
    time,
    rain_sum: weatherData.daily.rain_sum[index],
    snowfall_sum: weatherData.daily.snowfall_sum[index],
    sunrise: weatherData.daily.sunrise[index],
    sunset: weatherData.daily.sunset[index],
    temperature_max: weatherData.daily.temperature_2m_max[index],
    temperature_min: weatherData.daily.temperature_2m_min[index],
  }));


  return (
    <Box
      style={{
        backgroundColor: "rgb(128, 128, 128)",
        height: "100vh",
        width: "100%",
      }}
    >
      <Input />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {error && (
          <Alert severity="error" sx={{ textAlign: "center" }}>
            {error}
          </Alert>
        )}
        {weatherData && cityData ? (
          <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Place />
              </Grid>
              <Grid
                size={{ xs: 12, md: 8 }}
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: "none",
                  },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/**Box 2 sm megjelenítés */}
                <Sunny display={{ xs: "flex", md: "none" }} />
                <DailyWeather />
              </Grid>
              {/**Box 3 */}
              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Daysforecast
                  combinateDailyData={combinateDailyData}
                  units={weatherData.daily_units}
                />
              </Grid>
              <Grid
                size={{ xs: 12, md: 8 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HourlyForecast />
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box
            sx={{
              marginTop: "40px",
              textAlign: "center",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            Enter a city name .
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Weather;
