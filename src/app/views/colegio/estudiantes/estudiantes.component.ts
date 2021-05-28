import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Component, OnInit,TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColegioService } from '../../../app_core/services/colegio-service/colegio.service';


/**
 * Componente para el modulo de activar libretas.
 */
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html'
})
export class Estudiantes implements OnInit {

  /**
   * Varible que contiene los valores del formulario
   */
   formAddx: FormGroup
  /**
   * Variable que contiene el formulario de las casas
   */
  formProfesor: FormGroup
  /**
   * Variable donde se alamacena los cursos de un profesor
   */
   /**
   * Variable que contiene las funciones de BsModalRef
  */
    modalRef: BsModalRef;
  
  estudiantes: any;

  constructor(
    private fb: FormBuilder,
    private serviceColegio: ColegioService,
    private serviceModal: BsModalService,

  ) {
    this.formProfesor = this.fb.group({
      profesor: ""
    }),
    this.formAddx = this.fb.group({
     
      nombre: "",
    })
  }

  /**
   * Función que permite iniciar y cargar las casas
   */
  async ngOnInit() {
    this.estudiantes = await this.serviceColegio.getEstdudiantes().toPromise();
  }
  
  /**
   * Función que permite adicionar nuevos estudiantes
  */
    async btnAdd(){
    let estudiante = this.formAddx.value;
    estudiante = await this.serviceColegio.addEstudiante(estudiante).toPromise();
    this.estudiantes = await this.serviceColegio.getEstdudiantes().toPromise();
  }
  

}
