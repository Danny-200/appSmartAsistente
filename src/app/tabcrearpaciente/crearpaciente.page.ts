import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../servicios/data.service';
import { sleep } from '../app.module';

@Component({
  selector: 'app-crearpaciente',
  templateUrl: './crearpaciente.page.html',
  styleUrls: ['./crearpaciente.page.scss'],
})

export class CrearpacientePage {
  msgErrorUsuario: string='Error al crear Horario';
  valor: string="";
  fecStringInicial: string[] = [];
  txtResponse: string='';
  crearHorarioFailed: boolean=false;
  grupoformulario = new FormGroup({
    cedula: new FormControl('', [Validators.required, Validators.minLength(4)]),
    enfermedad: new FormControl('', [Validators.required, Validators.minLength(5)]),
    medicina: new FormControl('', [Validators.required, Validators.minLength(5)]),
    caja: new FormControl('', [Validators.required, Validators.minLength(1)]),
    fechaInicio: new FormControl('', [Validators.required, Validators.minLength(5)]),
    dias: new FormControl('', [Validators.required, Validators.minLength(1)]),
    tiempo: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  constructor(private router: Router, private dataService: DataService) {
    this.txtResponse = '';
    this.crearHorarioFailed = false;
  }

  async registrarDatosPacientes(){
    console.log('registrar DATOS');
    this.valor = this.grupoformulario.controls.fechaInicio.value==null ? "" : this.grupoformulario.controls.fechaInicio.value;
    this.fecStringInicial = this.valor.split('T');
    this.dataService.getData('http://localhost:8080/assistorweb/crearhorario?'
                              +'idPaciente='+this.grupoformulario.controls.cedula.value
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
    await sleep(4000); // Espera 1 segundos
    console.log("Response Crear USUARIO="+this.txtResponse.trim());

    if(this.txtResponse.toLowerCase().trim() === 'OK'.toLowerCase() ){
      this.crearHorarioFailed = false;
      this.siguiente();
    } else {
      this.msgErrorUsuario = this.txtResponse.trim();
      this.crearHorarioFailed = true;
    }
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
    this.router.navigate(['/tabs/tabpacientes']);
  }

}