import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core"; //

// import Discord from "../img/ico/иконка дискорд2.png";

function SharedButton({ back, children, style }) {
    const useStyles = makeStyles((theme) => ({
        butt: {
            width: "200px",
            padding: "20px",
            textTransform: "uppercase",
            fontWeight: "900",
            fontSize: "24px",
            color: "white",
            backgroundColor: back,
            borderRadius: "15px",
            marginTop: "15px",
            "&.MuiButton-root:hover": {
                backgroundColor: back,
                boxShadow: "none",
            },
        },
    }));
    const classes = useStyles();

    return <Button className={classes.butt} style={style}>{children}</Button>;
}

export default SharedButton;
