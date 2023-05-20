// TIME_430 schema
import mongoose, { models } from "mongoose";
import { TimeSchema } from "./model";

const Time430 = models?.Time430 || mongoose.model("time_430", TimeSchema, 'time_430');

export default Time430;
