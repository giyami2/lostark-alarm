import axios from "axios";

export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request1
    console.log("request body :", req.body);
    console.log(req);
    const path =
      "https://discordapp.com/api/webhooks/1098907587631644692/eAjGs6ahcUDpej_wEctrn_Fh7TuNoamSv65G20sIEl6eqoZPZh7sH3jE2dAmKTSO1-RS";
    axios.post(path, {
      content: `지역 : ${req.body.location} / NPC : ${req.body.npc} / 아이템 : ${req.body.item}`,
    });
  } else {
    // Handle any other HTTP method
  }
}
