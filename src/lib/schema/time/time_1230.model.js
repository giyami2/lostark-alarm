// TIME_1230 schema
import mongoose from "mongoose";
import { TimeSchema } from "./model";

const Time1230 = mongoose.models['time_1230'] || mongoose.model("time_1230", TimeSchema, 'time_1230');

export default Time1230;
