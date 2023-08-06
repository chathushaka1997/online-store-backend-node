import { NextFunction, Request, Response } from "express";
import { BrandDao } from "../dao/brand-dao";
import { TagDao } from "../dao/tag-dao";

export namespace TagEp {
  export async function createTag(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);

      const tagData = req.body;
      const createTag = await TagDao.createTag(tagData);
      res.sendSuccess(createTag, "Brand created!", 201);
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }

  export async function getTags(req: Request, res: Response, next: NextFunction) {
    try {
        let searchTerm =  "";
        if(req.query.searchTag){
            searchTerm = String(req.query.searchTag)
        }

      const tags = await TagDao.getTags(searchTerm);
      res.sendSuccess(tags, "Brands retrireve!");
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }
}
