import { Component, OnInit } from '@angular/core';
import { DataService } from '../servicios/data.service';
import { sleep } from '../app.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verpaciente',
  templateUrl: './verpaciente.page.html',
  styleUrls: ['./verpaciente.page.scss'],
})

export class VerpacientePage implements OnInit {
  infoPaciente: string='';
  noPacientes: boolean=true;
  txtResponse: string='';
  datos: any[] = [];
  horarios: any[] = [];

  constructor(private router: Router, private dataService: DataService) {
    this.infoPaciente = this.dataService.parameterCedula + ' ' +this.dataService.parameterNombrePaciente;
    this.consultarPacienteById();
  }

  ngOnInit() {
  }

  async consultarPacienteById(){
    this.dataService.getData('http://localhost:8080/assistorweb/verpaciente?'
                              +'idpaciente='+this.dataService.parameterCedula
                            ).subscribe(response => {
      this.txtResponse = response;
    });
    await sleep(2000); // Espera 1 segundos
    console.log("Response consulta paciente="+this.txtResponse.trim());
    this.cargarDatos(this.txtResponse.trim());
  }

  cargarDatos(texto :string){
    var cargar = false;
    var idPaciente = '';
    let registros = texto.split(';');
    for(var contadorA = 0; contadorA < registros.length; contadorA++) {
      if(registros[contadorA].length>0) {
        let campos = registros[contadorA].split('^');
        if(idPaciente == '' || idPaciente != campos[0]){
          idPaciente = campos[0];
          cargar = true;
        }
        if(cargar){
          cargar = false;
          this.datos.push({ 
            idpacientemedicamento: campos[0],
            comentario: campos[1], 
            medicamento: campos[2], 
            numerocaja: campos[3], 
            numerodias: campos[4], 
            frecuencia: campos[5], 
            fechainicio: campos[6], 
            horainicio: campos[7]
          });
        }
        this.horarios.push({ 
          idpacientemedicamento: campos[0],
          contadordias: campos[8],
          fechaingesta: campos[9],
          horaingesto: campos[10]
        });
      }
    }
  }

}
