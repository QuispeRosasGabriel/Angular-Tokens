import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuariomodel } from '../models/usuariomodel';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "https://identitytoolkit.googleapis.com/v1/";
  private API_KEY = "AIzaSyADw7EA6hLUs291pZu_ejv0A2w_Krz4_8o";
  userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }
  //crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  logout() {
    localStorage.removeItem("token")
  }

  login(usuario: Usuariomodel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post(`${this.url}accounts:signInWithPassword?key=${this.API_KEY}`, authData)
      .pipe(map(resp => {
        console.log("Entro al rxjs para login");
        this.guardarToken(resp['idToken']);
        return resp;
      }))
  }

  nuevoUsuario(usuario: Usuariomodel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post(`${this.url}accounts:signUp?key=${this.API_KEY}`, authData)
      .pipe(map(resp => {
        console.log("Entro al rxjs");
        this.guardarToken(resp['idToken']);
        return resp;
      }))
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem("token", this.userToken)

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem("expira", hoy.getTime().toString())

  }

  private leerToken() {
    let clave = localStorage.getItem("token")
    if (clave) {
      this.userToken = clave
    } else {
      this.userToken = ""
    }
    return this.userToken;
  }

  estaAutenticado(): boolean {
    if (this.userToken.length < 2) {
      return false
    }

    const expira = Number(localStorage.getItem("expira"))
    const expiraDate = new Date();
    expiraDate.setTime(expira)

    if (expiraDate > new Date()) {
      return true
    } else {
      return false
    }
  }

}
