// Server schema
import mongoose, { Schema, models } from "mongoose";

export const ServerSchema = new Schema({
  serverId: {
    type: Number,
  },
  serverName: {
    type: String,
    required: true,
  },
});

const Server = models?.Server || mongoose.model("Server", ServerSchema);

export default Server;
