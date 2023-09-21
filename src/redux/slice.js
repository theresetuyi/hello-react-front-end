import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchGreeting = createAsyncThunk('greeting/fetch',
  async () => {
    const response = await fetch('http://localhost:3001/greetings');
    const data = await response.json();
    return data.message;
  });

const slice = createSlice({
  name: 'slice',
  initialState: {
    greeting: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload;
      });
  },
});

export default slice;
export { fetchGreeting };
