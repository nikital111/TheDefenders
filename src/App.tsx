import React, { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Deploy from "./scripts/deploy";
import Header from "./static/Header";
import Block1 from "./blocks/Block1/Block1";
import Block2 from "./blocks/Block2/Block2";
import Block3 from "./blocks/Block3/Block3";

declare let window: any;
function App() {
  const [web3, setWeb3] = useState(new Web3(window.ethereum));

  useEffect(() => {
    if (window.ethereum) {
      // ff();
    }
  }, []);

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
    app: {
      position: "absolute",
      top: "0px",
      bottom: "0px",
      right: "0px",
      left: "0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    butt: {
      backgroundColor: "rgb(72, 157, 254)",
      width: "200px",
      height: "50px",
      borderRadius: "20px",
      color: "#fff",
      marginTop: "25px",
      fontWeight: "bold",
      fontSize: "15px",
      "&.MuiButton-root:hover": {
        backgroundColor: "rgb(72, 157, 254)",
        boxShadow: "none",
      },
    },
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

    <>
      <Header />

      <Block1 />

      <Block2 />

      <Block3 />
    </>
  );
}

export default App;
