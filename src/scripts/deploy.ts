const I_AM_UKRAINIAN = require("../artifacts/contracts/I_AM_UKRAINIAN.sol/I_AM_UKRAINIAN.json");
export default async function deployNToken(web3: any) {
  const [acc] = await web3.eth.getAccounts();
  const MyContract = new web3.eth.Contract(I_AM_UKRAINIAN.abi);

  MyContract.deploy({
    data: I_AM_UKRAINIAN.bytecode,
  })
    .send({
      from: acc,
    })
    .then(function (newContractInstance: any) {
      console.log(newContractInstance.options.address); // instance with the new contract address
    });
}
