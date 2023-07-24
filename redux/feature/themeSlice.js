const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    dark: false
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setThem: (state) => {
            state.dark = !state.dark
        }
    }
})

export const { setThem } = themeSlice.actions
export default themeSlice.reducer