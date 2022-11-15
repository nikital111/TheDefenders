import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, Typography } from "@material-ui/core"; //
import Def from "../../img/defenders/Перс 1.png";
import "./Block2.css";
import SharedButton from "../../components/SharedButton";
import SharedDivider from "../../components/SharedDivider";
// import Discord from "../img/ico/иконка дискорд2.png";

function Block2() {
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
    imgDefenders: {
      position: "absolute",
      bottom: "0px",
      left: "20%",
      width: "560px",
      maxWidth: "44%",
    },
    bigBox: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
      marginBottom: "60px",
    },
    miniBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
    },
    mainText: {
      textTransform: "uppercase",
      fontWeight: "900",
      fontSize: "45px",
      color: "white",
    },
    subText: {
      fontWeight: "900",
      fontSize: "15px",
      color: "white",
    },
    aboutBox: {
      alignSelf: "flex-end",
      width: "40%",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    aboutText: {
      fontSize: "17px",
      marginBottom: '3px',
      textTransform: "uppercase",
      fontWeight: "900",
      color: "white",
    }
  }));
  const classes = useStyles();

  return (
    <Box className="box2">
      <Box className={classes.bigBox}>
        <Box className={classes.miniBox}>
          <Typography className={classes.mainText}>10.000</Typography>
          <Typography className={classes.subText}>DEFENDERS</Typography>
        </Box>
        <Box className={classes.miniBox}>
          <Typography className={classes.mainText}>145</Typography>
          <Typography className={classes.subText}>Traits</Typography>
        </Box>
        <Box className={classes.miniBox}>
          <Typography className={classes.mainText}>TBA</Typography>
          <Typography className={classes.subText}>Mint date</Typography>
        </Box>
      </Box>

      <Typography
        className={classes.mainText}
        style={{
          fontSize: "7rem",
        }}
      >
        ABOUT
      </Typography>

      <Box className={classes.aboutBox}>
        <Typography
          className={classes.aboutText}>
          10.000 nft colection the defenders living on ethereum blockchain.
        </Typography>

        <Typography
          className={classes.aboutText}>
          your future energy in the gamefi ecosystem.
        </Typography>

        <Typography
          className={classes.aboutText}>
          we will be introducing world's defenders super game.
        </Typography>

        <Typography
          className={classes.aboutText}
          style={{
            marginBottom: '40px'
          }}
        >
          it a battle royale with revolutionary new technologies.
        </Typography>
        <SharedButton back={"black"} style={{
          alignSelf: 'center'
        }}>MINT</SharedButton>
      </Box>

      <img src={Def} className={classes.imgDefenders} alt="defenders" />
      <SharedDivider />
    </Box>
  );
}

export default Block2;
