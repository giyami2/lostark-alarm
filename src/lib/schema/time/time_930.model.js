// TIME_930 schema
import mongoose, { models } from "mongoose";
import { TimeSchema } from "./model";

const Time930 = models?.Time930 || mongoose.model("time_930", TimeSchema, 'time_930');

export default Time930;
