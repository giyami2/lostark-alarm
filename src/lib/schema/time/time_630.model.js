// TIME_130 schema
import mongoose, { Schema, models } from "mongoose";
import { TimeSchema } from "./model";

const Time630 = mongoose.models['time_630'] || mongoose.model("time_630", TimeSchema, 'time_630');

export default Time630;
