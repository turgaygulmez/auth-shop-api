import { Router } from 'express';
import { userService } from "../../services"

const router = Router();

router.post("/", userService.create);

router.delete("/:id", userService.delete);

router.get("/:id/basket", userService.getBasket);

export default router;