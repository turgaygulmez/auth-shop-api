import { Router } from 'express';
import { authenticationService } from "../../services"

const router = Router();

router.post("/authenticate", authenticationService.authenticate);

export default router;