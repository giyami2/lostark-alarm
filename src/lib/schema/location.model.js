// Location schema
import mongoose, { Schema, models } from "mongoose";

export const LocationSchema = new Schema({
  locationId: {
    type: Number,
    required: true,
  },
  continentId: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  etc: {
    type: String,
  },
});

const Location = models?.Location || mongoose.model("Location", LocationSchema);

export default Location;
