import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dived from "../img/back/Разделитель блоков.png";

function SharedDivider({ back, children }) {
  const useStyles = makeStyles((theme) => ({
    imgDived: {
      position: "absolute",
      bottom: "-31px",
      left: "0px",
      right: "0px",
      width: "100%",
      height: "50px",
    },
  }));
  const classes = useStyles();

  return <img src={Dived} className={classes.imgDived} alt="div" />;
}

export default SharedDivider;
