import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/definitions";
import logo from "/RIVA_NETWORK2.svg";

const Animation = () => {
    const navigate = useNavigate();
    const route = useSelector((state) => state.animationRoute.value);

    useEffect(() => {
        setTimeout(() => {
            navigate(route);
        }, 1750);
    }, []);

    return (
        <div>
            <div className="animation-container">
                <div className="riva-logo-container">
                    <div className="riva-logo-image">
                        <img src={logo} />
                    </div>
                </div>
                <div className="riva-logo-shadow"></div>
            </div>
        </div>
    );
};

export default Animation;
