import { Router } from 'express';
import { basketService } from "../../services"

const router = Router();

router.post("/", basketService.create);

router.delete("/:id", basketService.delete);

export default router;