const Artifacts = require("../artifacts/contracts/I_AM_UKRAINIAN.sol/I_AM_UKRAINIAN.json");
export default async function deployUser(web3: any) {
  const [acc] = await web3.eth.getAccounts();
  const MyContract = new web3.eth.Contract(Artifacts.abi);

  MyContract.deploy({
    data: Artifacts.bytecode,
  })
    .send({
      from: acc,
    })
    .then(function (newContractInstance: any) {
      console.log(newContractInstance.options.address); // instance with the new contract address
    });
}
