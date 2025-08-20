import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SendUsd } from "../target/types/send_usd";
import { PythSolanaReceiver } from "@pythnetwork/pyth-solana-receiver";
import { PythCluster } from "@pythnetwork/client"
import { Keypair } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";

describe("send-usd", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const connection = provider.connection;
  const wallet = provider.wallet as anchor.Wallet;
  const program = anchor.workspace.sendUsd as Program<SendUsd>;

  
  const pythSolanaReceiver = new PythSolanaReceiver({connection, wallet})
  const solUsdPriceFeedAccount = pythSolanaReceiver
    .getPriceFeedAccountAddress(0, "0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d")
    .toBase58();
  const payer = wallet.payer;
  const pythSolAcc = new PublicKey(solUsdPriceFeedAccount);
  const destination = Keypair.generate();
  const amount = new anchor.BN(1);
  
  // Add your test here.
  it("Sol sent ! ⚡", async () => {
    console.log("==== Sending sol =====")
    console.log("Payer account:", payer.publicKey.toBase58());
    console.log("Destination account:", destination.publicKey.toBase58());
    console.log("Pyth account:", pythSolAcc.toBase58());
    console.log(`Amount to be sent in USD: ${amount}`);

    const tx = await program.methods.send(amount).accounts({
      payer: payer.publicKey,
      destination: destination.publicKey,
      priceUpgrade: pythSolAcc
    })
    .rpc();

    const sol = connection.getTokenAccountBalance(destination.publicKey);

    console.log(`Sent ${sol} sol to ${destination.publicKey.toBase58()}`)
    console.log("Your transaction signature", tx);
  });
});
