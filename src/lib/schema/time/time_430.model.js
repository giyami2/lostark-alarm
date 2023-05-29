// TIME_430 schema
import mongoose from "mongoose";
import { TimeSchema } from "./model";

const Time430 = mongoose.models['time_430'] || mongoose.model("time_430", TimeSchema, 'time_430');

export default Time430;
