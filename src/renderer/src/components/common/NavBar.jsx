import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import logo from "/RIVA_NETWORK_TEXT.png";
import reducers from "../../redux/slices";
import { useDispatch } from "react-redux";

const NavBar = ({ setDeltaY, scroll }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(reducers.isSlideAnimationStarted.setIsSlideAnimationStarted({ isStarted: true, up: true }));
    };
    const [imageLoaded, setImageLoaded] = useState(false);
    let preScroolpos = window.pageXOffset;

    useEffect(() => {

        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "10px";
            } else {
                document.getElementById("navbar").style.top = "0px";
            }
            prevScrollpos = currentScrollPos;
        }
    }, [])
    return (
        <div className="navbar-container">
            {
                scroll > 840 ? (
                    <Grid container className={`navbar-${imageLoaded ? 'visible' : 'hidden'}`} onLoad={() => setImageLoaded(true)}>

                        <Grid item xs={3} md={3} lg={3} className={`smooth-image image-${imageLoaded ? 'visible' : 'hidden'} `} onLoad={() => setImageLoaded(true)} id="navbar">
                            <div className="navbar-button-border clickable" onClick={handleClick}></div>
                            <button className="navbar-button clickable" onClick={handleClick}>
                                OYNA
                            </button>
                        </Grid>
                        <Grid item xs={3} md={3} lg={3} className="navbar-logo">
                            {scroll > 840 ? <img src={logo} className={`smooth-image image-${imageLoaded ? 'visible' : 'hidden'}`} onLoad={() => setImageLoaded(true)} /> : null}
                        </Grid>
                    </Grid>
                ) : null
            }

        </div>
    );
};

export default NavBar;
