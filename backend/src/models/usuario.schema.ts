import mongoose from "mongoose";
import { Usuario, Orden } from "./usuario.interface";

const schema = new mongoose.Schema<Usuario>({
  nombre: String,
  apellido: String,
  ordenes: Array<Orden>,
});

export const UsuarioSchema = mongoose.model("usuarios", schema);
