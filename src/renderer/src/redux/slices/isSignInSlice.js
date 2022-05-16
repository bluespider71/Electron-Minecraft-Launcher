import { createSlice} from "@reduxjs/toolkit";

//#region Slice
const { actions, reducer } = createSlice({
    name: "IsSignIn",
    initialState: {
        value: false,
    },
    reducers: {
        setIsSignIn: (state, action) => {
            state.value = action.payload;
        },
    },
});
//#endregion Slice

//#region Thunks
//#endregion Thunks

export { actions };
export default reducer;
