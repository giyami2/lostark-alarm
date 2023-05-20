// TIME_130 schema
import mongoose, { Schema, models } from "mongoose";

export const Time630Schema = new Schema({
  continentId: {
    type: Number,
    required: true,
  },
  continentName: {
    type: String,
    required: true,
  },
});

const Time630 = models?.Time630 || mongoose.model("time_630", Time630Schema, 'time_630');

export default Time630;
