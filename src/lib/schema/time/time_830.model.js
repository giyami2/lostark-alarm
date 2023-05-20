// TIME_830 schema
import mongoose, { models } from "mongoose";
import { TimeSchema } from "./model";

const Time830 = models?.Time830 || mongoose.model("time_830", TimeSchema, 'time_830');

export default Time830;
