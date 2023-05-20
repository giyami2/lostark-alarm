// TIME_1230 schema
import mongoose, { models } from "mongoose";
import { TimeSchema } from "./model";

const Time1230 = models?.Time1230 || mongoose.model("time_1230", TimeSchema, 'time_1230');

export default Time1230;
