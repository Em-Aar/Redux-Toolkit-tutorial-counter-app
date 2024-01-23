
import counterReducer from '@/redux/counter/counterSlice';
import { configureStore } from '@reduxjs/toolkit';



export const reduxStore = configureStore({
    reducer:{
        counter:counterReducer,

    }
})


export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch

// export default reduxStore;