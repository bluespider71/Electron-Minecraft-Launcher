import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import logo from "/riva.png";
import { useSelector, useDispatch } from "react-redux";
import reducers from "../../redux/slices";

const UnderConstruction = () => {
    /** Definitions and useStates*/
    const dispatch = useDispatch();
    const testData = useSelector((state) => state.test.value);

    /** useEffects */
    useEffect(() => {
        dispatch(reducers.test.getTestData(1));
    }, []);

    return (
        <Box className="under-construction-container">
            <Grid container>
                <Grid item xs={1} md={2} lg={3} xl={4}></Grid>
                <Grid item xs={12} md={8} lg={6} xl={4}>
                    <img src={logo} className="under-construction-logo" alt="logo" />
                </Grid>
                <Grid item xs={1} md={2} lg={3} xl={4}></Grid>
                <Grid item xs={1} md={2} lg={3} xl={4}></Grid>
                <Grid item xs={12} md={8} lg={6} xl={4} className="under-construction-text">
                    {" "}
                    <h2>This page is under construction</h2>
                </Grid>
                <Grid item xs={1} md={2} lg={3} xl={4}></Grid>
            </Grid>
        </Box>
    );
};

export default UnderConstruction;
