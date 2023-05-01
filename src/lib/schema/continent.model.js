// Continent schema
import mongoose, { Schema, models } from "mongoose";

export const ContinentSchema = new Schema({
  continentId: {
    type: Number,
  },
  continentName: {
    type: String,
    required: true,
  },
});

const Continent = models?.Continent || mongoose.model("Continent", ContinentSchema);

export default Continent;
