import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCityData = createAsyncThunk(
  "weather/fetchCityData",
  async (cityName, { rejectWithValue }) => {
    try {
      const geoResponse = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
      );

      if (
        !geoResponse.data ||
        !geoResponse.data.results        
      ) {
        return rejectWithValue("City not found.");
      }

      const cityData = geoResponse.data.results[0];
      const { latitude, longitude } = cityData;

      const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,precipitation,rain,snowfall,wind_speed_10m,wind_gusts_10m&hourly=temperature_2m,apparent_temperature,rain,wind_speed_10m,wind_gusts_10m,temperature_80m&daily=apparent_temperature_max,temperature_2m_max,temperature_2m_min,sunrise,sunset&daily=wind_speed_10m_max,rain_sum,snowfall_sum&timezone=auto`
      );

      if (!weatherResponse.data) {
        return rejectWithValue("Failed to fetch weather data.");
      }

      const combinateDailyData = weatherResponse.data.daily.time.map(
        (time, index) => ({
          time,
          rain_sum: weatherResponse.data.daily.rain_sum[index],
          snowfall_sum: weatherResponse.data.daily.snowfall_sum[index],
          sunrise: weatherResponse.data.daily.sunrise[index],
          sunset: weatherResponse.data.daily.sunset[index],
          temperature_max: weatherResponse.data.daily.temperature_2m_max[index],
          temperature_min: weatherResponse.data.daily.temperature_2m_min[index],
          wind_speed_10m_max:
            weatherResponse.data.daily.wind_speed_10m_max[index],
        })
      );

      const combinateHourlyData = weatherResponse.data.hourly.time.map(
        (time, index) => ({
          time,
          rain: weatherResponse.data.hourly.rain[index],
          temperature_2m: weatherResponse.data.hourly.temperature_2m[index],
          wind_gusts_10m: weatherResponse.data.hourly.wind_gusts_10m[index],
          wind_speed_10m: weatherResponse.data.hourly.wind_speed_10m[index],
          apparent_temperature:
            weatherResponse.data.hourly.apparent_temperature[index],
        })
      );

      return {
        cityData,
        weatherData: weatherResponse.data,
        combinateDailyData,
        combinateHourlyData,
      };
    } catch (error) {
      return rejectWithValue("An error occurred while fetching city data.");
    }
  }
);

const searchSlice = createSlice({
  name: "weather",
  initialState: {
    cityData: null,
    weatherData: null,
    status: "idle",
    error: null,
    combinateDailyData: [],
    combinateHourlyData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCityData.fulfilled, (state, action) => {
        state.status = "succeed";
        state.cityData = action.payload.cityData;
        state.weatherData = action.payload.weatherData;
        state.combinateDailyData = action.payload.combinateDailyData;
        state.combinateHourlyData = action.payload.combinateHourlyData;
      })
      .addCase(fetchCityData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default searchSlice.reducer;
