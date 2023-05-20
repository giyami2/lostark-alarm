// TIME_230 schema
import mongoose, { models } from "mongoose";
import { TimeSchema } from "./model";

const Time230 = models?.Time230 || mongoose.model("time_230", TimeSchema, 'time_230');

export default Time230;
