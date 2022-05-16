import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//#region Slice
const { actions, reducer } = createSlice({
    name: "IsEntered",
    initialState: {
        value: false,
    },
    reducers: {
        setIsEntered: (state, action) => {
            state.value = action.payload;
        },
    },
});
//#endregion Slice

//#region Thunks
//#endregion Thunks

export { actions };
export default reducer;
