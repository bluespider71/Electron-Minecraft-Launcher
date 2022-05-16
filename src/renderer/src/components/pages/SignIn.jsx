import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Input from "@mui/material/Input";
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
// import logo2 from "/RIVA_NETWORK.png";
import logo2 from "/logo.svg";

import { withStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/definitions";
import { SocialIcon } from "react-social-icons";
import { useDispatch } from "react-redux";
import reducers from "../../redux/slices";
import SıngInLogo from "/SignInLogo.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SocialMedia from "/Group 260.png";
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

const WhiteBorderTextField = styled(Input)`
    & label.Mui{
        color: #fff !important;
    }
    & label.Mui-focused {
        color: white ;
    }

    & .MuiOutlinedInput-root {
        background-color: rgba(255, 255, 255, 0.029999999329447746);
        &.Mui-focused fieldset {
            color: white;
            border-color: white;
        }
    }
`;

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
        <div className="clickable">
            <div className="bg"></div>
            <div className="animation-bar">
                <div className="animation-logo-image">
                    <img src={logo2} />
                </div>
            </div>
            <Grid container className="main-grid" sx={{ height: "100vh", width: "120vw !important", minWidth: "1650px !important", position: "fixed" }}>
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
                            <h2 className="login-heading">Giriş yap</h2>
                            <WhiteBorderTextField inputProps={{style:{marginLeft: "10px"}}}className="signin-input" margin="normal" required fullWidth id="userName" placeholder="Kullanıcı Adı" name="userName" autoComplete="userName" autoFocus />
                            <WhiteBorderTextField inputProps={{style:{marginLeft: "10px"}}}className="signin-input" margin="normal" required fullWidth name="password" placeholder="Şifre" type="password" id="password" autoComplete="current-password" />
                            <Grid container sx={{ marginTop: "25px", width: "350px", marginLeft: "15px" }}>
                                <Grid item sx={6} md={6} lg={6}>
                                    {" "}
                                    <div style={{ display: "flex", alignItems: "center", cursor: "pointer", marginTop: "-8px", marginLeft: "-30px" }} onClick={() => handleChange(!checked)} className="clickable">
                                        <CustomColorCheckbox checked={checked} icon={<RadioButtonUncheckedIcon style={{ height: "15px", width: "15px" }} />} checkedIcon={<RadioButtonCheckedIcon style={{ height: "15px", width: "15px" }} />} label="Beni Hatırla" />
                                        <div className="login-bottom1">Beni hatırla</div>
                                    </div>
                                </Grid>
                                <Grid item sx={6} md={6} lg={6}>
                                    {/* <Link href="#" variant="body2" className="login-bottom1" sx={{  marginLeft: "15px !important" }}>
                                        
                                    </Link> */}
                                    <div className="login-bottom1" style={{marginLeft: '15px', marginTop: '-5px'}}>Şifremi Unuttum</div>
                                </Grid>
                            </Grid>

                            <div
                                className="signin-button"
                                onClick={() => {
                                    dispatch(reducers.isSignIn.setIsSignIn(true));
                                    dispatch(reducers.animationRoute.setAnimationRoute(routes.LoadingScreen));
                                    navigate(routes.Animation);
                                }}
                            >
                                <ArrowForwardIosIcon sx={{ color: "rgba(#000,0.2) !important",
                                 border: "5px solid white", opacity: "0.20000000298023224",
                                  marginLeft: '-2%', padding: "15px", borderRadius: "50px", height: "80px", width: "80px" }} />
                            </div>

                            <Grid container sx={{ marginTop: "30px", marginBottom: "30px" }}></Grid>
                        </Box>
                        <div className="signin-footer">
                            <div className="signin-footer-text">
                                <h6 className="sign-footer-bottom" style={{ marginBottom: '-10px'}}>Bir hesabın yok mu? Dert etme!</h6>
                                <h6 onClick={() => navigate(routes.CreateNewAccount)} className="clickable signin-footer-bottom-right"  
                                style={{
                                 }}>
                                    Yeni hesap oluştur
                                </h6>
                            </div>

                            <div className="signin-social-media">
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
                                                <SocialIcon url="https://www.tiktok.com/rivanetwork/" style={{ height: "24px", width: "24px", marginLeft: "19px", cursor: "pointer" }} />
                                            </li>
                                            <div className="social-icon-bar"></div>
                                            <li>
                                                <SocialIcon url="https://www.instagram.com/rivanetwork/" style={{ height: "24px", width: "24px", marginLeft: "19px", cursor: "pointer" }} />
                                            </li>
                                            <div className="social-icon-bar"> </div>
                                            <li>
                                                <SocialIcon url="https://discord.gg/FFyx7nVgJj" style={{ height: "24px", width: "24px", marginLeft: "19px", cursor: "pointer" }} />
                                            </li>
                                            <div className="social-icon-bar"></div>
                                            <li>
                                                <SocialIcon url="https://www.youtube.com/channel/UCFTJ0JmTSqXz_dEoRuolhMg" style={{ height: "24px", width: "24px", marginLeft: "19px", cursor: "pointer" }} />
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
        </div>
    );
};
export default App;
