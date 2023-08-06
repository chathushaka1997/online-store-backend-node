import mongoose from "mongoose";
import { Types } from "mongoose";

interface CommonAttributes {
  name: string;
}

export interface DTag extends CommonAttributes {
  _id?: Types.ObjectId;
}

export interface ITag extends CommonAttributes, mongoose.Document {}
