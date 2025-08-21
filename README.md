# 💸 SendUSD — Anchor Program

SendUSD is a Solana smart contract (Anchor program) that allows you to send **SOL equivalent to a given USD amount** using live price feeds from **Pyth Network**.

It automatically converts a USD value into SOL at the current exchange rate, and transfers that amount of SOL from the sender to a destination account.

---

## ✨ Features

- ⚡ **USD ➔ SOL conversion** on-chain  
- 📡 **Pyth Price Feeds (PriceUpdateV2)** integration  
- ⏱️ Ensures fresh prices with configurable `MAXIMUM_AGE` (default: 1 hour)  
- ✅ Safe math checks for precision and overflow  
- 🔒 Built with **Anchor** for security and developer experience  

---

## 📦 Tech Stack

- [Anchor](https://github.com/coral-xyz/anchor)  
- [Rust](https://www.rust-lang.org/)  
- [Solana Program Library](https://github.com/solana-labs/solana-program-library)  
- [Pyth Solana Receiver SDK](https://github.com/pyth-network/pyth-crosschain)  

---

## ⚙️ Installation

Clone the repo:

```bash
git clone https://github.com/bytehash69/send-usd.git
cd send-usd
```

### ⛓ Deployment

```bash
anchor deploy
```

### 🛠 Testing

```bash
anchor test
```

---

## 📤 Contributing

Contributions are welcome. Please ensure all tests pass and follow the existing code style.

---

## ⛓️‍💥 Disclaimer

This is experimental software. Use at your own risk. Always audit smart contracts before deploying to mainnet.

---
