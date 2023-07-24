import { configureStore } from "@reduxjs/toolkit";
import utilsSlice from "./feature/utils/utilsSlice";

export const store = configureStore({
    reducer: {
        utils: utilsSlice
    }
})