import Test from "@/lib/test/test.model";
import { getNextSequenceValue } from "@/lib/counter/counter.model";
import dbConnect from "@/lib/db/dbconnection";
import Card from "@/lib/schema/card.model";
// import Location from "@/lib/schema/location.model";
// import Server from "@/lib/schema/server.model";
// import Continent from "@/lib/schema/continent.model";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      dbConnect();
      const tests = Test;

      const allTests = await tests.find({});

      res.status(200).json(allTests);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "POST") {
    try {
      dbConnect();
      const cards = Card;
      const { continentId, card, etc } = req.body;
      const cardId = await getNextSequenceValue("cardId");
      const _cards = new cards({ cardId, continentId, card, etc });
      await _cards.save();
      res.status(200).json({ message: "Test created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
