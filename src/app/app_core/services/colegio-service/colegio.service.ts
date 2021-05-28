import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceBase } from '../service-base';
import config from '../app-admin/configuracion/config';
import { Observable } from 'rxjs';


/**
 * Servicio que contiene las rutas para acceder a la infomación del Colegio Olimpo
 */
@Injectable()
export class ColegioService extends ServiceBase {
  /**
  * Constructor de ColegioService
  * @param http variable para acceder a HttpClient
  */
  constructor(protected http: HttpClient) {
    super(http);
    this.ApiUrl = [config.ApiUrl].join('/');
  }

  /**
  * Función que contiene la ruta para acceder a la información de los profesores
  * @param ruta Variable que contiene la ruta
  * @returns retorna los profesores
  */
  getProfesores(): Observable<any> {
    const ruta = [this.ApiUrl, 'profesor'].join('/');
    return this.http.get(ruta);
  }

  /**
  * Función que contiene la ruta para acceder a la información de los cursos de cada profesor
  * @param profesor Variable que contiene el profesor seleccionado
  * @returns retorna los cursos del porfesor
  */
  getCursos(profesor): Observable<any> {
    const ruta = [this.ApiUrl, 'profesor', profesor].join('/');
    return this.http.get(ruta);
  }

  /**
  * Función que contiene la ruta para acceder a la información de los cursos de cada profesor
  * @param profesor Variable que contiene el profesor seleccionado
  * @returns retorna los cursos del porfesor
  */
   getEstudiantesCurso(profesor,curso): Observable<any> {
    const ruta = [this.ApiUrl, 'curso', profesor,curso].join('/');
    return this.http.get(ruta);
  }

  /**
  * Función que contiene la ruta para acceder a la información de los cursos de cada profesor
  * @param profesor Variable que contiene el profesor seleccionado
  * @returns retorna los cursos del porfesor
  */
   getCursosColegio(): Observable<any> {
    const ruta = [this.ApiUrl, 'curso'].join('/');
    return this.http.get(ruta);
  }

  /**
  * Función que contiene la ruta para acceder a la información de los cursos de cada profesor
  * @param profesor Variable que contiene el profesor seleccionado
  * @returns retorna los cursos del porfesor
  */
   getAsignaturas(): Observable<any> {
    const ruta = [this.ApiUrl, 'asignaturas'].join('/');
    return this.http.get(ruta);
  }

  /**
  * Función que contiene la ruta para acceder a la información de los cursos de cada profesor
  * @param profesor Variable que contiene el profesor seleccionado
  * @returns retorna los cursos del porfesor
  */
   getEstdudiantes(): Observable<any> {
    const ruta = [this.ApiUrl, 'estudiantes'].join('/');
    return this.http.get(ruta);
  }

  /**
  * Función que contiene la ruta para acceder a la información de los cursos de cada profesor
  * @param profesor Variable que contiene el profesor seleccionado
  * @returns retorna los cursos del porfesor
  */
   addCurso(curso): Observable<any> {
    const ruta = [this.ApiUrl, 'curso'].join('/');
    return this.http.post(ruta,curso);
  } 
  /**
  * Función que contiene la ruta para acceder a la información de los cursos de cada profesor
  * @param profesor Variable que contiene el profesor seleccionado
  * @returns retorna los cursos del porfesor
  */
   addEstudiante(estudiante): Observable<any> {
    const ruta = [this.ApiUrl, 'estudiantes'].join('/');
    return this.http.post(ruta,estudiante);
  }
  /**
  * Función que contiene la ruta para acceder a las noticias
  * @param noticias Variable que contiene la noticia seleccionado
  * @returns retorna las noticias
  */
   getNoticias(): Observable<any> {
    const ruta = [this.ApiUrl, 'noticias'].join('/');
    return this.http.get(ruta);
  }     
  /**
  * Función que contiene la ruta para acceder a los programas
  * @param programas Variable que contiene los programas
  * @returns retorna los programas
  */
   getProgramas(): Observable<any> {
    const ruta = [this.ApiUrl, 'programas'].join('/');
    return this.http.get(ruta);
  } 
  /**
  * Función que contiene la ruta para acceder a la información de los cursos de cada profesor
  * @param registro Variable que contiene el registro seleccionado
  * @returns Ingresa los registros
  */
   addRegistro(registro): Observable<any> {
    const ruta = [this.ApiUrl, 'registro'].join('/');
    return this.http.post(ruta,registro);
  }

}