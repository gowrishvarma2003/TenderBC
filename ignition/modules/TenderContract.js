const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TenderContract", (m) => {
  const TenderContract = m.contract("TenderContract");

  return { TenderContract };
});

