import { DCategory, ICategory } from "../models/category-model";
import Category from "../schemas/category-schema";

export namespace CategoryDao {
  export async function createCategory(categoryData: ICategory): Promise<DCategory> {
    const saveUser = new Category(categoryData);
    return await saveUser.save();
  }

  export async function updateCategory(id: string, categoryData: Partial<ICategory>): Promise<DCategory | null> {
    return await Category.findByIdAndUpdate(id, categoryData, { new: true });
  }

  export async function getCategories(searchTerm: string): Promise<DCategory[]> {
    return await Category.find({ name: { $regex: searchTerm, $options: "i" } });
  }
}
