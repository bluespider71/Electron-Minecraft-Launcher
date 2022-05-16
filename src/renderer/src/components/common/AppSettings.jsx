import React from "react";
import { IconButton } from "@material-ui/core";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/definitions";
import { useDispatch } from "react-redux";
import reducers from "../../redux/slices";

export const AppSettings = () => {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(reducers.isSignIn.setIsSignIn(false));
        dispatch(reducers.isEntered.setIsEntered(true));
        navigate(routes.SignIn);
    };

    const handleSettingsPageOpen = () => {
        dispatch(reducers.isSlideAnimationStarted.setIsSlideAnimationStarted({ isStarted: true, up: false }));
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
        if(anchorEl){
            setAnchorEl(null);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleExternal = () => { 
        let shell = require('electron').shell     
            shell.openExternal('https://rivanetwork.com.tr/profil/')
        handleClose();
        document.removeEventListener('click', function (event) {
            event.preventDefault();
        })
    }
    return (
        <div>
            <div className="app-bar-settings clickable">
                <div className="settings-button">
                    <IconButton size="large" style={{ opacity: "1" }} onClick={handleMenu} color="inherit">
                        <PersonOutlineOutlinedIcon />
                    </IconButton>
                </div>
                <div className="app-bar-menu-container">
                    <Menu
                        className="app-bar-menu clickable"
                        style={{
                            position: "absolute",
                            zIndex: "10000",
                        }}
                        PaperProps={{
                            style: {
                                backgroundColor: "rgba(16, 23, 31,0.75)",

                                textDecoration: "none !important",
                                height: "150px",
                                width: "185px",
                                marginLeft: "auto",
                            },
                        }}
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleExternal} sx={{ color: "white !important", marginBottom: "10px !important", marginLeft: "5% !important" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "5%" }}>
                                <GppGoodOutlinedIcon style={{ marginInline: "4%" }} /> Hesap Güvenliği
                            </div>
                        </MenuItem>
                        <MenuItem onClick={handleClose} sx={{ color: "white !important", marginBottom: "10px !important", marginLeft: "5% !important" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "5%" }}>
                                <PeopleAltOutlinedIcon style={{ marginInline: "4%" }} /> Hesap Değiştir
                            </div>
                        </MenuItem>
                        <MenuItem sx={{ color: "white !important", marginBottom: "10px !important", marginLeft: "5% !important" }}>
                            <div onClick={handleSettingsPageOpen} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "5%" }}>
                                <SettingsOutlinedIcon style={{ marginInline: "10%" }} /> Ayarlar
                            </div>
                        </MenuItem>
                        <div style={{ backgroundColor: "#fff", opacity: "0.25", height: "1px", width: "90%", marginLeft: "2%", marginBottom: "5px" }}></div>
                        <MenuItem onClick={handleClose} sx={{ color: "red !important", marginLeft: "5% !important" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "5%" }} onClick={() => handleSignOut()}>
                                <LoginOutlinedIcon style={{ marginInline: "6%" }} />
                                Oturumu Kapat
                            </div>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
};
