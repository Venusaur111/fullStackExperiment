import express, {Router, type Request, type Response} from 'express';
import { StudentController } from '../controllers/student.controller.js';

const route = Router();
const studentController = new StudentController;

route.get("/", async (req: Request, res: Response) => {
    studentController.findAll();
    res.json({message: "Get request"});
})

route.get("/:id", async (req: Request, res: Response) => {
    return studentController.getStudentById(req, res);
});

route.put("/:id", async (req: Request, res: Response) => {
    res.json({message: "Update request"});
})

route.delete("/:id", async (req: Request, res: Response) => {
    studentController.deleteStudentById(req, res);
    res.json({message: "Delete request"});
})

route.post("/", async (req: Request, res: Response) => {
    res.json({message: "Create request"});
})

export default route;