import { Router } from 'express';
import { productTypeService } from "../../services"

const router = Router();

router.get("/", productTypeService.getAll);

router.post("/", productTypeService.create);

router.delete("/:id", productTypeService.delete);

export default router;