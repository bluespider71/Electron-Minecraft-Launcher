import testReducer, { getTestData, actions as testActions } from "./testSlice";
import isEnteredReducer, { actions as isEnteredActions } from "./isEnteredSlice";
import isSignInReducer, { actions as isSignInActions } from "./isSignInSlice";
import animationRouteReducer, { actions as animationRouteActions } from "./animationRouteSlice";
import isSlideAnimationStartedReducer, { actions as isSlideAnimationStartedActions } from "./isSlideAnimationStartedSlice";

export default {
    test: {
        reducer: testReducer,
        getTestData,
        setTestData: testActions.setTestData,
    },
    isEntered: {
        reducer: isEnteredReducer,
        setIsEntered: isEnteredActions.setIsEntered
    },
    isSignIn: {
        reducer: isSignInReducer,
        setIsSignIn: isSignInActions.setIsSignIn
    },
    animationRoute: {
        reducer: animationRouteReducer,
        setAnimationRoute: animationRouteActions.setAnimationRoute
    },
    isSlideAnimationStarted: {
        reducer: isSlideAnimationStartedReducer,
        setIsSlideAnimationStarted: isSlideAnimationStartedActions.setIsSlideAnimationStarted
    }
};
