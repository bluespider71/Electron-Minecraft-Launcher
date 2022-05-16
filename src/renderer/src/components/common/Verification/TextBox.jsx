import { Input, Grid } from "@material-ui/core";
import React from "react";

const TextBox = () => {
    const boxArray = [];

    const generateTextFields = () => {
        for (let i = 0; i < 6; i++) {
            boxArray.push(
                <Input
                    className="text-box"
                    key={i}
                    type="number"
                    inputProps={{
                        style: { textAlign: "center", },
                        maxlength: "1",
                        "aria-label": "description",
                    }}
                />
            );
        }
    };

    generateTextFields();

    return (
        <div className="text-box-container">
            {boxArray.map((box) => {
                {
                    return box;
                }
            })}
        </div>
    );
};

export default TextBox;
