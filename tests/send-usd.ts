import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SendUsd } from "../target/types/send_usd";
import { getPriceFeedAccountForProgram } from "@pythnetwork/pyth-solana-receiver";
import { Keypair } from "@solana/web3.js";

describe("send-usd", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.sendUsd as Program<SendUsd>;
  const priceFeedAccount = getPriceFeedAccountForProgram(0, "0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d");

  it("Is initialized!", async () => {
    const payer = provider.wallet.payer;
    const destination = Keypair.generate();
    const amount = new anchor.BN(1);
    // Add your test here.
    const tx = await program.methods.send(amount).accounts({
      payer: payer.publicKey,
      destination: destination.publicKey,
      priceUpgrade: priceFeedAccount
    })
    .rpc();
    console.log("Your transaction signature", tx);
  });
});
