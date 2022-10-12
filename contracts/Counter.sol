//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    int public count;

    constructor() {
        count = 0;
    }

    function addCount() external {
        count++;
    }
}