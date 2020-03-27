import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuariomodel } from 'src/app/models/usuariomodel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuariomodel = new Usuariomodel();
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login(form?: NgForm) {
    if (form.invalid) {
      return
    }
    this.auth.login(this.usuario)
      .subscribe(data => {
        console.log(data);
      },
        err => {
          console.error(err);
        })


  }
}
