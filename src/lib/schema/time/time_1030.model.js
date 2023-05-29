// TIME_1030 schema
import mongoose from "mongoose";
import { TimeSchema } from "./model";

const Time1030 = mongoose.models['time_1030'] || mongoose.model("time_1030", TimeSchema, 'time_1030');

export default Time1030;
