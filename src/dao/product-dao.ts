import { DProduct, IProduct } from "../models/product-model";
import Product from "../schemas/product-schema";

export namespace ProductDao {
  export async function createProduct(productData: IProduct): Promise<DProduct> {
    const saveProduct = new Product(productData);
    return (await saveProduct.save()).populate(["tags", "brand", "category"]);
  }

  export async function updateProduct(id: string, productData: Partial<IProduct>): Promise<DProduct | null> {
    console.log(id);
    console.log(productData)
    return await Product.findByIdAndUpdate(id, productData, { new: true }).populate(["tags", "brand", "category"]);
  }

  export async function getProducts(searchTerm: string): Promise<DProduct[]> {
    return await Product.find({ title: { $regex: searchTerm, $options: "i" } }).populate(["tags", "brand", "category"]);
  }
}
