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
    if (form.invalid) {
      return;
    }
    this.auth.nuevoUsuario(this.usuario)
      .subscribe(data => {
        console.log(data);
      },
        (err) => {
          console.log(err);

          // if (err.error.error.code == 400) {
          //   alert("usuario existe")
          // }
        })
  }

}
