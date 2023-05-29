// TIME_330 schema
import mongoose from "mongoose";
import { TimeSchema } from "./model";

const Time330 = mongoose.models['time_330'] || mongoose.model("time_330", TimeSchema, 'time_330');

export default Time330;
