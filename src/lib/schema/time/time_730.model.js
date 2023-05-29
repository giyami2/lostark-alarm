// TIME_730 schema
import mongoose from "mongoose";
import { TimeSchema } from "./model";

const Time730 = mongoose.models['time_730'] || mongoose.model("time_730", TimeSchema, 'time_730');

export default Time730;
