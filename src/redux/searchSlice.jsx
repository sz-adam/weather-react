import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCityData = createAsyncThunk(
  "weather/fetchCityData",
  async (cityName) => {
    try {
      const response = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
      );
      return response.data.results[0];
    } catch (error) {
      throw Error(
        error.message || "An error occurred while fetching city data"
      );
    }
  }
);

const searchSlice = createSlice({
  name: "weather",
  initialState: {
    cityData: [],
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
        state.status = "succeeded";
        state.cityData = action.payload;
        console.log(state.cityData);
      })
      .addCase(fetchCityData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
