import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    UsuarioComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],exports:[
    UsuarioComponent,
    MenuComponent
  ]
})
export class Reto20Module { }
