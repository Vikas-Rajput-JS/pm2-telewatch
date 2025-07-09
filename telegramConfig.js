const axios = require("axios");

require("dotenv").config();

const getChatId = async () => {
  let resp = await axios.get(
    `https://api.telegram.org/${process.env.BOT_TOKEN}/getUpdates`
  );
  console.log(resp?.data?.result[0]?.message?.from?.id);
  return resp?.data?.result[0]?.message?.from?.id;
};

const sendAlert = async (message = "Hello") => {
  let chatId = await getChatId();
  let resp = await axios.post(
    `https://api.telegram.org/${process.env.BOT_TOKEN}/sendMessage`,
    {
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown",
    }
  );
  console.info(`Message Sent: ${message}`);
};
module.exports = {
  getChatId,
  sendAlert,
};
