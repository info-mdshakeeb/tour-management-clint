import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import utilsSlice from "./feature/utils/utilsSlice";

export const store = configureStore({
    reducer: {
        utils: utilsSlice,
        [api.reducerPath]: api.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})