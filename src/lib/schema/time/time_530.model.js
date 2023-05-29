// TIME_130 schema
import mongoose from "mongoose";
import { TimeSchema } from "./model";

const Time530 = mongoose.models['time_530'] || mongoose.model("time_530", TimeSchema, 'time_530');

export default Time530;
