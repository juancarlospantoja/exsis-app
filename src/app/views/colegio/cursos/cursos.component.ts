import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColegioService } from '../../../app_core/services/colegio-service/colegio.service';
//import { ModelsColegio } from '../../../app_core/services/models/colegio.models';


/**
 * Componente para el modulo de activar libretas.
 */
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html'
})
export class Cursos implements OnInit {
  /**
   * Variable que contiene el formulario de las casas
   */
  formProfesor: FormGroup
  /**
   * Varible que contiene los valores del formulario
   */
   formAdd: FormGroup
  /**
   * Variable donde se alamacenan las casas
   */
  casas: any;
  /**
   * Variable donde se alamacena los personajes registrados
   */
  personajes: any;
  /**
   * Variable donde se alamacena los profesores registrados
   */
  profesores: any;
  /**
   * Variable donde se alamacena los cursos de un profesor
   */
  cursos: any;

  constructor(
    private fb: FormBuilder,
    private serviceColegio: ColegioService,
    //private modelsColegio: ModelsColegio
  ) {
    this.formProfesor = this.fb.group({
      profesor: ""
    }),
    this.formAdd = this.fb.group({
      grado: "",
      salon: "",
      colegio: {
        "id":1,
        "nombre":"Colegio Olimpo"
      }
    })
  }

  /**
   * Función que permite iniciar y cargar las casas
   */
  async ngOnInit() {
    this.cursos = await this.serviceColegio.getCursosColegio().toPromise();
    console.log("profesores**", this.cursos)
  }

  /**
   * Función que permite adicionar un nuevo curso
  */
   async btnAdd(){
    let curso = this.formAdd.value;
    curso = await this.serviceColegio.addCurso(curso).toPromise();
  }

}
