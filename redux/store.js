import themeSlice from "./feature/themeSlice";

const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    reducer: {
        theme: themeSlice
    }
})
