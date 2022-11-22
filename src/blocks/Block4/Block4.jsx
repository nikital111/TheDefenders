import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core"; //
import Fon from "../../img/other/Подложка.png";
import Def1 from "../../img/defenders/Персонажи рядок.png";
import Def2 from "../../img/defenders/Персонажи в рядок.png";
import Сlouds from "../../img/back/Тучи.png";
import SharedDivider from "../../components/SharedDivider";
import SharedButton from "../../components/SharedButton";
import { Slide, Bounce } from "react-awesome-reveal";

function Block4({ width }) {
  const useStyles = makeStyles((theme) => ({
    box: {
      position: 'relative',
      backgroundImage: `url(${Сlouds})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '100%',
      paddingTop: width === 'sm' || width === 'xs' ? '70px' : '90px',
      width: '100%',
      height: 'fit-content',
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
      paddingBottom: width === 'md' ? '180px' : width === 'sm' ? '130px' : width === 'xs' ? '75px' : '282px'
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
      width: width === 'sm' || width === 'xs' ? '95%' : '80%',
      height: width === 'md' ? '360px' : width === 'sm' ? '270px' : width === 'xs' ? '196px' : '450px',
      margin: 'auto',
      position: 'relative',
      backgroundImage: `url("${Fon}")`,
      backgroundRepeat: 'no-repeat',
      borderRadius: width === 'xs' ? '30px' : '55px',
      marginBottom: width === 'sm' || width === 'xs' ? '20px' : '60px',
    },
    imgDefenders: {
      width: '100%'
    },
  }));
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Box className={classes.inBox}>
        <Box className={classes.bigBox}>
          <Box
            style={{
              position: 'absolute',
              top: width === 'md' ? '-96px' : width === 'sm' ? '-72px' : width === 'xs' ? '-36px' : '-108px',
              margin: 'auto'
            }}
          >
            <Bounce triggerOnce>
              <Typography
                className={classes.mainText}
                style={{
                  fontSize: width === 'sm' ? '6rem' : width === 'xs' ? '3rem' : "9rem",
                }}
              >
                DISCORD

              </Typography>
            </Bounce>
          </Box>
          <Box
            style={{
              minWidth: width === 'xs' ? '90%' : '200px',
              alignSelf: 'center',
            }}
          >
            <Slide direction="right" triggerOnce>
              <a href="https://discord.gg/thedefenders" target="_blank">
                <SharedButton back="black"
                  style={{
                    marginTop: '0px',
                    marginBottom: width === 'md' ? '70px' : width === 'sm' ? '50px' : width === 'xs' ? '15px' : '100px',
                    padding: width === 'sm' ? '10px' : width === 'xs' ? '7px' : '20px',
                    fontSize: width === 'xs' ? '21px' : '',
                    minWidth: width === 'xs' ? '100%' : '200px'
                  }}
                >Join the party
                </SharedButton>
              </a>
            </Slide>
          </Box>
          <Slide triggerOnce
            style={{
              display: 'flex',
              position: "absolute",
              bottom: "0px",
              maxWidth: width === 'md' ? '684px' : width === 'sm' ? '448px' : width === 'xs' ? '245px' : "90%",
            }}
          >
            <img src={Def1} className={classes.imgDefenders} alt="def" />
          </Slide>
        </Box>
        <Slide triggerOnce>
          <Typography
            className={classes.mainText}
            style={{
              fontSize: width === 'sm' ? '6rem' : width === 'xs' ? '5rem' : "9rem",
              margin: 'auto'
            }}
          >
            JOIN

          </Typography>
        </Slide>
        <Box
          style={{
            minWidth: width === 'xs' ? '90%' : '200px',
            alignSelf: 'center',
          }}
        >
          <Slide direction="right" triggerOnce>
            <a href="https://discord.gg/thedefenders" target="_blank">
              <SharedButton back="black"
                style={{
                  margin: '0px',
                  padding: width === 'sm' ? '10px' : width === 'xs' ? '7px' : '20px',
                  fontSize: width === 'xs' ? '21px' : '',
                  minWidth: width === 'xs' ? '100%' : '200px'
                }}
              >Join the club
              </SharedButton>
            </a>
          </Slide>
        </Box>
        <Box
          style={{
            position: "absolute",
            bottom: "0px",
            overflowY: 'hidden',
            display: 'flex'
          }}
        >
          <Slide direction="up" triggerOnce
            style={{ display: 'flex' }}
          >
            <img src={Def2} style={{
              maxWidth: width === 'md' ? '684px' : width === 'sm' ? '448px' : width === 'xs' ? '245px' : "100%",
            }} alt="def" />
          </Slide>
        </Box>
      </Box>
      {
        width !== 'xs' ?
          <SharedDivider />
          : null
      }
    </Box>
  );
}

export default Block4;
