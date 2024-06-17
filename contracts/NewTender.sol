// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.19;

contract NewTender {
    // Create a dictionary with bid id, tenderid as key and the decryption key and unlocktime as value
    struct TenderDetails {
        uint256 id;
        string name;
        string description;
        uint256 endTime;
    }
    mapping(uint256 => TenderDetails) public tenders;
    uint256 public tendersCount;
    
    event TenderPlaced(uint256 id, string name, string description, uint256 endTime);
    // event WinnerSelected(uint256 tenderId, address winner);
    function placeTender(
        string memory _name,
        string memory _description,
        uint256 _endTime
    ) external {
        tenders[tendersCount] = TenderDetails({
            id: tendersCount,
            name: _name,
            description: _description,
            endTime: _endTime
        });
        emit TenderPlaced(tendersCount, _name, _description, _endTime);
        tendersCount++;
    }
}