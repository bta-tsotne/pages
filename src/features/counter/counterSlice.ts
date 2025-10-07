import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

interface MagidaState {
  skami: string;
}

const initialState: CounterState = { value: 0 };
const magidaInitialState: MagidaState = { skami: 'სკამი' };

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increament: (state) => { state.value += 1; },
    decreament: (state) => { state.value -= 1; },
    reset: (state) => { state.value = initialState.value; },
    increaseByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

const magidaSlice = createSlice({
  name: 'magida',
  initialState: magidaInitialState,
  reducers: {
    dabechde: (state) => { state.skami = 'ახალი სკამი'; },
  }
});

export const { increament, decreament, increaseByAmount, reset } = counterSlice.actions;
export const { dabechde } = magidaSlice.actions;
export const magidaReducer = magidaSlice.reducer;
export default counterSlice.reducer;