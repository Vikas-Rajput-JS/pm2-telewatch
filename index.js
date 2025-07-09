require("dotenv").config();
const pm2 = require("pm2");
const { sendAlert } = require("./telegramConfig");

const APP_NAME = process.env.PM2_APP_NAME;
const ENABLE_RESTART = process.env.RESTART_ON_CRASH === "true";

pm2.connect(() => {
  console.log("✅ PM2 Connected");

  pm2.launchBus((err, bus) => {
    if (err) {
      console.error("❌ PM2 Bus Error:", err);
      return;
    }

    console.log("📡 Listening to PM2 events...");
    const validEvents = ["exit", "restart", "error", "delete"];
    bus.on("process:event", async (data) => {
      if (!validEvents.includes(data.event)) return;

      if (APP_NAME && data.process.name !== APP_NAME) return;

      const eventName = data.event.toUpperCase();
      const msg = `🚨 *PM2 Alert*\nApp: \`${
        data.process.name
      }\`\nEvent: *${eventName}*\nTime: ${new Date().toLocaleString()}`;

      try {
        await sendAlert(msg);
      } catch (err) {
        console.error("❌ Failed to send Telegram message:", err.message);
      }
    });
  });
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("👋 Shutting down notifier...");
  pm2.disconnect();
  process.exit();
});
