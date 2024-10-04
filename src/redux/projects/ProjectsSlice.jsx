import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProjects = createAsyncThunk(
  'projects/getProjects',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://script.google.com/macros/s/AKfycbznOHWwzLt3FbVVTQN13F4DUPnAnxcvJHpCrfX9omuGZ7COtpjNZ3u3dOf-BSOABfIwBg/exec',
      );
      const endData = response.data.data;
      return endData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const initialState = {
  projectItems: [],
  error: '',
};
const projectsSlice = createSlice({
  name: 'projecct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projectItems = action.payload;
    });
    builder.addCase(getProjects.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export default projectsSlice.reducer;