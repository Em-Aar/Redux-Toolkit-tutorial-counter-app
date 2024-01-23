import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// interface / type of state
interface CounterState {
  value: number;
  status:string
}



//  Initial State values  
// (if you want to name the initialStae like this const initialCounterState or anything, then this variable name needs to be added
// it as value in initialState property of counterslice like so : initialState:initialCounterState)
const initialState: CounterState = {
  value: 0,
  status:'idle'
};

// Create Slice for Counter

export const counterslice = createSlice({
  name: "counter",
  // key would always be initialState and value can be any name which is set in initialState like so : initialState:initialCounterState
  initialState, 
  
  // reducers and actions will be added here
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    reset: (state) => {
      state.value = 0;
    },

    addVal: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },

    decVal: (state, action: PayloadAction<number>) => {
      state.value = state.value - action.payload;
    },
  },

  // for async funcationality, extraReducers will be added
  extraReducers:(builder)=>{
    builder
    .addCase(addAsync.pending,(state)=>{
        state.status='pending'
    })
    
    .addCase(addAsync.fulfilled,(state,action:PayloadAction<number>)=>{
        state.value = state.value + action.payload;
        state.status = 'fulfilled'
    })

  }
});

// For async funcationality - We create actions separately
//createAsyncThunk - Thunk is Redux Middleware
export const addAsync = createAsyncThunk(
    'counter/addAsync',
    async(amount:number)=>{
        await new Promise ((resolve)=>setTimeout(resolve,4000));
        return amount;
    }

)



// action creator - named export
export const { increment, decrement, reset, addVal, decVal } =
  counterslice.actions;

// reducer - default export
export default counterslice.reducer;
