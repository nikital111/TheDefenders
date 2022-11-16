import React, { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, withWidth } from "@material-ui/core";
import Deploy from "./scripts/deploy";
import Header from "./static/Header";
import Block1 from "./blocks/Block1/Block1";
import Block2 from "./blocks/Block2/Block2";
import Block3 from "./blocks/Block3/Block3";
import Block4 from "./blocks/Block4/Block4";

declare let window: any;

interface AppInt {
  width: string;
}

function App({ width }: AppInt) {
  const [web3, setWeb3] = useState(new Web3(window.ethereum));

  useEffect(() => {
    if (window.ethereum) {
      // ff();
    }
  }, []);

  useEffect(() => {
    console.log(width);
  }, [width]);

  const ff = async () => {
    try {
      if (window.ethereum) {
        // web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWeb3(new Web3(window.ethereum));
        const myWeb3 = new Web3(window.ethereum);
        const [acc] = await myWeb3.eth.getAccounts();
        web3.eth.defaultAccount = acc;
      } else {
        console.log("no");
      }
    } catch {
      console.log("error");
    }
  };

  const formatAddress = (address: string) => {
    let formatAddress = address.split("");
    formatAddress.splice(5, 33, ".", ".", ".");
    let res = formatAddress.join("");
    return res;
  };

  const useStyles = makeStyles((theme) => ({
    app: {},
  }));
  const classes = useStyles();

  return (
    // <div className={classes.app}>
    //   <Button
    //     className={classes.butt}
    //     onClick={() => {
    //       Deploy(web3);
    //     }}
    //   >
    //     DEPLOY
    //   </Button>
    // </div>

    <Box className={classes.app}>
      <Header style={{}} width={width} />

      <Block1 width={width} />

      <Block2 width={width} />

      <Block3 width={width} />

      <Block4 width={width} />

      {width !== "xs" ? (
        <Header style={{ margin: "25px 0px" }} width={width} />
      ) : null}
    </Box>
  );
}

export default withWidth()(App);
