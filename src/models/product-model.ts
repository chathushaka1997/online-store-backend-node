import mongoose from "mongoose";
import { Types } from "mongoose";

interface CommonAttributes {
  brand: Types.ObjectId;
  category: Types.ObjectId;
  price: number;
  description: string;
  title: string;
  code: string;
  images: {
    displayUrl: string;
    mediumUrl: string;
    originalUrl: string;
    tumbnailUrl: string;
  };
  tags:[Types.ObjectId]
}

export interface DProduct extends CommonAttributes {
  _id?: Types.ObjectId;
}

export interface IProduct extends CommonAttributes, mongoose.Document {}
