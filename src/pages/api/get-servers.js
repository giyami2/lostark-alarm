
import dbConnect from "@/lib/db/dbconnection";
import Server from "@/lib/schema/server.model";

// GET SERVERS
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      dbConnect();
      const servers = Server;

      const allServers = await servers.find({});

      res.status(200).json(allServers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
