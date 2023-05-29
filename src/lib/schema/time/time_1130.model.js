// TIME_1130 schema
import mongoose from "mongoose";
import { TimeSchema } from "./model";

const Time1130 = mongoose.models['time_1130'] || mongoose.model("time_1130", TimeSchema, 'time_1130');

export default Time1130;
