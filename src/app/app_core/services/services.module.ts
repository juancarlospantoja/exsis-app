

import { NgModule } from '@angular/core';
import { ColegioService } from './colegio-service/colegio.service';


@NgModule({
  providers: [
    ColegioService,
  ]
})
export class ServicesModule {
  constructor() { }
}
