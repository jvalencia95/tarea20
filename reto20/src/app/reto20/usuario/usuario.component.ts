import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  listado = new Array();
  mostrar:any=false;
  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.mostrar = true;
    this.userService.getUsersAllInterceptor().subscribe({
      next:(response:any)=>{this.listado = response.body;console.log(response)},
      error:(e)=>console.error(e),
      complete:()=>console.info("Api devolvio todos los titulos")
    });
  }

}
