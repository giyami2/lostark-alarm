// TIME_130 schema
import mongoose, { Schema, models } from "mongoose";

export const Time530Schema = new Schema({
  continentId: {
    type: Number,
    required: true,
  },
  continentName: {
    type: String,
    required: true,
  },
});

const Time530 = models?.Time530 || mongoose.model("time_530", Time530Schema, 'time_530');

export default Time530;
