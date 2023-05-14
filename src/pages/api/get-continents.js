import dbConnect from "@/lib/db/dbconnection";
import Continent from "@/lib/schema/continent.model";

// GET SERVERS
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      dbConnect();
      console.log("LOG : GET CONTINENTS LIST");
      const continents = Continent;
      const allContinents = await continents.find({}).sort({ continentId: 1 });
      res.status(200).json(allContinents);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
