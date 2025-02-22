const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LockModule", (m) => {
  const talk = m.contract("Talk", [], {});

  m.call(talk, "createPost", ["hello", "this is desc"]);

  return { talk };
});
