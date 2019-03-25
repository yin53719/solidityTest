pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adoption.sol";



contract TestAdoption{
    Adoption adoption = Adoption(DeployedAddresses.Adoption());

    function testUserCanAdopt() public{
        uint returnId = adoption.adopt(8);
        uint expectId = 8;
        Assert.equal(returnId,expectId,'返回领养Id');
    }

    function testCanGetAdopters() public {
        address expect = address(this);
        address[16] memory adopters = adoption.getAdopters();
        Assert.equal(adopters[8],expect,'领养后，我的地址会被记录下来');
    }
}














