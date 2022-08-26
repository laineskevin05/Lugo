import { Request, Response } from "express";
import mongoose from "mongoose";
import { CategoriasSchema } from "../models/categorias.schema";
import { UsuarioSchema } from "../models/usuario.schema";

export const getCategorias = (req: Request, res: Response) => {
  CategoriasSchema.find()
    .then((result) => {
      res.send(result);
      res.end();
    })
    .catch((error) => console.error(error));
};

export const getUsuarios = (req: Request, res: Response) => {
  UsuarioSchema.find()
    .then((result) => {
      res.send(result);
      res.end();
    })
    .catch((error) => console.error(error));
};
