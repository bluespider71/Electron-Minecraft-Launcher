import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { testService } from "../../services";

//#region Slice
const { actions, reducer } = createSlice({
    name: "Test",
    initialState: {
        value: false,
    },
    reducers: {
        setTestData: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTestData.fulfilled, (state, action) => {});
    },
});
//#endregion Slice

//#region Thunks
const getTestData = createAsyncThunk("getTestData", async (params, ThunkAPI) => {
    var response = await testService.getTestData(params).then((result) => {
        if (result.data) ThunkAPI.dispatch(actions.setTestData(result.data));
        else return result;
    });
    return response;
});
//#endregion Thunks

export { getTestData, actions };
export default reducer;
