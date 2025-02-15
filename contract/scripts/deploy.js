const hre = require("hardhat");

async function main() {
    const Talk = await hre.ethers.getContractFactory("Talk");
    const talkContract = await Talk.deploy();

    await talkContract.waitForDeployment();

    console.log("Contract deployed to: ", await talkContract.getAddress());
}

main().then(() => process.exit(0)).catch(
    (error) => {
        console.log(error);
        process.exit(1);
    }
)