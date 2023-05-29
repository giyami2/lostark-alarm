// TIME_830 schema
import mongoose from "mongoose";
import { TimeSchema } from "./model";

const Time830 = mongoose.models['time_830'] || mongoose.model("time_830", TimeSchema, 'time_830');

export default Time830;
