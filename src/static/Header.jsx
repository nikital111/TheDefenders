import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core"; //
import Twit from "../img/ico/Иконка твиттер2.png";
import Discord from "../img/ico/иконка дискорд2.png";

function Header({ style }) {
  const useStyles = makeStyles((theme) => ({
    cont: {
      display: "flex",
      justifyContent: "space-between",
      maxWidth: '100%'
    },
    text1: {
      textTransform: "uppercase",
      fontWeight: "900",
      fontSize: "21px",
    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }));
  const classes = useStyles();

  return (
    <Container className={classes.cont} style={style}>
      <Box className={classes.box}>
        <Typography className={classes.text1}>The defenders</Typography>
      </Box>

      <Box className={classes.box}>
        <Typography
          className={classes.text1}
          style={{
            marginRight: "20px",
          }}
        >
          ABOUT
        </Typography>
        <Typography className={classes.text1}>ROADMAP</Typography>
      </Box>

      <Box
        style={{
          marginTop: "5px",
        }}
      >
        <img src={Discord} alt="discord" />
        <img src={Twit} alt="twitter" />
      </Box>
    </Container>
  );
}

export default Header;
