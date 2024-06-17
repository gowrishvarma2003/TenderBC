const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Tender", (m) => {
  const Tender = m.contract("Tender");

  return { Tender };
});
