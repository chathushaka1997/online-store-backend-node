import mongoose from "mongoose";
import { Types } from "mongoose";

interface CommonAttributes {
  name: string;
}

export interface DCategory extends CommonAttributes {
  _id?: Types.ObjectId;
}

export interface ICategory extends CommonAttributes, mongoose.Document {}
