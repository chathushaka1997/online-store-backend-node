import { Express } from "express";
import { BrandEp } from "../end-points/brand-ep";
import { TagEp } from "../end-points/tag-ep";


export function initTagRoutes(app:Express){
   app.post('/api/auth/tag/create',TagEp.createTag)
    /* app.post('/api/public/login',UserEp.loginUser)

    */
    app.get('/api/public/tag/get',TagEp.getTags) 
}