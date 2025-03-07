const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LockModule", (m) => {
  const talk = m.contract("Talk", [], {});

  const createPost = m.call(talk, "createPost", ["hello", "this is desc", 0]);

  return { talk };
});
