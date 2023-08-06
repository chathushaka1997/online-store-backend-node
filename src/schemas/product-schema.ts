import * as mongoose from "mongoose";
import { Schema, Model } from "mongoose";
import { IProduct } from "../models/product-model";
import Brand from "./brand-schema";
import Category from "./category-schema";
import Tag from "./tag-schema";

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
export const ProductSchema = new mongoose.Schema(
  {
    brand: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: Brand.modelName,
    },
    category: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: Category.modelName,
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        require: true,
        ref: Tag.modelName,
      },
    ],
    price: {
      type: Schema.Types.Number,
      require: true,
    },
    description: {
      type: Schema.Types.String,
      require: true,
    },
    title: {
      type: Schema.Types.String,
      require: true,
    },
    code: {
      type: Schema.Types.String,
      require: true,
      unique: true,
    },
    images: {
      displayUrl: { type: Schema.Types.String, require: true },
      mediumUrl: { type: Schema.Types.String, require: true },
      originalUrl: { type: Schema.Types.String, require: true },
      tumbnailUrl: { type: Schema.Types.String, require: true },
    },
  },
  schemaOptions
);

// Define a pre-save middleware to generate the unique product code
ProductSchema.pre<IProduct>("save", async function (next) {
  if (this.isNew) {
    const Product: Model<IProduct> = this.constructor as Model<IProduct>;
    let code = this.title.substring(0, 2).toUpperCase();

    // Find the last product with the same initial letters
    const lastProduct = await Product.findOne({ code: { $regex: `^${code}` } }, { code: 1 }, { sort: { code: -1 } }).exec();

    let number = 1;
    if (lastProduct) {
      // Extract the number from the last product's code
      const lastProductNumber = parseInt(lastProduct.code.slice(2));
      if (!isNaN(lastProductNumber)) {
        number = lastProductNumber + 1;
      }
    }

    // Append the number to the code
    code += number.toString().padStart(4, "0");

    // Set the code for the current product
    this.code = code;
  }

  next();
});

const Product = mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
