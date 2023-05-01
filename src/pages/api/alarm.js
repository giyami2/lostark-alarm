import axios from "axios";
const WEBHOOK_ID = "1098907587631644692";
const WEBHOOK_TOKEN =
  "eAjGs6ahcUDpej_wEctrn_Fh7TuNoamSv65G20sIEl6eqoZPZh7sH3jE2dAmKTSO1-RS";
export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request1
    console.log("request body :", req.body);
    console.log(req);
    const path = `https://discordapp.com/api/webhooks/${WEBHOOK_ID}/${WEBHOOK_TOKEN}`;
    axios
      .post(path, {
        content: `지역 : ${req.body.location} / NPC : ${req.body.npc} / 아이템 : ${req.body.item}`,
      })
      .then((res) => console.log("hook res: ", res));
  } else {
    // Handle any other HTTP method
  }
}
