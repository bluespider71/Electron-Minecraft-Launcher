import { combineReducers } from "@reduxjs/toolkit";
import reducers from "./../slices";

// Combine reducers and combine them into a single reducer.
const reducer = combineReducers({
    test: reducers.test.reducer,
    isEntered: reducers.isEntered.reducer,
    isSignIn: reducers.isSignIn.reducer,
    animationRoute: reducers.animationRoute.reducer,
    isSlideAnimationStarted: reducers.isSlideAnimationStarted.reducer,
});

export default reducer;
