import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core"; //
import BigLogo from "../../img/text/Главный текс по центру.png";
import Сlouds from "../../img/back/Тучи.png";
import DefL from "../../img/defenders/Персы левый ряд.png";
import DefR from "../../img/defenders/персы прявый ряд.png";
import SharedButton from "../../components/SharedButton";
import SharedDivider from "../../components/SharedDivider";
import { Slide } from "react-awesome-reveal";
import Mint from "../../scripts/mint";
import deployUser from "../../scripts/deployUser";

function Block1({ width, web3, contract, handle }) {
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
    imgDefendersLeft: {
      width: '100%'
    },
    imgDefendersRight: {
      width: '100%'
    },
  }));
  const classes = useStyles();

  const mint = async () => {
    await Mint(web3, contract, 1, handle);
    handle("");
  };

  return (
    <Box className={classes.box} id="mint">


      <Box className={classes.inBox}>
        <Slide direction="left" triggerOnce>
          <img
            src={BigLogo}
            style={{
              maxWidth: width === 'md' ? '970px' : width === 'sm' ? '585px' : width === 'xs' ? '342px' : "100%",
            }}
            alt="logo"
          />
        </Slide>
        <Box
          style={{
            minWidth: width === 'xs' ? '90%' : '200px',
            alignSelf: 'center',
          }}
        >
          <Slide direction="right" triggerOnce>
            <a href="https://www.premint.xyz/thedefenders/" target="_blank">
              <SharedButton back={"black"}
                // onClick={mint}
                style={{
                  padding: width === 'sm' ? '10px' : width === 'xs' ? '7px' : '20px',
                  fontSize: width === 'xs' ? '21px' : '',
                  minWidth: width === 'xs' ? '100%' : '200px'
                }}
              >Join the waitlist
              </SharedButton>
            </a>
          </Slide>
        </Box>
        <Slide direction="up" triggerOnce
          style={{
            position: "absolute",
            bottom: "0px",
            left: width === 'xs' ? '10px' : "20px",
            width: "600px",
            maxWidth: width === 'md' ? '416px' : width === 'sm' ? '260px' : width === 'xs' ? '151px' : "44%",
            display: 'flex',

            position: "absolute",
            bottom: "0px",
            right: width === 'xs' ? '10px' : "20px",
            width: "600px",
            maxWidth: width === 'md' ? '416px' : width === 'sm' ? '260px' : width === 'xs' ? '151px' : "44%",
          }}
        >
          <img src={DefL} className={classes.imgDefendersLeft} alt="defenders" />

          {/* <img src={DefR} className={classes.imgDefendersRight} alt="defenders" /> */}
        </Slide>

        <Slide direction="up" triggerOnce
          style={{
            display: 'flex',
            position: "absolute",
            bottom: "0px",
            right: width === 'xs' ? '10px' : "20px",
            width: "600px",
            maxWidth: width === 'md' ? '416px' : width === 'sm' ? '260px' : width === 'xs' ? '151px' : "44%",
          }}
        >
          <img src={DefR} className={classes.imgDefendersRight} alt="defenders" />
        </Slide>
      </Box>
      <SharedDivider />
    </Box>
  );
}

export default Block1;
