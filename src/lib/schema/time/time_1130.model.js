// TIME_1130 schema
import mongoose, { models } from "mongoose";
import { TimeSchema } from "./model";

const Time1130 = models?.Time1130 || mongoose.model("time_1130", TimeSchema, 'time_1130');

export default Time1130;
