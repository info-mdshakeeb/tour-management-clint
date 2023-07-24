const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    dark: "hello"
}
const utilsSlice = createSlice({
    name: "utils",
    initialState,
    reducers: {
        setTheme: (state) => {
            state.dark = !state.dark
        }
    }
})
export const { setTheme } = utilsSlice.actions;
export default utilsSlice.reducer