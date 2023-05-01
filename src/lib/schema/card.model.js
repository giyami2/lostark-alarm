// Card schema
import mongoose, { Schema, models } from "mongoose";

export const CardSchema = new Schema({
  cardId: {
    type: Number,
    required: true,
  },
  continentId: {
    type: Number,
    required: true,
  },
  card: {
    type: String,
    required: true,
  },
  etc: {
    type: String,
  }
});

const Card = models?.Card || mongoose.model("Card", CardSchema);

export default Card;
