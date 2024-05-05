import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../servicios/data.service';
import { sleep } from '../app.module';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.page.html',
  styleUrls: ['./crearusuario.page.scss'],
})

export class CrearusuarioPage implements OnInit {
  msgErrorUsuario: string='Error al crear Usuario';
  txtResponse: string='';
  crearUsuarioFailed: boolean = false;
  grupoformulario = new FormGroup({
    cedulaU: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    nombreU: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellidoU: new FormControl('', [Validators.required, Validators.minLength(3)]),
    aliasU: new FormControl('', [Validators.required, Validators.minLength(5)]),
    claveU: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(private router: Router, private dataService: DataService) {
    this.txtResponse = '';
  }
  
  async crearUsuario() {
   this.dataService.getData('http://localhost:8080/assistorweb/ingresousuario?'
      + 'cedulaU=' + this.grupoformulario.controls.cedulaU.value
      + '&nombreU=' + this.grupoformulario.controls.nombreU.value
      + '&apellidoU=' + this.grupoformulario.controls.apellidoU.value
      + '&aliasU=' + this.grupoformulario.controls.aliasU.value
      + '&claveU=' + this.grupoformulario.controls.claveU.value
    ).subscribe(response => {
      this.txtResponse = response;
    });
    await sleep(4000); // Espera 1 segundos
    console.log("Response Crear USUARIO="+this.txtResponse.trim());

    if(this.txtResponse.toLowerCase().trim() === 'OK'.toLowerCase() ){
      this.crearUsuarioFailed = false;
      this.siguiente();
    } else {
      this.msgErrorUsuario = this.txtResponse.trim();
      this.crearUsuarioFailed = true;
    }
  }

  siguiente() {
    this.router.navigate(['/home']); 
  }

  ngOnInit() {
  }

}
