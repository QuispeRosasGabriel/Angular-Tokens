import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuariomodel } from 'src/app/models/usuariomodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuariomodel = new Usuariomodel();
  constructor() { }

  ngOnInit() {
  }

  login(form?: NgForm) {
    if (form.invalid) {
      return;
    }
    else {
      console.log(this.usuario);
      console.log(form);

    }

  }
}
