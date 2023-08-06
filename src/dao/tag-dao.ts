import { DTag, ITag } from "../models/tag-model";
import Tag from "../schemas/tag-schema";

export namespace TagDao {
    export async function createTag(tagData:ITag):Promise<DTag>{
        const saveUser = new Tag(tagData)
        return await saveUser.save();
    }

    export async function getTags(searchTerm:string):Promise<DTag[]>{
     
        return await Tag.find({ name: { $regex: searchTerm, $options: 'i' } });
    }
}