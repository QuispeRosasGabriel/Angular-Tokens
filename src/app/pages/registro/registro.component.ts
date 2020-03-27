import { Component, OnInit } from '@angular/core';
import { Usuariomodel } from 'src/app/models/usuariomodel';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuariomodel = new Usuariomodel();
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form?: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      icon: 'info',
      title: 'info',
      text: 'Espere Por favor...'
    })
    Swal.showLoading()

    this.auth.nuevoUsuario(this.usuario)
      .subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/home')

      },
        (err) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'error',
            text: 'Uno de los datos ingresados es incorrecto...'
          })
        })
  }

}
