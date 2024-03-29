import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  grupoLoggin = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.minLength(4)]),
    clave: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private router: Router) {
  }

  validarDatosLoggin(){
    alert("usuario ingresado es="+this.grupoLoggin.controls.usuario.value);
    alert("clave ingresado es="+this.grupoLoggin.controls.clave.value);
  }

  crearUsuario(){
    alert('redireccionar a formulario crear usuario');
  }

  olvideClave(){
    alert('redireccionar a formulario recuperar clave');
  }

}
