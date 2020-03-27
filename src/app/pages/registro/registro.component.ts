import { Component, OnInit } from '@angular/core';
import { Usuariomodel } from 'src/app/models/usuariomodel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuariomodel = new Usuariomodel();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form?: NgForm) {
    if (form.invalid) {
      return;
    } else {
      console.log("formulario enviado");
      console.log(this.usuario);
      console.log(form);
    }


  }
}
