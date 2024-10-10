const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules")

module.exports = buildModule("Talk", (m) => {
    const Talk = m.contract("Talk", []);

    m.call(Talk, "createPost", ["hello world", "this is the description"]);

    return {
        Talk
    }
})