// Alarm  schema
import mongoose, { Schema, models } from "mongoose";

export const AlarmSchema = new Schema({
  id: {
    type: Number,
  },
  serverName: {
    type: String,
    required: true,
  },
  continentName: {
    type: String,
    required: true,
  },
  locationName: {
    type: String,
    required: true,
  },
  npcName: {
    type: String,
    required: true,
  },
  cardName: {
    type: String,
    required: false,
  },
  rapportName: {
    type: String,
    required: false,
  },
  rapportType: {
    type: Number,
    required: false,
  },
  registered_datetime: {
    type: NativeDate,
    required: false,
  },
});


const Alarm = models?.Alarm || mongoose.model("Alarm", AlarmSchema);

export default Alarm;
