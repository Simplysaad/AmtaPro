import { Router } from "express";
import { generateNews } from "../Controllers/news.controller.js";
const router = Router();

router.get("/", generateNews);

const newsRoutes = router;
export default newsRoutes;
