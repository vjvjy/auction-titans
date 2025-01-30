import { configureStore } from "@reduxjs/toolkit";
import { userDetailsReducer } from "./UserDetails/userDetailsSlice";

export const store = configureStore({
    reducer: {
        user: userDetailsReducer,
    },
})
