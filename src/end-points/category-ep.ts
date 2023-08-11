import { NextFunction, Request, Response } from "express";
import { CategoryDao } from "../dao/category-dao";

export namespace CategoryEp {
  export async function createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);

      const categoryData = req.body;
      const createCategory = await CategoryDao.createCategory(categoryData);
      res.sendSuccess(createCategory, "Category created!", 201);
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }

  export async function updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const categoryData = req.body;
      const updateCategory = await CategoryDao.updateCategory(categoryData._id, categoryData);
      res.sendSuccess(updateCategory, "Category updated!", 200);
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
      res.sendSuccess(categories, "Category retrireve!");
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }
}
