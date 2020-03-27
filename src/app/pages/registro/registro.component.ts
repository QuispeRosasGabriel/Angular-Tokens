import { Component, OnInit } from '@angular/core';
import { Usuariomodel } from 'src/app/models/usuariomodel';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuariomodel = new Usuariomodel();
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form?: NgForm) {
    this.auth.nuevoUsuario(this.usuario)
      .subscribe(data => {
        console.log(data);
      },
        (err) => {
          if (err.error.error.code == 400) {
            alert("usuario existe")
          }
        })


  }
}
