const NFTArtifacts = require("../artifacts/contracts/I_AM_UKRAINIAN.sol/I_AM_UKRAINIAN.json");

export default async function Mint(
  web3: any,
  contractAddress: string,
  quantity: number,
  callback?: any
) {
  const [acc] = await web3.eth.getAccounts();

  const MyContract = new web3.eth.Contract(NFTArtifacts.abi, contractAddress);

  // const myValue = web3.utils.toWei("0.1");

  const myValue = await MyContract.methods.price().call({ from: acc });

  MyContract.methods
    .safeMint(acc, quantity)
    .send({ from: acc, value: myValue })
    .on("transactionHash", function (hash: string) {
      console.log(hash, " hash");
    })
    .on("receipt", function (receipt: any) {
      callback();
      console.log(receipt, " receipt");
    })
    // .on('confirmation', function(confirmationNumber, receipt){
    //     console.log(receipt,' receipt ',confirmationNumber, ' confirmationNumber')
    // })
    .on("error", console.error); // If a out of gas error, the second parameter is the receipt.
}
