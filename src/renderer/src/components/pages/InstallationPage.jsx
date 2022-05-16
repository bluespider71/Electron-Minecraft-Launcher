import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/definitions";
import Grid from "@mui/material/Grid";
import logo from "/riva.png";

const Logo = () => (
    <div className="installation-page-logo">
        <img src={logo} alt="installation-page-logo" />
    </div>
);

const InstallationPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Grid container className="installation-page-container">
                <Grid xs={11} sm={11} md={11} lg={11}>
                    <p className="big-text">
                        MÜKEMMEL <br />
                        OYUN <br />
                        DENEYIMI
                    </p>
                    <p className="small-text">
                        Riva'nın hızlı ve eşsiz launcher'i ile <br />
                        maceraya atıl!
                    </p>
                </Grid>
                <Grid>
                    <button
                        className="installation-page-button clickable"
                        onClick={() => {
                            navigate(routes.InitialPage);
                        }}
                    >
                        INDIR
                    </button>
                </Grid>
                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid>
                        <Logo />
                    </Grid>

                    <div className="installation-copyright">
                        <p style={{ opacity: "0.20000000298023224" }}>RIVA LAUNCHER ® 2022</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default InstallationPage;
