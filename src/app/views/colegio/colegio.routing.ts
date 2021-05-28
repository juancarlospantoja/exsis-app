import { Profesores } from './profesores/profesores.component';
import { Cursos } from './cursos/cursos.component';
import { Asignaturas } from './asignaturas/asignaturas.component';
import { Estudiantes } from './estudiantes/estudiantes.component';
import { Home } from './home/home.component';
import { Registro } from './registro/registro.component';
import { Noticia } from './noticias/noticia.component';




import { Routes } from '@angular/router';

export const ViewsRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Colegio'
    },
    children: [

      {
        path: 'profesores',
        component: Profesores,
        data: {
          title: 'Profesores'
        }
      },
      
      {
        path: 'cursos',
        component: Cursos,
        data: {
          title: 'cursos'
        }
      },
      {
        path: 'asignaturas',
        component: Asignaturas,
        data: {
          title: 'asignaturas'
        }
      },
      {
        path: 'estudiantes',
        component: Estudiantes,
        data: {
          title: 'estudiantes'
        }
      }, 
      {
        path: 'home',
        component: Home,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'registro',
        component: Registro,
        data: {
          title: 'Registro'
        }
      },
      {
        path: 'noticias',
        component: Noticia,
        data: {
          title: 'Noticias'
        }
      },

    ]
  }
];
