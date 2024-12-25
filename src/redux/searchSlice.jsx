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
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,precipitation,rain,snowfall,wind_speed_10m,wind_gusts_10m&hourly=temperature_2m,rain,wind_speed_10m,wind_gusts_10m,temperature_80m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=auto`
        );
        return {
          cityData,
          weatherData: response.data,
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
      })
      .addCase(fetchCityData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
