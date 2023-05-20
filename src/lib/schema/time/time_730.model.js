// TIME_730 schema
import mongoose, { models } from "mongoose";
import { TimeSchema } from "./model";

const Time730 = models?.Time730 || mongoose.model("time_730", TimeSchema, 'time_730');

export default Time730;
