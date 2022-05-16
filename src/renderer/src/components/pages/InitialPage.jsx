import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import reducers from "../../redux/slices";
import routes from "../../routes/definitions";
// import logo from "/Group 290.png";
import logo from "/logo.svg";

import LogoText from "/riva-text.png";
import Grid from "@mui/material/Grid";

const Logo = () => (
    <div className="initial-page-logo">
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <img src={logo} alt="initial-page-logo" className="initial-logo"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                {/* <img src={LogoText} alt="initial-page-logo-text" className="initial-logo-text" /> */}
            </Grid>
        </Grid>
    </div>
);

const InitialPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
         if (isComplete) {
            window.resizeTo(import.meta.env.VITE_MAIN_WIDTH, import.meta.env.VITE_MAIN_HEIGHT);
             dispatch(reducers.isEntered.setIsEntered(true));
             navigate(routes.Animation);
         }
    }, [isComplete]);

    useEffect(() => {
        function increase() {
            // Change the variable to modify the speed of the number increasing from 0 to (ms)
            let SPEED = 70;
            // Retrieve the percentage value
            let limit = parseInt(document.getElementById("value2").innerHTML != null && document.getElementById("value2").innerHTML, 10);

            for (let i = 0; i <= limit; i++) {
                setTimeout(function () {
                    document.getElementById("value2").innerHTML != null && (document.getElementById("value2").innerHTML = "%" + i);
                    if (document.getElementById("value2").innerHTML === "%100") {
                        setIsComplete(true);
                    }
                }, SPEED * i);
            }
        }

        increase();
    });

    return (
        <div className="initial-page-container">
            <Grid container className="installation-page-container">
                <div className="initial-logo-container">
                    <Logo />
                </div>
                <div className="initial-loading-text">
                    <p>Dosyalar Yükleniyor...</p>
                </div>

                <div className="initial-chart">
                    <div className="initial-bar"></div>
                    <span id="value2">100</span>
                </div>
            </Grid>
        </div>
    );
};

export default InitialPage;
