pragma solidity ^0.4.24;

contract Counter{
    uint num;

    constructor(){

        num = 0;
    }
    function increment() public{
        num += 1;
    }

    function getNum() view returns(uint){
        return num;
    }

}
