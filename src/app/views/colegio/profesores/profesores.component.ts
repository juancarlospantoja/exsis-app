import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColegioService } from '../../../app_core/services/colegio-service/colegio.service';


/**
 * Componente para el modulo de activar libretas.
 */
@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html'
})
export class Profesores implements OnInit {

  /**
   * Variable que contiene el formulario de las casas
   */
  formProfesor: FormGroup
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
  ) {
    this.formProfesor = this.fb.group({
      profesor: ""
    })
  }

  /**
   * Función que permite iniciar y cargar las casas
   */
  async ngOnInit() {
    this.profesores = await this.serviceColegio.getProfesores().toPromise();
  }

  /**
   * Función que carga los pesonajes registrados dependiendo de la casa seleecionada y los ordena
   */
  async selectCasa() {
    try {
      this.cursos = await this.serviceColegio.getCursos(this.formProfesor.value.profesor).toPromise();
      console.log("profesores**", this.cursos)
    } catch (e) {
      console.log("error", e);
      return e;
    }
  }  

}
