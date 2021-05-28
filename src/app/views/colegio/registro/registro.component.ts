
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColegioService } from '../../../app_core/services/colegio-service/colegio.service';


/**
 * Componente para el modulo de activar libretas.
 */
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class Registro implements OnInit {

  /**
   * Variable que contiene el formulario de las casas
   */
  formAdd: FormGroup;
  /**
   * Variable donde se alamacena los programas
   */
   programas: any;
  /**
   * Variable donde se alamacena los programas sin repetidos
   */  
  sinRepetidos: any;

  



  constructor(
    private fb: FormBuilder,
    private serviceColegio: ColegioService,
  ) {
    this.formAdd = this.fb.group({
      name: "",
      family_name: "",
      email: "",
      phone: "",
      program: "",
      comment: ""
    })
    
  }

  /**
   * Función que permite iniciar y cargar l registro sin programas repetidos
   */
  async ngOnInit() {
    this.programas = await this.serviceColegio.getProgramas().toPromise();
    this.sinRepetidos = this.programas.filter((valorActual, indiceActual, arreglo) => {
      return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)) === indiceActual
    });   
    
  }
  /**
   * Función que permite adicionar un nuevo curso
  */
  async btnAdd() {
    try{
      var registro = this.formAdd.value;
      registro = await this.serviceColegio.addRegistro(registro).toPromise();
    }catch(e){
      console.log("registro que se envia",this.formAdd.value)
      console.log("error",e)
      return e;
    }
  }
  
}
