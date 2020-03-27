import { Component, OnInit } from '@angular/core';
import { Usuariomodel } from 'src/app/models/usuariomodel';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuariomodel
  constructor() { }

  ngOnInit() {
    this.usuario = new Usuariomodel();
    this.usuario.email = "gabrielomarquisperosas@gmail.com"
  }

  onSubmit() {
    console.log("formulario enviado");
    console.log(this.usuario);

  }
}
