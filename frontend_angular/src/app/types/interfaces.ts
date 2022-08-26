export interface Categoria {
  _id: string;
  nombreCategoria: string;
  descripcion: string;
  color: string;
  icono: string;
  empresas: Empresa[];
}

export interface Empresa {
  _id: string;
  nombreEmpresa: string;
  imagen: string;
  productos: Producto[];
}

export interface Producto {
  _id: string;
  nombreProducto: string;
  descripcion: string;
  precio: number;
}

export interface Usuario {
  _id: string;
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
