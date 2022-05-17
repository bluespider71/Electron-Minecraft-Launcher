import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MainLauncherbg from "/Group-363.png";
import Launcher from "/Launcher-2.png";
import RivaLogo from "/riva.png";
import LuncherUser from "/Launcher-user.png";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/definitions";
import { useDispatch, useSelector } from "react-redux";
import reducers from "../../redux/slices";
import logo from "/RIVA_NETWORK_TEXT.png";
import SettingsPage from "./SettingsPage";
import { style } from "@mui/system";

const MainLauncher = () => {
    const [deltaY, setDeltaY] = useState(0);
    const navigate = useNavigate();
    const isSlideAnimationStarted = useSelector((state) => state.isSlideAnimationStarted.value);
    const [gameButtonIsClicked, setGameButtonIsClicked] = useState(false);
    const dispatch = useDispatch();



    useEffect(() => {
        if (isSlideAnimationStarted.isStarted) {
            if (isSlideAnimationStarted.up) {
                setTimeout(() => {
                    setDeltaY(0);
                }, 1000)
            } else {
                setTimeout(() => {
                    setDeltaY(900);
                }, 1000)
            }
        }

    }, [isSlideAnimationStarted]);

    useEffect(() => {
        dispatch(reducers.isEntered.setIsEntered(false));
    }, []);
    useEffect(() => {
        if (gameButtonIsClicked === true) {
            function increase() {
                // Change the variable to modify the speed of the number increasing from 0 to (ms)
                let SPEED = 70;
                // Retrieve the percentage value
                let limit = parseInt(document.getElementById("value1").innerHTML != null && document.getElementById("value1").innerHTML, 10);

                for (let i = 0; i <= limit; i++) {
                    setTimeout(function () {
                        document.getElementById("value1").innerHTML != null && (document.getElementById("value1").innerHTML = i + "%");
                    }, SPEED * i);
                }
            }

            increase();
        }
    }, [gameButtonIsClicked]);

    const onClickHandler = (e) => {
        setGameButtonIsClicked(true);
    }

    const condition = isSlideAnimationStarted.isStarted ? (isSlideAnimationStarted.up ? "loading-screen-container-up" : "loading-screen-container-down") : "loading-screen-container";

    return (
        <div style={{ marginTop: `-${deltaY >= 900 ? 900 : deltaY}px`, transition: 'margin-top ,1s' }} className={condition}>
            <div className="bg"></div>

            <div className="clickable slide-animation">
                <Grid
                    container
                    className="main-grid"
                    square="true"
                    item
                    xs={false}
                    sm={4}
                    md={12}
                    sx={{
                        backgroundImage: `url("${MainLauncherbg}")`,
                        backgroundRepeat: "no-repeat",
                        height: `${deltaY >= 900 ? 100 : 102}vh`,
                        display: "flex",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="loading-screen-logo">
                        <img src={logo} />
                    </div>{" "}
                    <div className="launcher-user">
                        <img src={LuncherUser} alt="LuncherUser" />
                        <p className="luancher-text">
                            <span style={{ opacity: 0.5, fontSize: '1rem', }}>Kullanıcı Adı</span>  <br />
                            <span style={{ opacity: "1", marginTop: '1.5rem' }}>RivaDarlin</span>
                        </p>
                    </div>

                    {gameButtonIsClicked ? <>

                        <div id="value1">{gameButtonIsClicked ? "100" : "0%"}</div>

                    </> : <div style={{ marginTop: '300px' }}></div>}
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                            {gameButtonIsClicked ? <>
                                <div className="chart">

                                    <div className={gameButtonIsClicked ? "animated-bar" : "bar"}></div>

                                </div>
                            </> : <div style={{ marginTop: '530px' }}>

                            </div>}
                        </Grid>
                    </Grid>
                    <div className={isSlideAnimationStarted.isStarted && !isSlideAnimationStarted.up ? "loading-screen-footer slide-below" : "loading-screen-footer"}>
                        <div className={isSlideAnimationStarted.isStarted && !isSlideAnimationStarted.up ? "loading-screen-user-info slide-below" : "loading-screen-user-info"}>

                        </div>
                        <button className="loading-screen-button" onClick={onClickHandler}>
                            OYNA
                        </button>
                    </div>
                    <div className={isSlideAnimationStarted.isStarted && !isSlideAnimationStarted.up ? "loading-screen-image slide-below" : "loading-screen-image"}>
                        <div className="loading-screen-image-button" style={{
                            backgroundImage: `linear-gradient(to right, rgba(216, 216, 216, 0.2), rgba(255, 255, 255, 0.2)), url(${Launcher})`,
                        }} onClick={() => {
                            setDeltaY(1000);
                        }}>
                            <div className="copyright1">
                                <p>Riva'da...</p>
                                <p>12655 kişi oynuyor!</p>
                            </div>
                        </div>

                    </div>
                </Grid>
            </div >

            <div className="second-page-container">
                <SettingsPage scroll={deltaY} />
            </div>
        </div >
    );
};

export default MainLauncher;
