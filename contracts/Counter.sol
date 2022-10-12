//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    int public count;

    event CounterEvent(address indexed _from, int indexed _newCount, int indexed _oldCount);

    constructor() {
        count = 0;
    }

    function addCount() external {
        count++;

        emit CounterEvent(msg.sender, count, count-1);
    }
}