// TIME_930 schema
import mongoose from "mongoose";
import { TimeSchema } from "./model";

const Time930 = mongoose.models['time_930'] || mongoose.model("time_930", TimeSchema, 'time_930');

export default Time930;
