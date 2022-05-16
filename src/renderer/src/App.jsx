import React from "react";
import Routes from "./routes/Routes";
import store from "./redux/store/store";
import { Provider } from "react-redux";



const App = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
};

export default App;
