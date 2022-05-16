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
            <Grid container className="installation-page-container" style={{marginTop:"120px"}}>
                <Grid xs={9} sm={9} md={9} lg={9}>
                    <p style={{ color: "#fff", fontSize: " 1.7rem" }}>Oyunu kaldırmak istediğinden emin misin?</p>
                </Grid>
                <Grid xs={2} sm={2} md={2} lg={2}></Grid>

                <Grid style={{marginTop:"30px"}}>
                    <button
                        className="installation-page-button clickable"
                        onClick={() => {
                            navigate(routes.InitialDeletePage);
                        }}
                    >
                        KALDIR
                    </button>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12} style={{marginTop:"60px"}}>
                    <Grid>
                        <Logo />
                    </Grid>

                    <div className="installation-copyright" >
                        <p style={{ opacity: "0.20000000298023224" }}>RIVA LAUNCHER ® 2022</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default InstallationPage;
