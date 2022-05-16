import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import logo from "/riva.png";
import { IconButton, Typography, Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MinimizeIcon from "@mui/icons-material/Minimize";

const CloseAlert = (props) => {
    return (
        <div className="clickable">
            {console.log(props)}
            <Dialog
                open={props.open}
                style={{
                    position: "fixed",
                    zIndex: "10000",
                }}
                PaperProps={{
                    style: {
                        background: "#10171f",
                        textDecoration: "none !important",
                        color: "#fff",
                        justifyContent: "center",
                        textAlign: "center",
                    },
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Uyarı!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ color: "#fff" }}>
                        Çıkış yapmak istediğinden emin misin?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Grid container>
                        <Grid item xs={6} md={6} lg={6} xl={6}>
                            {" "}
                            <Button onClick={() => window.close()} style={{ backgroundColor: "#1d232a", color: "#fff", width: "80%", height: "40px", marginBottom: "10px" }}>
                                Evet
                            </Button>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6} xl={6}>
                            {" "}
                            <Button autoFocus onClick={() => props.setOpen(false)} style={{ backgroundColor: "#1d232a", color: "#fff", width: "80%", height: "40px", marginBottom: "10px" }}>
                                Hayır
                            </Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </div>
    );
};
const AppBar = () => {
    const [open, setOpen] = React.useState(false);

    const minimize = () => {
        console.log("minimize");
    };
    return (
        <div>
            <div id="nav" className="dragable">
                <div id="togglers">
                    <div onClick={() => minimize()}>
                        <MinimizeIcon className="minimize-icon" />
                    </div>
                    <div id="close" className="clickable" onClick={() => setOpen(true)}>
                        <span>
                            <CloseIcon className="close-icon" />
                        </span>
                    </div>
                    <CloseAlert open={open} setOpen={setOpen} />
                </div>
            </div>
        </div>
    );
};

export default AppBar;
