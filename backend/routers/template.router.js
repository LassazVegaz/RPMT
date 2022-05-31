import express from 'express';
import {templateService} from "../services/template.service";
const _router = express.Router();


//POST
//create template
_router.post("/", async (req, res) => {
    try{
        req.body.role = "template";
        const template = await templateService.createTemplate(req.body);
        res.json(template);
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
});

//Get

_router.get("/", async (req, res) => {
    try{
        const templates = await templateService.getAllTemplates();
        res.json(templates);
    } catch (error){
        res.status(500).json({message: error.message, error});
    }
});

//Get /:id


_router.get("/:id", async (req,res) => {
    try{
        const template = await templateService.getTemplate(
            req.params.id
            );
        res.json(template);
    } catch(error){
        res.status(500).json({message: error.message, error});
    }
})

export const templatesRouter = _router;