// TIME_230 schema
import mongoose from "mongoose";
import { TimeSchema } from "./model";

const Time230 = mongoose.models['time_230'] || mongoose.model("time_230", TimeSchema, 'time_230');

export default Time230;
