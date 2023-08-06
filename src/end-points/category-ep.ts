import { NextFunction, Request, Response } from "express";
import { CategoryDao } from "../dao/category-dao";

export namespace CategoryEp {
  export async function createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);

      const categoryData = req.body;
      const createCategory = await CategoryDao.createCategory(categoryData);
      res.sendSuccess(createCategory, "Brand created!", 201);
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }

  export async function getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      let searchTerm = "";
      if (req.query.searchTag) {
        searchTerm = String(req.query.searchTag);
      }

      const categories = await CategoryDao.getCategories(searchTerm);
      res.sendSuccess(categories, "Brands retrireve!");
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }
}
