import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataType } from "../category/Category";

interface DataState {
  data: DataType | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const response = await fetch("/data.json");
    if (!response.ok) throw new Error("failed to fetch data");
    const data: DataType = await response.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default dataSlice.reducer;
