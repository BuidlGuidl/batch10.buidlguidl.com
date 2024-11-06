import { expect } from "chai";
import { ethers } from "hardhat";
import { CheckIn, BatchRegistry } from "../typechain-types";

describe("CheckIn Contract", function () {
  let checkIn: CheckIn;
  let batchRegistry: BatchRegistry;
  let owner: any;
  let addr1: any;

  before(async () => {
    [owner, addr1] = await ethers.getSigners();

    // Deploy the BatchRegistry contract first
    const batchRegistryFactory = await ethers.getContractFactory("BatchRegistry");
    batchRegistry = await batchRegistryFactory.deploy(owner.address, "10", { value: ethers.parseEther("1.0") }); // Fund with 1 Ether

    // Deploy the CheckIn contract with the BatchRegistry address
    const checkInFactory = await ethers.getContractFactory("CheckIn");
    checkIn = await checkInFactory.deploy(batchRegistry.getAddress());
  });

  describe("Deployment", function () {
    it("Should set the correct BatchRegistry address", async function () {
      expect(await checkIn.batchRegistry()).to.equal(await batchRegistry.getAddress());
    });
  });

  describe("CheckIn Functionality", function () {
    it("Should allow the owner to call checkIn on BatchRegistry", async function () {
      // Allow the owner to check in
      await batchRegistry.updateAllowList([owner.address], [true]);

      // Call the checkIn function through CheckIn contract
      await checkIn.callCheckIn();

      // Verify that the checkedInCounter in BatchRegistry has increased
      expect(await batchRegistry.checkedInCounter()).to.equal(1);
    });

    it("Should revert if a non-owner tries to call checkIn", async function () {
      // Allow addr1 to check in
      await batchRegistry.updateAllowList([addr1.address], [true]);

      // Attempt to call checkIn from a non-owner address
      await expect(checkIn.connect(addr1).callCheckIn()).to.be.revertedWith("Not the contract owner");
    });
  });
});
