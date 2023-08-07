import { Express } from "express";
import { CategoryEp } from "../end-points/category-ep";


export function initCategoryRoutes(app:Express){
   app.post('/api/auth/category/create',CategoryEp.createCategory)
    /* app.post('/api/public/login',UserEp.loginUser)

    */
    app.get('/api/public/category/get',CategoryEp.getCategories) 
}