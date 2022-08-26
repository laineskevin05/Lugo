import mongoose from "mongoose";

export interface Categoria {
  _id: mongoose.Types.ObjectId;
  nombreCategoria: string;
  descripcion: string;
  color: string;
  icono: string;
  empresas: Empresa[];
}

export interface Empresa {
  _id: mongoose.Types.ObjectId;
  nombreEmpresa: string;
  imagen: string;
  productos: Producto[];
}

export interface Producto {
  _id: mongoose.Types.ObjectId;
  nombreProducto: string;
  descripcion: string;
  precio: number;
}
