import dbConnect from "@/lib/db/dbconnection";
import Location from "@/lib/schema/location.model";

// GET SERVERS
export default async function handler(req, res) {
  if (req.method === "GET") {
    const query = req.query;
    const { id } = query;
    try {
      dbConnect();
      console.log("LOG : GET LOCATIONS LIST");
      const locations = Location;
      const result = await locations.find({continentId: id}).sort({ locationId: 1 });
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
