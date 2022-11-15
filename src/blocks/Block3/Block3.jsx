import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, Typography } from "@material-ui/core"; //
import Fly from "../../img/other/Пиксельный самолет .png";
import Art1 from "../../img/other/1 фаза арт.png";
import Text1 from "../../img/text/artText1.png";
import Art2 from "../../img/other/2 фаза арт.png";
import Text2 from "../../img/text/artText2.png";
import Art3 from "../../img/other/3 фаза арт.png";
import Text3 from "../../img/text/artText3.png";
import Fon from "../../img/back/Подложка под текст 1 фазы.png";
import "./Block3.css";
import SharedDivider from "../../components/SharedDivider";
// import Discord from "../img/ico/иконка дискорд2.png";

function Block3() {
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
      width: '100%',
      color: "white",
      margin: '10px 0px'
    },
    art: {
      width: '20%',
      margin: '0px 30px 0px 40px',
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
    <Box className="box3">

      <Typography
        className={classes.mainText}
        style={{
          fontSize: "7rem",
          position: 'relative',
          marginBottom: '60px'
        }}
      >
        ROADMAP
        <img src={Fly} className={classes.imgFly} alt="fly" />
      </Typography>

      <Box className={classes.bigBox}>

        <Box className={classes.miniBox}
          style={{
            width: '80%'
          }}
        >
          <img src={Art1} className={classes.art} alt="art" />
          <Box className={classes.backBox}>
            <img src={Text1} className={classes.imgText} alt="text" />
          </Box>
        </Box>




        <Box className={classes.miniBox}
          style={{

          }}
        >

          <Box className={classes.backBox}
            style={{
              width: '70%',
              marginLeft: '20px'
            }}
          >
            <img src={Text2} className={classes.imgText} alt="text" />
          </Box>
          <img src={Art2} className={classes.art} alt="art"
            style={{
              width: '30%',
              margin: '0px 40px 0px 30px'
            }}
          />
        </Box>




        <Box className={classes.miniBox}
          style={{
            width: '70%'
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

      </Box>


      <SharedDivider />
    </Box>
  );
}

export default Block3;
