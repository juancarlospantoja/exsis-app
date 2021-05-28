
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColegioService } from '../../../app_core/services/colegio-service/colegio.service';


/**
 * Componente para el modulo de activar libretas.
 */
@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html'
})
export class Asignaturas implements OnInit {

  /**
   * Variable que contiene el formulario de las casas
   */
  formProfesor: FormGroup
  /**
   * Variable donde se alamacena los cursos de un profesor
   */
  cursos: any;
  /**
   * Variable donde se alamacena los cursos de un profesor
   */
  asignaturas: any;

  constructor(
    private fb: FormBuilder,
    private serviceColegio: ColegioService,
  ) {
    this.formProfesor = this.fb.group({
      profesor: ""
    })
  }

  /**
   * Función que permite iniciar y cargar las casas
   */
  async ngOnInit() {
    this.asignaturas = await this.serviceColegio.getAsignaturas().toPromise();
    console.log("asignaturas**", this.asignaturas)
  }

  

}
