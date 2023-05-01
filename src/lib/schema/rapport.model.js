// Rapport schema
import mongoose, { Schema, models } from "mongoose";

export const RapportSchema = new Schema({
  id: {
    type: Number,
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
  rapportName: {
    type: String,
    required: true,
  },
  rapportType: {
    type: Number,
    required: true,
  },
});

const Rapport = models?.Rapport || mongoose.model("Rapport", RapportSchema);

export default Rapport;
