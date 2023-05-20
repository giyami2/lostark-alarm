import { Schema } from "mongoose";

export const TimeSchema = new Schema({
  continentId: {
    type: Number,
    required: true,
  },
  continentName: {
    type: String,
    required: true,
  },
});