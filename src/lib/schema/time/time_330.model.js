// TIME_330 schema
import mongoose, { models } from "mongoose";
import { TimeSchema } from "./model";

const Time330 = models?.Time330 || mongoose.model("time_330", TimeSchema, 'time_330');

export default Time330;
