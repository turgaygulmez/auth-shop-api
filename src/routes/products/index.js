import { Router } from 'express';
import { productService } from "../../services"

const router = Router();

router.get("/", productService.getAll);

router.post("/", productService.create);

router.delete("/:id", productService.delete);

export default router;