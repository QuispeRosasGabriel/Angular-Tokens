import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuariomodel } from 'src/app/models/usuariomodel';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuariomodel = new Usuariomodel();
  recordarme = true;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("email")) {
      this.usuario.email = localStorage.getItem("email")
      this.recordarme = true;
    }
  }

  login(form?: NgForm) {
    if (form.invalid) {
      return
    }

    Swal.fire({
      icon: 'info',
      title: 'info',
      text: 'Espere Por favor...'
    })
    Swal.showLoading()

    this.auth.login(this.usuario)
      .subscribe(data => {
        console.log(data);
        Swal.close()
        if (this.recordarme = true) {
          localStorage.setItem("email", this.usuario.email)
        }
        this.router.navigateByUrl('/home')
      },
        err => {
          console.error(err);
          Swal.fire({
            icon: 'error',
            title: 'error',
            text: 'Uno de los datos ingresados es incorrecto...'
          })
        })


  }
}
