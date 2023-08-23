import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}


//action = function, state = currentState or initialState.... increment, decrement, reset and incrementByAmount are all functions but the first three don't have a payload[or any parameter on them], only the last one has a payload.. that's why action was brought in.
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;