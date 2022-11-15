import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, Typography } from "@material-ui/core"; //
import BigLogo from "../../img/text/Главный текс по центру.png";
import DefL from "../../img/defenders/Персы левый ряд.png";
import DefR from "../../img/defenders/персы прявый ряд.png";
import "./Block1.css";
import SharedButton from "../../components/SharedButton";
import SharedDivider from "../../components/SharedDivider";
// import Discord from "../img/ico/иконка дискорд2.png";

function Block1() {
  const useStyles = makeStyles((theme) => ({
    cont: {
      display: "flex",
      justifyContent: "space-between",
    },
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "60px",
      width: "100%",
    },
    imgDefendersLeft: {
      position: "absolute",
      bottom: "0px",
      left: "20px",
      width: "600px",
      maxWidth: "44%",
    },
    imgDefendersRight: {
      position: "absolute",
      bottom: "0px",
      right: "20px",
      width: "600px",
      maxWidth: "44%",
    },
  }));
  const classes = useStyles();

  return (
    <Box className="box1">
      <img
        src={BigLogo}
        style={{
          maxWidth: "100%",
        }}
        alt="logo"
      />

      <SharedButton back={"black"}>MINT</SharedButton>

      <img src={DefL} className={classes.imgDefendersLeft} alt="defenders" />
      <img src={DefR} className={classes.imgDefendersRight} alt="defenders" />
      <SharedDivider />
    </Box>
  );
}

export default Block1;
