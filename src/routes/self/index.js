import { Router } from 'express';
import { selfService } from "../../services"

const router = Router();

router.get("/", selfService.get);
router.get("/logout", selfService.logout);

export default router;