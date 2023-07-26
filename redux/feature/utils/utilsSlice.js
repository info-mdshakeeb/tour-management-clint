const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    dark: "hello",
    location: null

}
const utilsSlice = createSlice({
    name: "utils",
    initialState,
    reducers: {
        setTheme: (state) => {
            state.dark = !state.dark
        },
        redirectToRight: (state, action) => {
            state.redirectToRight = action.payload
        }
    }
})
export const { setTheme } = utilsSlice.actions;
export default utilsSlice.reducer