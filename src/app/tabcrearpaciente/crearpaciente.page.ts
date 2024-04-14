import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-crearpaciente',
  templateUrl: './crearpaciente.page.html',
  styleUrls: ['./crearpaciente.page.scss'],
})

export class CrearpacientePage {
  valor: string="";
  fecStringInicial: string[] = [];
  txtResponse: string='';
  logginFailed: boolean=false;
  grupoformulario = new FormGroup({
    nombre: new FormControl('nombre', [Validators.required, Validators.minLength(4)]),
    enfermedad: new FormControl('enfermedad', [Validators.required, Validators.minLength(5)]),
    medicina: new FormControl('medicina', [Validators.required, Validators.minLength(5)]),
    caja: new FormControl('caja', [Validators.required, Validators.minLength(1)]),
    fechaInicio: new FormControl('fechaInicio', [Validators.required, Validators.minLength(5)]),
    dias: new FormControl('dias', [Validators.required, Validators.minLength(1)]),
    tiempo: new FormControl('tiempo', [Validators.required, Validators.minLength(1)])
  });

  constructor(private router: Router, private dataService: DataService) {
    this.txtResponse = '';
    this.logginFailed = false;
  }

  async registrarDatosPacientes(){
    console.log('registrar DATOS');
    console.log(this.grupoformulario.controls.nombre.value);
    console.log(this.grupoformulario.controls.enfermedad.value);
    console.log(this.grupoformulario.controls.medicina.value);
    console.log(this.grupoformulario.controls.caja.value);
    console.log(this.grupoformulario.controls.fechaInicio.value);
    console.log(this.grupoformulario.controls.dias.value);
    console.log(this.grupoformulario.controls.tiempo.value);
    this.valor = this.grupoformulario.controls.fechaInicio.value==null ? "" : this.grupoformulario.controls.fechaInicio.value;
    this.fecStringInicial = this.valor.split('T');
    console.log('---fecha:'+this.fecStringInicial[0]);
    console.log('---hora:'+this.fecStringInicial[1]);
    this.dataService.getData('http://localhost:8080/assistorweb/crearpacientes?'
                              +'idPaciente=1'
                              +'&medicamentop='+this.grupoformulario.controls.medicina.value
                              +'&comentariop='+this.grupoformulario.controls.enfermedad.value
                              +'&numerocajap='+this.grupoformulario.controls.caja.value
                              +'&cantidadp=1'
                              +'&frecuenciap='+this.grupoformulario.controls.tiempo.value
                              +'&numerodiasp='+this.grupoformulario.controls.dias.value
                              +'&fechainiciop='+this.fecStringInicial[0]
                              +'&horainiciop='+this.fecStringInicial[1]
                            ).subscribe(response => {
      this.txtResponse = response;
    });
    console.log("RESPONSE="+this.txtResponse.trim());
    this.siguiente();
  }
/*
  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
*/
  siguiente(){
    this.router.navigate(['/tabs/tabinicio']);
  }

}