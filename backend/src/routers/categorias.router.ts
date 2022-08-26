import express from "express";
import { getCategorias, getUsuarios } from "../controllers/controller";

const router = express.Router();

router.get("/categorias", getCategorias);
router.get("/usuarios", getUsuarios);

export default router;
