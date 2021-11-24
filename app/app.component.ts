import { Component } from '@angular/core';
import {Carrera} from "./models/carrera";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  carreraArr:Carrera[]=[
    {id:1, descripcion:"Ingenieria de Sistemas", escuela:"Ciencias de la Información", universidad:"UIS", duracion: 10},
    {id:2, descripcion:"Historia", escuela:"Sociales", universidad:"UIS", duracion: 10},
    {id:3, descripcion:"Administracion", escuela:"Administración", universidad:"UIS", duracion: 10},
    {id:4, descripcion:"Medicina", escuela:"Salud", universidad:"UIS", duracion: 10}
  ];
  selectedCarrera: Carrera = new Carrera();

}

