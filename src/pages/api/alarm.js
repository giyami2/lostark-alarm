import { getNextSequenceValue } from "@/lib/counter/counter.model";
import dbConnect from "@/lib/db/dbconnection";
import Alarm from "@/lib/schema/alarm.model";
import axios from "axios";

/**
 * 
 * @param {*} req server, continent, location, card (only id), rapport 
 * @param {*} res response status
 */

export default async function handler(req, res) {
  const alarms = Alarm;
  if (req.method === 'GET') {
    try {
      dbConnect();
      console.log("LOG : GET ALARM LIST");
      const result = await alarms.find().sort({ alarmId: -1 });
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "POST") {
    // POST인 경우 떠상 제보
    try {
      dbConnect();
      console.log("LOG : POST ALARM DATA");
      const alarmId = await getNextSequenceValue("alarmId");
      const { serverId, serverName, continentId, continentName, locationId, locationName, cardId, cardName, grade, rapportFlg, rapport, user, datetime } = req.body;
      const _alarms = new alarms({ alarmId, serverId, serverName, continentId, continentName, locationId, locationName, cardId, cardName, grade, rapportFlg, rapport, user, datetime });
      await _alarms.save();
      res.status(200).json({ message: "Alarm created successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }

    // console.log("request body :", req.body);
    const path = `https://discordapp.com/api/webhooks/${process.env.WEBHOOK_ID}/${process.env.WEBHOOK_TOKEN}`;
    axios
      .post(path, {
        content: `
        SERVER : ${req.body.serverName} 
        CONTINENT : ${req.body.continentName} 
        LOCATION : ${req.body.locationName} 
        CARD : ${req.body.cardName} 
        RAPPORT : ${req.body.rapport}`,
      })
      .then((res) => console.log("Success"));
  } else {
    // Handle any other HTTP method
  }
}
