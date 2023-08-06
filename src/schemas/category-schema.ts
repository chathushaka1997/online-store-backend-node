import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { ICategory } from "../models/category-model";


const schemaOptions: mongoose.SchemaOptions = {
  _id: true,
  id: false,
  timestamps: true,
  strict: false,
  toJSON: {
    getters: true,
    virtuals: true,
  },
};
export const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String,
      require: true,
      unique: true,
    },
  },
  schemaOptions
);

const Category = mongoose.model<ICategory>("Category", CategorySchema);

export default Category;
