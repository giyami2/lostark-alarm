// TIME_130 schema
import mongoose from "mongoose";
import { TimeSchema } from "./model";

const Time130 = mongoose.models['time_130'] || mongoose.model("time_130", TimeSchema, 'time_130');
export default Time130;
