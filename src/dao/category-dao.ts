import { DCategory, ICategory } from "../models/category-model";
import Category from "../schemas/category-schema";

export namespace CategoryDao {
    export async function createCategory(brandData:ICategory):Promise<DCategory>{
        const saveUser = new Category(brandData)
        return await saveUser.save();
    }

    export async function getCategories(searchTerm:string):Promise<DCategory[]>{
     
        return await Category.find({ name: { $regex: searchTerm, $options: 'i' } });
    }
}