import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core"; //
import Fly from "../../img/other/Пиксельный самолет .png";
import Art1 from "../../img/other/1 фаза арт.png";
import Text1 from "../../img/text/artText1.png";
import Art2 from "../../img/other/2 фаза арт.png";
import Text2 from "../../img/text/artText2.png";
import Art3 from "../../img/other/3 фаза арт.png";
import Text3 from "../../img/text/artText3.png";
import Fon from "../../img/back/Подложка под текст 1 фазы.png";
import Сlouds from "../../img/back/Тучи.png";
import SharedDivider from "../../components/SharedDivider";
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';

function Block3({ width }) {
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
      marginTop: width === 'sm' || width === 'xs' ? '20px' : '60px',
      width: '100%',
      height: 'fit-content',
      overflow: 'hidden'
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
    imgFly: {
      position: "absolute",
      bottom: "0px",
      left: "22%",
      width: "360px",
      maxWidth: "20%",
    },
    bigBox: {
      display: "flex",
      flexDirection: 'column',
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      marginBottom: "60px",
    },
    miniBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: width === 'sm' || width === 'xs' ? '95%' : '100%',
      color: "white",
      margin: width === 'sm' || width === 'xs' ? '10px auto' : '10px 0px'
    },
    art: {
      width: '20%',
      margin: width === 'sm' || width === 'xs' ? '0px 10px 0px 0px' : '0px 30px 0px 40px',
    },
    backBox: {
      backgroundImage: `url("${Fon}")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '20px',
      width: '80%'
    },
    imgText: {
      width: '80%'
    },
    mainText: {
      textTransform: "uppercase",
      fontWeight: "900",
      fontSize: "45px",
      color: "white",
    },
  }));
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Box className={classes.inBox}>
        <Bounce top>
          <Typography
            id="roadmap"
            className={classes.mainText}
            style={{
              fontSize: width === 'sm' ? '5rem' : width === 'xs' ? '3rem' : "7rem",
              position: 'relative',
              marginBottom: width === 'sm' || width === 'xs' ? '20px' : '60px',
            }}
          >
            ROADMAP
            <img src={Fly} className={classes.imgFly} alt="fly" />
          </Typography>
        </Bounce>
        <Box className={classes.bigBox}>
          <Slide left>
            <Box className={classes.miniBox}
              style={{
                width: width === 'sm' || width === 'xs' ? '95%' : '80%'
              }}
            >
              <img src={Art1} className={classes.art} alt="art" />
              <Box className={classes.backBox}>
                <img src={Text1} className={classes.imgText} alt="text" />
              </Box>
            </Box>
          </Slide>


          <Slide right>
            <Box className={classes.miniBox}>

              <Box className={classes.backBox}
                style={{
                  width: '70%',
                  marginLeft: width === 'sm' || width === 'xs' ? '0px' : '20px'
                }}
              >
                <img src={Text2} className={classes.imgText} alt="text" />
              </Box>
              <img src={Art2} className={classes.art} alt="art"
                style={{
                  width: '30%',
                  margin: width === 'sm' || width === 'xs' ? '0px 00px 0px 10px' : '0px 40px 0px 30px'
                }}
              />
            </Box>
          </Slide>


          <Slide left>
            <Box className={classes.miniBox}
              style={{
                width: width === 'sm' || width === 'xs' ? '95%' : width === 'md' ? "70%" : '100%'
              }}
            >
              <img src={Art3} className={classes.art} alt="art"
                style={{
                  width: '35%',
                  margin: '0px'
                }}
              />
              <Box className={classes.backBox}
                style={{
                  width: '65%'
                }}
              >
                <img src={Text3} className={classes.imgText} alt="text" style={{ width: '50%' }} />
              </Box>
            </Box>
          </Slide>
        </Box>

      </Box>
      <SharedDivider />
    </Box>
  );
}

export default Block3;
