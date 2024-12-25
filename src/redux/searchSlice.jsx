import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCityData = createAsyncThunk(
  "weather/fetchCityData",
  async (cityName) => {
    try {
      const response = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
      );

      const cityData = response.data.results[0];
      if (cityData) {
        const { latitude, longitude } = cityData;
        const response = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,precipitation,rain,snowfall,wind_speed_10m,wind_gusts_10m&hourly=temperature_2m,rain,wind_speed_10m,wind_gusts_10m,temperature_80m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&daily=rain_sum,snowfall_sum&timezone=auto`
        );

        const combinateDailyData = response.data.daily.time.map(
          (time, index) => ({
            time,
            rain_sum: response.data.daily.rain_sum[index],
            snowfall_sum: response.data.daily.snowfall_sum[index],
            sunrise: response.data.daily.sunrise[index],
            sunset: response.data.daily.sunset[index],
            temperature_max: response.data.daily.temperature_2m_max[index],
            temperature_min: response.data.daily.temperature_2m_min[index],
          })
        );
        return {
          cityData,
          weatherData: response.data,
          combinateDailyData,
        };
      } else {
        throw new Error("City not found.");
      }
    } catch (error) {
      throw Error("An error occurred while fetching city data");
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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCityData.fulfilled, (state, action) => {
        state.status = "succeed";
        state.cityData = action.payload.cityData;
        state.weatherData = action.payload.weatherData;
        state.combinateDailyData = action.payload.combinateDailyData;
      })
      .addCase(fetchCityData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
