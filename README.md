# 📣 PM2-TeleWatch

Get real-time Telegram alerts for your PM2 process events like crashes, restarts, and errors — with minimal setup.

> 🔔 Never miss a production issue again.

---

## 🚀 Features

- 🔁 Monitors PM2 process lifecycle events
- 📬 Sends messages to Telegram chats or groups via bot
- 🎯 Optionally filter by specific PM2 app name
- 💨 Simple `.env`-based config or use CLI arguments
- 🛡️ Designed to run persistently with PM2 itself

---

## 📦 Installation

```bash
npm install pm2-telewatch

```

```
⚙️ Setup
1. Create a Telegram Bot
Chat with @BotFather

Send /newbot, follow prompts

Save the generated bot token

```

```
2. Get Your Chat ID
Start a chat with your bot by sending /start

```

```
🛠 Configuration
Before using pm2-telewatch, set up your environment variables.

✅ Create a .env file in your project:
env
Copy
Edit
BOT_TOKEN=123456789:ABCdefGhIJKLmnoPQRstuvWXyz12345678
CHAT_ID=123456789
PM2_APP_NAME=my-app   # Optional: monitor only this app
Alternatively, set them directly in your environment:

bash
Copy
Edit
export BOT_TOKEN=...
export PM2_APP_NAME=my-app

```

```
▶️ Usage
Once your environment variables are set, just import the module:

const teleWatch = require("pm2-telewatch"); // auto-starts on import

```

---
---
---

✅ **You're all set!**

`pm2-telewatch` is now watching your PM2 processes.  
You'll receive instant Telegram alerts whenever your app:

- ❌ Crashes  
- 🔁 Restarts  
- ⛔ Exits unexpectedly  

No extra setup, no ports, no polling — just peace of mind.



---

💬 Have feedback or ideas?  
Open an issue or contribute on [GitHub](https://github.com/Vikas-Rajput-JS/pm2-telewatch).

Made with ❤️ for developers who sleep better with alerts.
