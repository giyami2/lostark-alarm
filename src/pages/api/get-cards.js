import dbConnect from "@/lib/db/dbconnection";
import Card from "@/lib/schema/card.model";

// GET SERVERS
export default async function handler(req, res) {
  if (req.method === "GET") {
    const query = req.query;
    const { id } = query;
    try {
      dbConnect();
      console.log("LOG : GET CARD LIST");
      const cards = Card;
      const result = await cards.find({ continentId: id }).sort({ cardId: 1 });
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
