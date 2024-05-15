import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../servicios/data.service';
import { sleep } from '../app.module';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})

export class PacientesPage  {
  noPacientes: boolean=true;
  txtResponse: string='';
  datos: any[] = [];

  constructor(private router: Router, private dataService: DataService, private navCtrl: NavController) {
  }

  ionViewWillEnter() {
    this.consultarPaciente();
  }

  async consultarPaciente(){
    this.datos = [];
    this.dataService.getData('http://localhost:8080/assistorweb/listarpacientes').subscribe(response => {
      this.txtResponse = response;
    });
    await sleep(2000); // Espera 1 segundos
    console.log("Response lista de usuarios="+this.txtResponse.trim());
    if(this.txtResponse.toLowerCase().trim().length>0){
      this.cargarDatos(this.txtResponse.trim());
      this.noPacientes = false;
    } else {
      this.noPacientes = true;
    }
  }

  cargarDatos(texto :string){
    let registros= texto.split(';');
    for(var contadorA = 0; contadorA < registros.length; contadorA++){
      if(registros[contadorA].length>0){
        let campos = registros[contadorA].split('-');
        this.datos.push({ id: campos[0], nombre: campos[1] });
      }
    }
  }

  verPaciente(paramCedula: number, paramNombre: string){
    console.log("verPaciente con codigo="+paramCedula);
    this.dataService.parameterCedula = paramCedula;
    this.dataService.parameterNombrePaciente = paramNombre;
    this.router.navigate(['/verpaciente']);
  }

  actualizarPaciente(paramCedula :number){
    console.log("actualizarPaciente con codigo="+paramCedula);
  }

  borrarPaciente(paramCedula :number){
    console.log("borrar Paciente con cedula="+paramCedula);
    this.eliminarPaciente(paramCedula);
  }

  async eliminarPaciente(paramCedula :number){
    this.dataService.getData('http://localhost:8080/assistorweb/eliminarpaciente?'
                            +'cedulaP='+paramCedula
                            ).subscribe(response => {
      this.txtResponse = response;
    });
    await sleep(2000); // Espera 1 segundos
    console.log("Response eliminar paciente="+this.txtResponse.trim());
    if(this.txtResponse.toLowerCase().trim().length>0){
      this.consultarPaciente();
    }
  }
}
