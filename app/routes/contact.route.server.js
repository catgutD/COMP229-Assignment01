//contact.route.server.js Cathy Da 301177731 Sept 30
import { Router } from "express";
import { displayContactPage } from "../controllers/contact.controller.server.js";

const router = Router();

router.get('/contact', displayContactPage);

export default router;