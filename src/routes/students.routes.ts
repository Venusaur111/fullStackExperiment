import express, {Router, type Request, type Response} from 'express';

const route = Router();

route.get("/", (req: Request, res: Response) => {
    res.json({message: "Get request"});
})

route.put("/:id", (req: Request, res: Response) => {
    res.json({message: "Update request"});
})

route.delete("/:id", (req: Request, res: Response) => {
    res.json({message: "Delete request"});
})

route.post("/", (req: Request, res: Response) => {
    res.json({message: "Create request"});
})

export default route;