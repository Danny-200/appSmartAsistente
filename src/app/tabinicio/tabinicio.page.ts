import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../servicios/data.service';
import { sleep } from '../app.module';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabinicio',
  templateUrl: './tabinicio.page.html',
  styleUrls: ['./tabinicio.page.scss'],
})
export class TabinicioPage implements OnInit {

  msgErrorUsuario: string='Error al crear Usuario';
  txtResponse: string='';
  crearUsuarioFailed: boolean = false;

  cedula: string='';
  
  grupoformulario = new FormGroup({
    cedulaP: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    nombreP: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellidoP: new FormControl('', [Validators.required, Validators.minLength(3)]),
    edadP: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
    generoP: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private dataService: DataService, private control: NavController) { }

  async crearPaciente() {
    this.dataService.getData('http://localhost:8080/assistorweb/crearpacientes?'
       + 'cedulaP=' + this.grupoformulario.controls.cedulaP.value
       + '&nombreP=' + this.grupoformulario.controls.nombreP.value
       + '&apellidoP=' + this.grupoformulario.controls.apellidoP.value
       + '&edadP=' + this.grupoformulario.controls.edadP.value
       + '&generoP=' + this.grupoformulario.controls.generoP.value
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
    this.router.navigate(['tabs/tabcrearpaciente']); 
  }


   ngOnInit() {
  }
}
