import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }
  //form: FormGroup;
  ngOnInit(): void {
  }
  form: FormGroup;
  seleccionado;
  show=false;
  pais;
  tienda;
  productos: Array<any> = [
    { id: 1, pais: 'Aurelia Vega', tienda: '30', nombre: 'Deepends', descripcion: 'dedscop', precio: 85, imagen:'smjfiringvr'},
    { id: 2, pais: 'Guerra Cortez', tienda: '45', nombre: 'Insectus', descripcion: 'dedscop', precio: 85, imagen:'smjfiringvr'},
    { id: 3, pais: 'Guadalupe House', tienda: '26', nombre: 'Isotronic', descripcion: 'dedscop', precio: 85, imagen:'smjfiringvr'},
    { id: 4, pais: 'Aurelia Vega', tienda: '30', nombre: 'Deepends', descripcion: 'dedscop', precio: 85, imagen:'smjfiringvr'},
    { id: 5, pais: 'Elisa Gallagher', tienda: '31', nombre: 'Portica', descripcion: 'dedscop', precio: 85, imagen:'smjfiringvr'},
  ];
  consulta(){

    //this.productos=consultaApi(pais,tienda);
  }
  muestraSeleccion(id){
    console.log(id);
  }
}
