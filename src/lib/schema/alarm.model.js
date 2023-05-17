// Alarm  schema
import mongoose, { Schema, models } from "mongoose";

export const AlarmSchema = new Schema({
  alarmId: {
    type: Number,
  },
  serverId: {
    type: Number,
    required: true,
  },
  serverName: {
    type: String,
    required: true,
  },
  continentId: {
    type: Number,
    required: true,
  },
  continentName: {
    type: String,
    required: true,
  },
  locationId: {
    type: Number,
    required: true,
  },
  locationName: {
    type: String,
    required: true,
  },
  cardId: {
    type: Number,
    required: true,
  },
  cardName: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  rapportFlg: {
    type: Number,
    required: true,
  },
  rapport: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: false,
  },
  datetime: {
    type: String,
    required: true,
  },
});


const Alarm = models?.Alarm || mongoose.model("Alarm", AlarmSchema);

export default Alarm;
