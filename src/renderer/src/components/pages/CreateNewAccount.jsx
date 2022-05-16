import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Launcher1 from "/launcher-1.png";
import logo from "/RIVA_NETWORK_TEXT.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/definitions";
import { SocialIcon } from "react-social-icons";
import { useDispatch } from "react-redux";
import reducers from "../../redux/slices";
import ReactCodeInput from "react-verification-code-input";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TextBox from "../common/Verification/TextBox";
import { withStyles } from "@material-ui/core/styles";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const CustomColorCheckbox = withStyles({
    root: {
        color: "#fff",
        "&$checked": {
            color: "#fff",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const App = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <Grid container component="main" sx={{ height: "100vh", width: "120%" }}>
            <CssBaseline />
            <Grid
                item
                sx={{
                    backgroundColor: "#10171f",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    paddingLeft: "2%",
                }}
                sm={5}
                md={3}
                component={Paper}
                elevation={6}
                square
            >
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: "#fff",
                    }}
                >
                    <div className="signin-header">
                        <img src={logo} />
                    </div>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: "100%" }} className="clickable">
                        <h2 className="signup-top-heading1">Onay kodu</h2>
                        <h3  className="signup-top-heading2" style={{ opacity: "0.4000000059604645" }}>E-posta adresinize gönderilen 6 haneli kodu giriniz.</h3>
                        {/* <ReactCodeInput placeholder={[0,0,0,0,0,0]} fieldWidth={53} fieldHeight={50}  /> */}
                        <TextBox />
                        <Grid container sx={{ marginTop: "30px", width: "80%", marginLeft: "10%" }}>
                            <Grid item sx={12} md={12} lg={12}>
                                {" "}
                                <div style={{ display: "flex", alignItems: "center", cursor: "pointer", marginTop: "-8px",marginLeft:"-40px" }} onClick={() => handleChange(!checked)} className="clickable">
                                    <CustomColorCheckbox checked={checked} icon={<RadioButtonUncheckedIcon style={{ height: "15px", width: "15px" }} />} checkedIcon={<RadioButtonCheckedIcon style={{ height: "15px", width: "15px" }} />} label="Beni Hatırla" />
                                    <div  className="signup-checkbox-lable"  
                                    style={{ }}>Bu cihazda hep izin ver</div>
                                </div>
                            </Grid>
                        </Grid>

                        <div
                            className="signin-button"
                            onClick={() => {
                                dispatch(reducers.isSignIn.setIsSignIn(false));
                                navigate(routes.SignIn);
                            }}
                        >
                            <ArrowForwardIosIcon sx={{ color: "rgba(#000,0.2) !important", border: "5px solid white", opacity: "0.20000000298023224", padding: "15px", borderRadius: "50px", height: "80px", width: "80px" }} />
                        </div>
                        <Grid container sx={{ marginTop: "30px", marginBottom: "30px" }}></Grid>
                    </Box>
                    <div className="signin-footer">
                        <div className="signin-footer-text">
                            <h5 className="signup-bottom-heading1" style={{ opacity: "0.25" }}>Kod Gelmedi mi ?</h5>
                            <h5 className="signup-bottom-heading2 clickable" style={{ cursor: "pointer" }}>
                                Yeni Kod Gönder
                            </h5>
                        </div>

                        <div className="signup-social-media">
                            <Grid container>
                                {/* <img src={SocialMedia} /> */}
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <ul className="social-media-grid">
                                        <li>
                                            {" "}
                                            <SocialIcon url="https://www.telegram.com/rivanetwork/" style={{ height: "24px", width: "24px", marginLeft: "19px", cursor: "pointer" }} />
                                        </li>
                                        <div className="social-icon-bar"></div>
                                        <li>
                                            <SocialIcon url="https://www.tiktok.com/rivanetwork/" style={{ height: "24px", width: "24px", marginLeft: "19px", cursor: "pointer"  }} />
                                        </li>
                                        <div className="social-icon-bar"></div>
                                        <li>
                                            <SocialIcon url="https://www.instagram.com/rivanetwork/" style={{ height: "24px", width: "24px", marginLeft: "19px", cursor: "pointer"  }} />
                                        </li>
                                        <div className="social-icon-bar"> </div>
                                        <li>
                                            <SocialIcon url="https://discord.gg/FFyx7nVgJj" style={{ height: "24px", width: "24px", marginLeft: "19px", cursor: "pointer"  }} />
                                        </li>
                                        <div className="social-icon-bar"></div>
                                        <li>
                                            <SocialIcon url="https://www.youtube.com/channel/UCFTJ0JmTSqXz_dEoRuolhMg" style={{ height: "24px", width: "24px", marginLeft: "19px", cursor: "pointer"  }} />
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Box>
            </Grid>
            <Grid
                item
                xs={false}
                sm={4}
                md={8}
                sx={{
                    backgroundImage: `url("${Launcher1}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
        </Grid>
    );
};
export default App;
