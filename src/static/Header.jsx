import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography, SwipeableDrawer, Button, IconButton } from "@material-ui/core"; //
import Twit from "../img/ico/Иконка твиттер2.png";
import Discord from "../img/ico/иконка дискорд2.png";
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ style, width }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => {
    setIsOpen(open);
  }

  const StyledSwipeableDrawer = withStyles({
    paper: {
      backgroundColor: "#3DA2FF",
      color: 'white!important',
      width: "250px",
      borderLeft: '3px solid black',
      "&.MuiListItem-root": {
        color: "white"
      }
    }
  })(SwipeableDrawer);

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
    <>
      <StyledSwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <Box
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
          style={{
            paddingTop: '20px'
          }}
        >
          <a href="#about">
            <Typography
              className={classes.text1}
              style={{
                width: 'fit-content',
                margin: 'auto',
              }}
            >
              ABOUT
            </Typography>
          </a>

          <a href="#roadmap">
            <Typography
              className={classes.text1}
              style={{
                width: 'fit-content',
                margin: 'auto',
              }}
            >
              ROADMAP
            </Typography>
          </a>

          <Box
            style={{
              marginTop: "5px",
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <a href="https://discord.gg/thedefenders" target="_blank"><img src={Discord} alt="discord" /></a>
            <a href="https://twitter.com/TheDefendersNFT" target="_blank"><img src={Twit} alt="twitter" /></a>
          </Box>
        </Box>
      </StyledSwipeableDrawer>

      {
        width === 'xs' ?
          <Button
            onClick={() => toggleDrawer(true)}
            style={{
              position: 'absolute',
              right: '0px',
              top: '0px'
            }}
          >
            <IconButton>
              <MenuIcon style={{ color: 'white' }} />
            </IconButton>
          </Button>
          :
          <Container className={classes.cont} style={style}>
            <Box className={classes.box}>
              <Typography className={classes.text1}>The defenders</Typography>
            </Box>

            <Box className={classes.box}>
              <a href="#about">
                <Typography
                  className={classes.text1}
                  style={{
                    marginRight: "20px",
                  }}
                >
                  ABOUT
                </Typography>
              </a>
              <a href="#roadmap"><Typography className={classes.text1}>ROADMAP</Typography></a>
            </Box>

            <Box
              style={{
                marginTop: "5px",
              }}
            >
              <a href="https://discord.gg/thedefenders" target="_blank"><img src={Discord} alt="discord" /></a>
              <a href="https://twitter.com/TheDefendersNFT" target="_blank"><img src={Twit} alt="twitter" /></a>
            </Box>
          </Container>
      }
    </>
  );
}

export default Header;
