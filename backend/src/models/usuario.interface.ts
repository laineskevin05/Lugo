import mongoose from "mongoose";

export interface Usuario {
  _id: mongoose.Types.ObjectId;
  nombre: string;
  apellido: string;
  ordenes: Orden[];
}

export interface Orden {
  nombreProducto: string;
  descripcion: string;
  cantidad: number;
  precio: number;
}
