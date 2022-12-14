import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core"; //
import Def from "../../img/defenders/Перс 1.png";
import Сlouds from "../../img/back/Тучи.png";
import SharedButton from "../../components/SharedButton";
import SharedDivider from "../../components/SharedDivider";
import { Slide, Fade } from 'react-awesome-reveal';

function Block2({ width }) {
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
      marginTop: width === 'sm' ? '20px' : width === 'xs' ? '20px' : '60px',
      width: '100%',
      height: width === 'sm' ? '500px' : width === 'xs' ? '570px' : '760px',
      overflow: 'hidden',
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
    imgDefenders: {
      width: '100%'
    },
    bigBox: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
      marginBottom: width === 'sm' || width === 'xs' ? '0px' : "60px",
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
      fontSize: width === 'sm' ? '35px' : width === 'xs' ? '30px' : "45px",
      color: "white",
    },
    subText: {
      fontWeight: "900",
      fontSize: width === 'sm' ? '10px' : width === 'xs' ? '10px' : "15px",
      color: "white",
    },
    aboutBox: {
      alignSelf: width === 'xs' ? 'center' : "flex-end",
      width: width === 'sm' ? '50%' : width === 'xs' ? '90%' : "40%",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      margin: width === 'md' ? '0 15px 0 0' : width === 'sm' ? '0' : '0'
    },
    aboutText: {
      fontSize: width === 'sm' ? '14px' : width === 'xs' ? '13px' : "17px",
      marginBottom: '3px',
      textTransform: "uppercase",
      fontWeight: "900",
      color: "white",
    }
  }));
  const classes = useStyles();

  return (
    <Box id="about" className={classes.box}>
      <Box className={classes.inBox}>

        <Box className={classes.bigBox}>
          <Slide direction="down" triggerOnce>
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
          </Slide>
        </Box>

        <Slide triggerOnce>
          <Typography

            className={classes.mainText}
            style={{
              fontSize: width === 'sm' || width === 'xs' ? '5rem' : "7rem",
            }}
          >
            ABOUT
          </Typography>
        </Slide>

        <Box className={classes.aboutBox}>
          <Fade direction="up" triggerOnce>
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
                marginBottom: width === 'sm' || width === 'xs' ? '0px' : '40px'
              }}
            >
              it's a battle royale with revolutionary new technologies.
            </Typography>
          </Fade>
          <Box
            style={{
              alignSelf: 'center',
              minWidth: width === 'xs' ? '100%' : '200px'
            }}
          >
            <Slide direction="right" triggerOnce>
              <a href="https://www.premint.xyz/thedefenders/" target="_blank">
                <SharedButton back={"#00588B"} style={{
                  padding: width === 'sm' ? '10px' : width === 'xs' ? '7px' : '20px',
                  fontSize: width === 'xs' ? '21px' : '',
                  minWidth: width === 'xs' ? '100%' : '200px'
                }}>Join the waitlist</SharedButton>
              </a>
            </Slide>
          </Box>
        </Box>


        <Slide direction="up" triggerOnce
          style={{
            display: 'flex',
            position: "absolute",
            bottom: "0px",
            left: width === 'md' ? '3%' : width === 'sm' ? '0%' : width === 'xs' ? 'none' : "20%",
            width: "560px",
            maxWidth: width === 'md' ? '560px' : width === 'sm' ? '320px' : width === 'xs' ? '40%' : "44%",
          }}
        >
          <img src={Def} className={classes.imgDefenders} alt="defenders" />
        </Slide>
      </Box>
      <SharedDivider />
    </Box>
  );
}

export default Block2;
