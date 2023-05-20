// TIME_130 schema
import mongoose, { Schema, models } from "mongoose";
import { TimeSchema } from "./model";

const Time130 = models?.Time130 || mongoose.model("time_130", TimeSchema, 'time_130');

export default Time130;
