import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//#region Slice
const { actions, reducer } = createSlice({
    name: "AnimationRoute",
    initialState: {
        value: "/signin",
    },
    reducers: {
        setAnimationRoute: (state, action) => {
            state.value = action.payload;
        },
    },
});
//#endregion Slice

//#region Thunks
//#endregion Thunks

export { actions };
export default reducer;
