import Test from "@/lib/test/test.model";
import dbConnect from "@/lib/db/dbconnection";

// GET ALARMS
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
  }
}
