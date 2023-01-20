import { Component } from '@angular/core';
import { AplicacionService } from './services/aplicacion.service';

@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.css']
})
export class AplicacionComponent {

  listado:any = []

  constructor(private aplicacionService: AplicacionService) { }

  ngOnInit(): void {
    this.aplicacionService.getAllPostInterceptor().subscribe({
      next: (res) => {
        this.listado = res.body
      },
      error: (e) => console.error(e),
      complete: () => console.info("Api devolvio todos los titulos")
    })

  }
}
