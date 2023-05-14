import axios from "axios";
export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request1
    console.log("request body :", req.body);
    console.log(req);
    const path = `https://discordapp.com/api/webhooks/${process.env.WEBHOOK_ID}/${process.env.WEBHOOK_TOKEN}`;
    axios
      .post(path, {
        content: `지역 : ${req.body.location} / NPC : ${req.body.npc} / 아이템 : ${req.body.item}`,
      })
      .then((res) => console.log("hook res: ", res));
  } else {
    // Handle any other HTTP method
  }
}
