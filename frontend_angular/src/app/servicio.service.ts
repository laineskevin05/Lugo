import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Observable } from "rxjs";
import { Categoria, Usuario } from "./types/interfaces";

@Injectable({
  providedIn: "root",
})
export class ServicioService {
  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Categoria[]> {
    const url: string = `http://localhost:8888/api/categorias/`;

    return this.http.get<Categoria[]>(url);
  }

  getUsuarios(): Observable<Usuario[]> {
    const url: string = `http://localhost:8888/api/usuarios/`;

    return this.http.get<Usuario[]>(url);
  }
}
