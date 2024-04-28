import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../servicios/data.service';
import { sleep } from '../app.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  txtResponse: string='';
  banderaValidando: boolean=false;
  logginFailed: boolean=false;

  grupoLoggin = new FormGroup({
    usuario: new FormControl('danny5', [Validators.required, Validators.minLength(4)]),
    clave: new FormControl('dannyx', [Validators.required, Validators.minLength(5)])
  });

  constructor(private router: Router, private dataService: DataService) {
    this.txtResponse = '';
    this.logginFailed = false;
  }

  async validarDatosLoggin(){
    this.banderaValidando=true;
    this.logginFailed = false;
    this.txtResponse = '';
    this.dataService.getData('http://localhost:8080/assistorweb/validarusuario?'
                            +'aliasu='+this.grupoLoggin.controls.usuario.value
                            +'&claveu='+this.grupoLoggin.controls.clave.value
                            ).subscribe(response => {
    this.txtResponse = response;
    });
    await sleep(2000); // Espera 1 segundos
    console.log("RESPONSE="+this.txtResponse.trim());
    this.banderaValidando=false;

    if(this.txtResponse.toLowerCase().trim() === 'Si existe usuario'.toLowerCase() ){
      this.router.navigate(['/tabs']); 
    } else {
      this.logginFailed = true;
    }
  }

  crearUsuario(){
    alert('redireccionar a formulario crear usuario');
  }

  olvideClave(){
    alert('redireccionar a formulario recuperar clave');
  }

}
