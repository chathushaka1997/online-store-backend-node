import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { ITag } from "../models/tag-model";


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
export const TagSchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String,
      require: true,
      unique: true,
    },
  },
  schemaOptions
);

const Tag = mongoose.model<ITag>("Tag", TagSchema);

export default Tag;
