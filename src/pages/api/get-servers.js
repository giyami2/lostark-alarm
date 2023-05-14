import dbConnect from "@/lib/db/dbconnection";
import Server from "@/lib/schema/server.model";

// GET SERVERS
export default async function handler(req, res) {
  if (req.method === "GET") {
    const query = req.query;
    const { all } = query;
    try {
      dbConnect();
      const servers = Server;
      console.log("LOG : GET SERVER LIST");

      // search all servers
      if (all === '0') {
        console.log("LOG : Not include All");
        const allServers = await servers
          .find({ serverId: { $ne: 0 } })
          .sort({ serverId: 1 });
        res.status(200).json(allServers);
      } else {
        console.log("LOG : Include All");
        const allServers = await servers.find({}).sort({ serverId: 1 });
        res.status(200).json(allServers);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
