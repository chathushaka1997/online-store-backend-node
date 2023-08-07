import { Express } from "express";
import { BrandEp } from "../end-points/brand-ep";


export function initBrandRoutes(app:Express){
   app.post('/api/auth/brand/create',BrandEp.createBrand)
   app.post('/api/auth/brand/update',BrandEp.updateBrand)
    /* app.post('/api/public/login',UserEp.loginUser)

    */
    app.get('/api/public/brand/get',BrandEp.getBrands) 
}