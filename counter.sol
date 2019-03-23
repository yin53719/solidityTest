pragma solidity ^0.4.24;

contract Counter{
    uint num;
    address owner;

    constructor(){
        owner = msg.sender;
        num = 0;
    }
    function increment() public{

        if(owner == msg.sender){
            num += 1;
        }
        
    }

    function getNum() view returns(uint){
        return num;
    }

}
