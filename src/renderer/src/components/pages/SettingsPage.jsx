import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import LauncherSettingsRight from "./SettingsPageRight";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import { SocialIcon } from "react-social-icons";
import NavBar from "../common/NavBar";

const LauncherSettings = ({setDeltaY, scroll}) => {
    return (
        <div className="settings-container">
            <Grid container className="clickable">
                <Grid item xs={12} md={12} lg={12}>
                    <NavBar setDeltaY={setDeltaY} scroll={scroll} />
                </Grid>
            </Grid>

            <Grid container spacing={2} className="launcher-container clickable">
                <Grid item xs={6}>
                    <h2 className="">HAKKINDA</h2>
                    <p  className="setting-heading1">Riva Network®, sayısız oyun moduna sahip, oynaması ücretsiz bir Minecraft sunucusudur. RivaNetwork'de yeni arkadaşlıklar kurabilir, kendi ekibini oluşturabilir ve Riva Launcher ile normal Minecraft deneyiminin üstünde gününü bir solukta bitirebileceğin mükemmel bir oyun deneyimi yaşayabilirsin.</p>
                    <Grid item xs={12} sm={12} md={12} lg={12} className="social-medi-text">
                        <p  className="setting-heading1"> Sosyal Medya </p>
                    </Grid>
                    <div className="settings-social-media">
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <ul className="settings-social-media-grid">
                                    <li>
                                        {" "}
                                        <SocialIcon url="https://www.telegram.com/rivanetwork/" style={{ height: "20px", width: "20px", marginLeft: "19px" }} />
                                    </li>
                                    <div className="settings-social-icon-bar"></div>
                                    <li>
                                        <SocialIcon url="https://www.tiktok.com/rivanetwork/" style={{ height: "20px", width: "20px", marginLeft: "19px" }} />
                                    </li>
                                    <div className="settings-social-icon-bar"></div>
                                    <li>
                                        <SocialIcon url="https://www.instagram.com/rivanetwork/" style={{ height: "20px", width: "20px", marginLeft: "19px" }} />
                                    </li>
                                    <div className="settings-social-icon-bar"> </div>
                                    <li>
                                        <SocialIcon url="https://discord.gg/Nm2h5mszSv" style={{ height: "20px", width: "20px", marginLeft: "19px" }} />
                                    </li>
                                    <div className="settings-social-icon-bar"></div>
                                    <li>
                                        <SocialIcon url="https://www.youtube.com/channel/UCFTJ0JmTSqXz_dEoRuolhMg" style={{ height: "20px", width: "20px", marginLeft: "19px" }} />
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="launcher-container-right">
                        <LauncherSettingsRight />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default LauncherSettings;
