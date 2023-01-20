import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplicacionComponent } from './aplicacion/aplicacion.component';



@NgModule({
  declarations: [
    AplicacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AplicacionComponent
  ]
})
export class PrincipalModule { }
