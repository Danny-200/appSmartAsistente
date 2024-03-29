import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../servicios/data.service';
import { sleep } from '../app.module';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage  {

  noPacientes: boolean=true;
  txtResponse: string='';

  datos: any[] = [];

  constructor(private router: Router, private dataService: DataService) {
    this.consultarPaciente();
  }

  async consultarPaciente(){
    this.dataService.getData('http://localhost:8080/assistorweb/listarpacientes').subscribe(response => {
      this.txtResponse = response;
    });
    await sleep(2000); // Espera 1 segundos
    console.log("RESPONSE="+this.txtResponse.trim());
    this.cargarDatos(this.txtResponse.trim());
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

  verPaciente(codigo :number){
    console.log("verPaciente con codigo="+codigo);
  }

  actualizarPaciente(codigo :number){
    console.log("actualizarPaciente con codigo="+codigo);
  }

  borrarPaciente(codigo :number){
    console.log("borrar Paciente con codigo="+codigo);
  }

}
