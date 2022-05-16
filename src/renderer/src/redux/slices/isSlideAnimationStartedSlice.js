import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//#region Slice
const { actions, reducer } = createSlice({
    name: "IsSlideAnimationStartedSlice",
    initialState: {
        value: {
            isStarted: false,
            up: false,
        },
    },
    reducers: {
        setIsSlideAnimationStarted: (state, action) => {
            state.value = action.payload;
        },
    },
});
//#endregion Slice

//#region Thunks
//#endregion Thunks

export { actions };
export default reducer;
