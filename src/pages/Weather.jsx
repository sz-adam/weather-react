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

import summer from "../assets/images/summer.jpg";
import rain from "../assets/images/rain.jpg";
import snow from "../assets/images/snow.jpg";
import nightImage from "../assets/images/night.jpg";
import { dayTime } from "../utils/WeatherHelper";
import Error from "../components/Error";

function Weather() {
  const { cityData, weatherData, combinateDailyData, error } = useSelector(
    (state) => state.search
  );
  const night = dayTime(weatherData);

  const backgroundImage =
    combinateDailyData.length > 0 ? combinateDailyData[0] : {};

  let image;
  if (backgroundImage.rain_sum > 0) {
    image = rain;
  } else if (backgroundImage.snowfall_sum > 0) {
    image = snow;
  } else {
    image = night ? summer : nightImage;
  }
  const height = weatherData && cityData ? "100%" : "100vh";

  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: {
          xs: height,
          md: "100vh",
        },
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
        <Error />
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
                <Daysforecast units={weatherData.daily_units} />
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
