# Telegram Bot + Mini App: Micro Status Board

This project is a Telegram bot with a mini app that lets users post short status updates and view others’ statuses. It consists of:

- **Bot**: Node.js Telegram bot that interacts with users.
- **Mini App**: Frontend app opened from the bot to post status updates.
- **Backend**: Express server to store statuses and communicate with the bot.

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed (v16 or higher recommended)
- A Telegram bot token (create a bot using [@BotFather](https://t.me/BotFather))
- Basic terminal/command prompt knowledge

---

## Setup Instructions

### 1. Clone the repo

Open your terminal and run:

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

---

Populate the env


---

start the backend server

```bash
node index.js
```

---

Setup the mini app use 

```bash
cd mini-app
npx http-server -c-1
```

use ngrok for local use


Run the bot

```bash
node index.js
```

The bot now should be running 