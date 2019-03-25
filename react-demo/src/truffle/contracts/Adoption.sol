pragma solidity ^0.5.0;


contract Adoption{

    address[16] public adopters;

    function adopt (uint petId) public returns (uint){
        //断言
        require(petId>0 &&  petId<16);
        adopters[petId] = msg.sender;

        return petId;

    }

    function getAdopters() public view returns(address[16] memory){
        return adopters;
    }
    // constructor(){

    // }
}