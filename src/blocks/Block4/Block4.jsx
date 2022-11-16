import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, Typography } from "@material-ui/core"; //
import Fon from "../../img/other/Подложка.png";
import Def1 from "../../img/defenders/Персонажи рядок.png";
import Def2 from "../../img/defenders/Персонажи в рядок.png";
import Сlouds from "../../img/back/Тучи.png";
import "./Block4.css";
import SharedDivider from "../../components/SharedDivider";
import SharedButton from "../../components/SharedButton";
// import Discord from "../img/ico/иконка дискорд2.png";

function Block4({ width }) {
  const useStyles = makeStyles((theme) => ({
    box: {
      position: 'relative',
      backgroundImage: `url(${Сlouds})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '100%',
      marginTop: width === 'sm' ? '70px' : '90px',
      width: '100%',
      height: 'fit-content',
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
      paddingBottom: width === 'md' ? '180px' : width === 'sm' ? '130px' : '282px'
    },
    mainText: {
      textTransform: "uppercase",
      fontWeight: "900",
      fontSize: "45px",
      color: "white",
    },
    bigBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: width === 'sm' ? '95%' : '80%',
      height: width === 'md' ? '360px' : width === 'sm' ? '270px' : '450px',
      margin: 'auto',
      position: 'relative',
      backgroundImage: `url("${Fon}")`,
      backgroundRepeat: 'no-repeat',
      borderRadius: '55px',
      marginBottom: width === 'sm' ? '20px' : '60px'
    },
    imgDefenders: {
      position: "absolute",
      bottom: "0px",
      maxWidth: width === 'md' ? '684px' : width === 'sm' ? '448px' : "90%",
    },
  }));
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Box className={classes.inBox}>
        <Box className={classes.bigBox}>
          <Typography
            className={classes.mainText}
            style={{
              fontSize: width === 'md' ? '8rem' : width === 'sm' ? '6rem' : "9rem",
              position: 'absolute',
              top: width === 'md' ? '-96px' : width === 'sm' ? '-72px' : '-108px',
              margin: 'auto'
            }}
          >
            DISCORD

          </Typography>
          <SharedButton back="black"
            style={{
              marginTop: '0px',
              marginBottom: width === 'md' ? '70px' : width === 'sm' ? '50px' : '100px'
            }}
          >Join the party</SharedButton>
          <img src={Def1} className={classes.imgDefenders} alt="def" />
        </Box>

        <Typography
          className={classes.mainText}
          style={{
            fontSize: width === 'sm' ? '6rem' : "9rem",
            margin: 'auto'
          }}
        >
          JOIN

        </Typography>

        <SharedButton back="black"
          style={{
            margin: '0px'
          }}
        >Join the club</SharedButton>

        <img src={Def2} className={classes.imgDefenders} alt="def" />
      </Box>
      <SharedDivider />
    </Box>
  );
}

export default Block4;
