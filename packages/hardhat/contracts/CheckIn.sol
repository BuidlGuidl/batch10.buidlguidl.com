// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn {
    IBatchRegistry public batchRegistry;

    // Optional: Owner pattern
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor(address _batchRegistry) {
        batchRegistry = IBatchRegistry(_batchRegistry);
        owner = msg.sender; // Set the deployer as the owner
    }

    function callCheckIn() public onlyOwner {
        batchRegistry.checkIn();
    }
}

