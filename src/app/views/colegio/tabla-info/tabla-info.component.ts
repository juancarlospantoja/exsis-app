import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Component, OnInit, Output, TemplateRef, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColegioService } from '../../../app_core/services/colegio-service/colegio.service';

/**
 * Componente para la gestión de estudiantes.
 */
@Component({
  selector: 'app-tabla-info',
  templateUrl: './tabla-info.component.html',
  styleUrls: ['./tabla-info.component.scss']
})
export class TablaInfo{
  estudianteCurso: any;
  public infoCurso: any;
  constructor(
    private fb: FormBuilder,
    private serviceColegio: ColegioService,
    private serviceModal: BsModalService,
  ) {
    this.infoCurso = {};
  }
  
  /**
   * Función que importa la información de un método seleccionado y cargarlo en la tabla
   */
  @Input() infoPer: any;

  async getEstudiantesCurso(curso) {
    this.infoCurso = curso;
    console.log("localhos***this.infoCurso",this.infoCurso )
    this.estudianteCurso = await this.serviceColegio.getEstudiantesCurso(this.infoCurso.ID_PROFESOR,this.infoCurso.ID_ASIGNATURA).toPromise();
    console.log("localhos***getEstuantesCurso",this.estudianteCurso)
  }

}
