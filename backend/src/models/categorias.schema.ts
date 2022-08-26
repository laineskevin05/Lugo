import mongoose from "mongoose";
import { Categoria, Empresa } from "./categorias.interface";

const schema = new mongoose.Schema<Categoria>({
  _id: mongoose.Types.ObjectId,
  nombreCategoria: String,
  descripcion: String,
  color: String,
  icono: String,
  empresas: Array<Empresa>,
});

export const CategoriasSchema = mongoose.model("categorias", schema);
