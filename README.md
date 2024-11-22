
# Solana Pump.Fun Sniper Bot

## Description
The **Pump.Fun Sniper Bot** is an advanced trading bot for the Solana blockchain, designed to execute high-speed transactions using Jito block-engine. The bot incorporates customizable filtering options and advanced transaction handling for optimal performance.

## Features
- **Jito Block Engine Integration:** Leverage the Jito block engine for optimized and prioritized transactions.
- **Customizable Filters:** Configure social, whitelist, blacklist, and balance checks.
- **Stop Loss Handling:** Automatically exit positions when losses reach a certain threshold.
- **Highly Configurable:** Modify `.env` and snipe settings to suit your strategy.
- **Real-time WebSocket Support:** Use WebSockets for instant updates on trading opportunities.
- **Simple Deployment:** Lightweight setup using `Node.js` and TypeScript.

---

## Prerequisites
- **Node.js**: Version 12.13.0 or higher.
- **Yarn**: Version 1.22.0 or higher.
- **Solana CLI**: Installed and configured.
- **RPC Endpoint**: A valid Solana RPC endpoint and WebSocket URL.
- **Private Key**: Wallet private key to authorize transactions.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rizzolib/Pump.fun-sniper-bot.git
   cd Pump.fun-sniper-bot
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```

4. Add your environment variables:
   Use the following template for `.env`:
   ```bash
   PAYERPRIVATEKEY=
   RPC_ENDPOINT=
   RPC_WEBSOCKET_ENDPOINT=
   BLOCKENGINE_URL=tokyo.mainnet.block-engine.jito.wtf

   JITO_KEY=66xqL9aFZJ8k9YpjNBexNASfuoDgNE1ZpGRXB28zoTfS4u2czzVBhMNMqgZYFeMN8FnUi6gMzXWgVYRHkTZ6yuLC
   CHECK_FILTER=true
   CHECK_SOCIAL=true
   CHECK_NAMEWHITELIST=false
   CHECK_NAMEBLACKLIST=false
   CHECK_WALLETWHITELIST=false
   CHECK_WALLETBLACKLIST=false
   CHECK_SOLDBALANCE=true

   USE_SNIPE_LIST=false

   JITO_MODE=true
   JITO_ALL=false
   JITO_FEE=0.001
   COMMITMENT_LEVEL=finalized

   stop_loss=-0.1
   ```

5. Compile TypeScript (optional, if you plan to build):
   ```bash
   yarn tsc
   ```

---

## Usage

1. Start the bot:
   ```bash
   yarn start
   ```

2. The bot will begin monitoring trading opportunities and executing trades based on your `.env` configuration.

---

## Configuration Options

### `.env` Variables:
- **`PAYERPRIVATEKEY`**: The private key for your wallet (use caution to keep it secure).
- **`RPC_ENDPOINT`**: Solana RPC endpoint URL.
- **`RPC_WEBSOCKET_ENDPOINT`**: Solana WebSocket URL for real-time updates.
- **`BLOCKENGINE_URL`**: Jito block engine URL.
- **Filters**:
  - `CHECK_FILTER`: Enable or disable all filters (`true`/`false`).
  - `CHECK_SOCIAL`: Check project social signals.
  - `CHECK_NAMEWHITELIST`/`BLACKLIST`: Filter by project name inclusion or exclusion.
  - `CHECK_WALLETWHITELIST`/`BLACKLIST`: Filter by wallet address inclusion or exclusion.
  - `CHECK_SOLDBALANCE`: Ensure sufficient SOL balance for transactions.

- **Stop Loss**:
  - `stop_loss`: The maximum loss (in percentage) before auto-exiting the position.

- **Jito Settings**:
  - `JITO_MODE`: Enable Jito block engine.
  - `JITO_FEE`: Set the fee for Jito engine transactions.

---

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any bugs or feature requests.

---

## Troubleshooting
If you encounter any issues, check the following:
- Verify `.env` configurations.
- Ensure all dependencies are installed using `yarn install`.
- Ensure the wallet has sufficient SOL balance for transactions.
- Check the Solana network status.

---

If you have some problem, please contact me via

 - x: @james980114
 - discord: jamesybarra98114 


