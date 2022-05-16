import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

import routes from "./definitions";

/** Components */
import UnderConstruction from "../components/pages/UnderConstruction";
import InstallationPage from "../components/pages/InstallationPage";
import AppBar from "../components/common/AppBar";
import SignIn from "../components/pages/SignIn";
import LoadingScreen from "../components/pages/LoadingScreen";
import LauncherGamesScreen from "../components/pages/LauncherGamesScreen";
import CreateNewAccount from "../components/pages/CreateNewAccount";
import InitialPage from "../components/pages/InitialPage";
import { AppSettings } from "../components/common/AppSettings";
import Animation from "../components/common/Animation";
import InitialDeletePage from "../components/pages/InitialDeletePage";
import DeletePage from "../components/pages/DeletePage";

const CreateRoutes = () => {
    return useRoutes([
        { path: routes.Home, element: <InstallationPage /> },
        /* Main Pages */
        { path: routes.SignIn, element: <SignIn /> },
        { path: routes.LoadingScreen, element: <LoadingScreen /> },
        { path: routes.LauncherGameScreen, element: <LauncherGamesScreen /> },
        { path: routes.CreateNewAccount, element: <CreateNewAccount /> },
        { path: routes.InitialPage, element: <InitialPage /> },
        { path: routes.Animation, element: <Animation /> },
        { path: routes.InitialDeletePage, element: <InitialDeletePage /> },
    ]);
};

const Routes = () => {
    /** Definitions and useStates*/
    const isEntered = useSelector((state) => state.isEntered.value);
    const isSignIn = useSelector((state) => state.isSignIn.value);

    return (
        <BrowserRouter>
            <AppBar />
            {isSignIn && <AppSettings />}
            <CreateRoutes />
        </BrowserRouter>
    );
};

export default Routes;
