import { Component, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ServicioService } from "./servicio.service";
import { Categoria, Usuario } from "./types/interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Lugo";
  categorias: Categoria[] = [];
  usuarios: Usuario[] = [];
  idCategoria: number = 0;

  @ViewChild("modalCreacionCategoria") modalCreacionCategoria;
  @ViewChild("modalPedidos") modalPedidos;
  @ViewChild("modalCategorias") modalCategorias;
  @ViewChild("modalUser") modalUser;

  constructor(
    private modalService: NgbModal,
    private service: ServicioService
  ) {
    service.getCategorias().subscribe((resp) => {
      console.log(resp);
      this.categorias.push(...resp);
    });

    service.getUsuarios().subscribe((resp) => {
      console.log(resp);
      this.usuarios.push(...resp);
    });
  }

  verOrdenes() {
    console.log("verOrdenes");
    this.modalService.open(this.modalPedidos, { size: "lg" });
  }
  crearCategoria() {
    console.log("crearCategoria");
    this.modalService.open(this.modalCreacionCategoria, { size: "lg" });
  }
  guardar() {
    console.log("guardar");
  }

  cambiarUsuario() {
    console.log("cambiar usuario");
  }

  infoCategorias() {
    console.log("ver información de categoría");
    this.modalService.open(this.modalCategorias, { size: "xl" });
  }
}
