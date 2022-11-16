import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, Typography } from "@material-ui/core"; //
import BigLogo from "../../img/text/Главный текс по центру.png";
import Сlouds from "../../img/back/Тучи.png";
import DefL from "../../img/defenders/Персы левый ряд.png";
import DefR from "../../img/defenders/персы прявый ряд.png";
import "./Block1.css";
import SharedButton from "../../components/SharedButton";
import SharedDivider from "../../components/SharedDivider";
// import Discord from "../img/ico/иконка дискорд2.png";

function Block1({ width }) {
  const useStyles = makeStyles((theme) => ({
    cont: {
      display: "flex",
      justifyContent: "space-between",
    },
    box: {
      position: 'relative',
      backgroundImage: `url(${Сlouds})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '100%',
      marginTop: width === 'xs' ? '40px' : '60px',
      width: '100%',
      height: width === 'md' ? '515px' : width === 'sm' ? '360px' : width === 'xs' ? '226px' : '660px',
    },
    inBox: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      maxWidth: '1300px',
      height: '100%',
      margin: '0px auto',
    },
    imgDefendersLeft: {
      position: "absolute",
      bottom: "0px",
      left: width === 'xs' ? '10px' : "20px",
      width: "600px",
      maxWidth: width === 'md' ? '416px' : width === 'sm' ? '260px' : width === 'xs' ? '151px' : "44%",
    },
    imgDefendersRight: {
      position: "absolute",
      bottom: "0px",
      right: width === 'xs' ? '10px' : "20px",
      width: "600px",
      maxWidth: width === 'md' ? '416px' : width === 'sm' ? '260px' : width === 'xs' ? '151px' : "44%",
    },
  }));
  const classes = useStyles();

  return (
    <Box className={classes.box}>


      <Box className={classes.inBox}>
        <img
          src={BigLogo}
          style={{
            maxWidth: width === 'md' ? '970px' : width === 'sm' ? '585px' : width === 'xs' ? '342px' : "100%",
          }}
          alt="logo"
        />

        <SharedButton back={"black"}
          style={{
            padding: width === 'sm' ? '10px' : width === 'xs' ? '7px' : '20px',
            fontSize: width === 'xs' ? '21px' : '',
            minWidth: width === 'xs' ? '90%' : '200px'
          }}
        >MINT</SharedButton>

        <img src={DefL} className={classes.imgDefendersLeft} alt="defenders" />
        <img src={DefR} className={classes.imgDefendersRight} alt="defenders" />
      </Box>
      <SharedDivider />
    </Box>
  );
}

export default Block1;
