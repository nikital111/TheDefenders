/* eslint-disable jest/valid-expect */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { I_AM_UKRAINIAN } from "../typechain-types";
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT", function () {
  async function deployNFTFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const NFTFactory = await ethers.getContractFactory("I_AM_UKRAINIAN");
    const nft: I_AM_UKRAINIAN = await NFTFactory.deploy();

    await nft.deployed();

    const price = await nft.price();

    return { nft, owner, price, otherAccount };
  }

  async function deployNFTFixturePREMINT() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const NFTFactory = await ethers.getContractFactory("I_AM_UKRAINIAN");
    const nft: I_AM_UKRAINIAN = await NFTFactory.deploy();

    await nft.deployed();

    await nft.changeStatus(1);

    const price = await nft.price();

    return { nft, owner, price, otherAccount };
  }

  async function deployNFTFixtureMINT() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const NFTFactory = await ethers.getContractFactory("I_AM_UKRAINIAN");
    const nft: I_AM_UKRAINIAN = await NFTFactory.deploy();

    await nft.deployed();

    await nft.changeStatus(2);

    const price = await nft.price();

    return { nft, owner, price, otherAccount };
  }

  async function deployNFTFixtureMINTED() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    const count = 10;

    const NFTFactory = await ethers.getContractFactory("I_AM_UKRAINIAN");
    const nft: I_AM_UKRAINIAN = await NFTFactory.deploy();

    await nft.deployed();

    await nft.changeStatus(2);

    const price = await nft.price();

    await nft.safeMint(owner.address, count, {
      value: price.mul(count),
    });

    return { nft, owner, price, otherAccount, count };
  }

  it("should be deployed", async function () {
    const { nft, owner } = await loadFixture(deployNFTFixture);

    const supply = await nft.totalSupply();
    const contractURI = await nft.contractURI();
    const ownerOfContract = await nft.owner();
    const status = await nft.status();

    expect(nft.address).to.be.properAddress;
    expect(supply).to.eq(0);
    expect(contractURI).to.eq(
      "ipfs://QmeRMfUzVGjjsPTpBYRdnZfjSQ6u3N6vdDi2LSpVdELJsA"
    );
    expect(ownerOfContract).to.eq(owner.address);
    expect(status).to.eq(0);
    console.log("address is valid");
  });

  it("change status", async function () {
    const { nft, owner, price, otherAccount } = await loadFixture(
      deployNFTFixture
    );

    await nft.changeStatus(1);

    const status1 = await nft.status();

    await nft.changeStatus(2);

    const status2 = await nft.status();

    await nft.changeStatus(0);

    const status0 = await nft.status();

    expect(status1).to.eq(1);
    expect(status2).to.eq(2);
    expect(status0).to.eq(0);

    //reverts

    await expect(nft.connect(otherAccount).changeStatus(2)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
  });

  it("change price", async function () {
    const { nft, owner, price, otherAccount } = await loadFixture(
      deployNFTFixture
    );

    await nft.changePrice(ethers.utils.parseEther("0.42"));

    const price2 = await nft.price();

    expect(price2).to.eq(ethers.utils.parseEther("0.42"));

    //reverts

    await expect(
      nft.connect(otherAccount).changePrice(ethers.utils.parseEther("3.12"))
    ).to.be.revertedWith("Ownable: caller is not the owner");

    await expect(nft.changePrice(0)).to.be.revertedWith("Incorrect price");
  });

  it("whitelist", async function () {
    const { nft, owner, price, otherAccount } = await loadFixture(
      deployNFTFixturePREMINT
    );

    const preWhitelistOwner = await nft.isWhitelisted(owner.address);
    const preWhitelistOther = await nft.isWhitelisted(owner.address);

    await nft.addToWhitelist([owner.address, otherAccount.address]);

    const postWhitelistedOwner = await nft.isWhitelisted(owner.address);
    const postWhitelistedOther = await nft.isWhitelisted(owner.address);

    await nft.removeFromWhitelist([owner.address, otherAccount.address]);

    const afterRemoveWhitelistOwner = await nft.isWhitelisted(owner.address);
    const afterRemoveWhitelistOther = await nft.isWhitelisted(owner.address);

    const status = await nft.status();

    expect(preWhitelistOwner).to.eq(false);
    expect(postWhitelistedOwner).to.eq(true);
    expect(afterRemoveWhitelistOwner).to.eq(false);
    expect(preWhitelistOther).to.eq(false);
    expect(postWhitelistedOther).to.eq(true);
    expect(afterRemoveWhitelistOther).to.eq(false);
    expect(status).to.eq(1);

    // reverts

    await expect(
      nft.connect(otherAccount).addToWhitelist([otherAccount.address])
    ).to.be.revertedWith("Ownable: caller is not the owner");

    await expect(
      nft.connect(otherAccount).removeFromWhitelist([otherAccount.address])
    ).to.be.revertedWith("Ownable: caller is not the owner");

    await expect(nft.addToWhitelist([])).to.be.revertedWith("No one to add");

    await expect(nft.removeFromWhitelist([])).to.be.revertedWith(
      "No one to remove"
    );
  });

  it("pre mint", async function () {
    const { nft, owner, price, otherAccount } = await loadFixture(
      deployNFTFixturePREMINT
    );
    const address0 = "0x0000000000000000000000000000000000000000";
    const totalSupplyBefore = await nft.totalSupply();
    const numToMint = 30;

    await nft.addToWhitelist([owner.address]);

    const mintTx = await nft.safeMint(owner.address, numToMint, {
      value: price.mul(numToMint),
    });

    await expect(mintTx)
      .to.emit(nft, "Transfer")
      .withArgs(
        address0,
        owner.address,
        totalSupplyBefore.toNumber() + numToMint - 1
      );

    await expect(mintTx).to.changeEtherBalances(
      [owner.address, nft.address],
      [price.mul(-numToMint), price.mul(numToMint)]
    );

    const balanceNFT = await nft.balanceOf(owner.address);
    const totalSupplyAfter = await nft.totalSupply();

    expect(balanceNFT).to.eq(numToMint);
    expect(totalSupplyAfter).to.eq(totalSupplyBefore.toNumber() + numToMint);

    //reverts

    await expect(
      nft
        .connect(otherAccount)
        .safeMint(otherAccount.address, 1, { value: price })
    ).to.be.revertedWith("Not whitelisted");

    await expect(
      nft.safeMint(owner.address, 1, { value: price.add(1) })
    ).to.be.revertedWith("Wrong amount");

    await nft.changePrice(ethers.utils.parseEther("2"));

    await expect(
      nft.safeMint(owner.address, 1, { value: price })
    ).to.be.revertedWith("Wrong amount");

    await nft.changePrice(ethers.utils.parseEther("1"));
    await nft.changeStatus(0);

    await expect(
      nft.safeMint(owner.address, 1, { value: price })
    ).to.be.revertedWith("Mint paused");
  });

  it("mint", async function () {
    const { nft, owner, price, otherAccount } = await loadFixture(
      deployNFTFixtureMINT
    );
    const address0 = "0x0000000000000000000000000000000000000000";
    const totalSupplyBefore = await nft.totalSupply();
    const numToMint = 30;

    const mintTx = await nft.safeMint(owner.address, numToMint, {
      value: price.mul(numToMint),
    });

    await expect(mintTx)
      .to.emit(nft, "Transfer")
      .withArgs(
        address0,
        owner.address,
        totalSupplyBefore.toNumber() + numToMint - 1
      );

    await expect(mintTx).to.changeEtherBalances(
      [owner.address, nft.address],
      [price.mul(-numToMint), price.mul(numToMint)]
    );

    const balanceNFT = await nft.balanceOf(owner.address);
    const totalSupplyAfter = await nft.totalSupply();

    expect(balanceNFT).to.eq(numToMint);
    expect(totalSupplyAfter).to.eq(totalSupplyBefore.toNumber() + numToMint);

    //reverts

    await expect(
      nft.safeMint(owner.address, 1, { value: price.add(1) })
    ).to.be.revertedWith("Wrong amount");

    await nft.changePrice(ethers.utils.parseEther("2"));

    await expect(
      nft.safeMint(owner.address, 1, { value: price })
    ).to.be.revertedWith("Wrong amount");

    await nft.changePrice(ethers.utils.parseEther("1"));
    await nft.changeStatus(0);

    await expect(
      nft.safeMint(owner.address, 1, { value: price })
    ).to.be.revertedWith("Mint paused");
  });

  it("withdraw", async function () {
    const { nft, owner, price, otherAccount, count } = await loadFixture(
      deployNFTFixtureMINTED
    );

    const balance = await ethers.provider.getBalance(nft.address);

    expect(balance).to.eq(price.mul(count));

    const withdraw = await nft.withdraw();

    await expect(withdraw).to.changeEtherBalances(
      [nft.address, owner.address],
      [price.mul(-count), price.mul(count)]
    );

    const afterBalance = await ethers.provider.getBalance(nft.address);

    expect(afterBalance).to.eq(0);

    //reverts

    await expect(
      nft.connect(otherAccount).changePrice(ethers.utils.parseEther("3.12"))
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("approve nft", async function () {
    const { nft, owner, otherAccount } = await loadFixture(
      deployNFTFixtureMINTED
    );

    const approveTx = await nft.approve(otherAccount.address, 1);

    await expect(approveTx)
      .to.emit(nft, "Approval")
      .withArgs(owner.address, otherAccount.address, 1);

    const getApproveTx = await nft.getApproved(1);

    expect(getApproveTx).to.eq(otherAccount.address);

    //reverts
    await expect(
      nft.connect(otherAccount).approve(otherAccount.address, 1)
    ).to.be.revertedWith(
      "ERC721: approve caller is not token owner or approved for all"
    );
  });

  it("approve all nft", async function () {
    const { nft, owner, otherAccount } = await loadFixture(
      deployNFTFixtureMINTED
    );

    const approveAllTx = await nft.setApprovalForAll(
      otherAccount.address,
      true
    );

    await expect(approveAllTx)
      .to.emit(nft, "ApprovalForAll")
      .withArgs(owner.address, otherAccount.address, true);

    const getApproveAllTx = await nft.isApprovedForAll(
      owner.address,
      otherAccount.address
    );

    expect(getApproveAllTx).to.eq(true);
  });

  it("transfer nft", async function () {
    const { nft, owner, otherAccount } = await loadFixture(
      deployNFTFixtureMINTED
    );
    const address0 = "0x0000000000000000000000000000000000000000";
    const totalSupply: any = await nft.totalSupply();
    // await nft.approve(otherAccount.address, 1);

    const transferTx = await nft["safeTransferFrom(address,address,uint256)"](
      owner.address,
      otherAccount.address,
      1
    );

    await expect(transferTx)
      .to.emit(nft, "Transfer")
      .withArgs(owner.address, otherAccount.address, 1);

    const balanceOwner = await nft.balanceOf(owner.address);
    const balanceotherAccount = await nft.balanceOf(otherAccount.address);

    const ownerOfToken = await nft.ownerOf(1);

    expect(balanceOwner).to.eq(totalSupply - 1);
    expect(balanceotherAccount).to.eq(1);
    expect(ownerOfToken).to.eq(otherAccount.address);

    //reverts
    await expect(
      nft
        .connect(otherAccount)
        ["safeTransferFrom(address,address,uint256)"](
          owner.address,
          otherAccount.address,
          1
        )
    ).to.be.revertedWith("ERC721: transfer from incorrect owner");

    await expect(
      nft["safeTransferFrom(address,address,uint256)"](
        owner.address,
        address0,
        2
      )
    ).to.be.revertedWith("ERC721: transfer to the zero address");
  });

  it("transfer from nft", async function () {
    const { nft, owner, otherAccount } = await loadFixture(
      deployNFTFixtureMINTED
    );
    const address0 = "0x0000000000000000000000000000000000000000";
    const totalSupply: any = await nft.totalSupply();
    // await nft.approve(otherAccount.address, 1);
    await nft.setApprovalForAll(otherAccount.address, true);

    const transferTx = await nft
      .connect(otherAccount)
      ["safeTransferFrom(address,address,uint256)"](
        owner.address,
        otherAccount.address,
        1
      );

    await expect(transferTx)
      .to.emit(nft, "Transfer")
      .withArgs(owner.address, otherAccount.address, 1);

    const balanceOwner = await nft.balanceOf(owner.address);
    const balanceotherAccount = await nft.balanceOf(otherAccount.address);

    const onerOfToken = await nft.ownerOf(1);

    expect(balanceOwner).to.eq(totalSupply - 1);
    expect(balanceotherAccount).to.eq(1);
    expect(onerOfToken).to.eq(otherAccount.address);

    //reverts
    await expect(
      nft
        .connect(otherAccount)
        ["safeTransferFrom(address,address,uint256)"](
          owner.address,
          address0,
          0
        )
    ).to.be.revertedWith("ERC721: transfer to the zero address");
  });

  it("change URIs", async function () {
    const { nft, owner, otherAccount } = await loadFixture(
      deployNFTFixtureMINTED
    );

    const newUri = "newUri";
    const newContractUri = "newContractUri";

    await nft.changeBaseURI(newUri);
    await nft.changeBaseContractURI(newContractUri);

    const contractURI = await nft.contractURI();
    const token1URI = await nft.tokenURI(0);

    expect(contractURI).to.eq(newContractUri);
    expect(token1URI).to.eq(`${newUri}1.json`);

    //reverts
    await expect(
      nft.connect(otherAccount).changeBaseURI(newUri)
    ).to.be.revertedWith("Ownable: caller is not the owner");

    await expect(
      nft.connect(otherAccount).changeBaseContractURI(newContractUri)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });
});
