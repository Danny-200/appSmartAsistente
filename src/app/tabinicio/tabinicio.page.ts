import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabinicio',
  templateUrl: './tabinicio.page.html',
  styleUrls: ['./tabinicio.page.scss'],
})
export class TabinicioPage implements OnInit {

  showMessage: boolean = false;
  messageIndex: number = 0;
  messages: string[] = [
    "Bienvedo!",
    "¡Tu satisfacción es nuestro mayor objetivo!",
    "Hola, ¿cómo va el día?"
  ];
  message: string = this.messages[this.messageIndex];

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.showMessage = true;
      this.messageIndex = (this.messageIndex + 1) % this.messages.length;
      this.message = this.messages[this.messageIndex];
      setTimeout(() => {
        this.showMessage = false;
      }, 3000); // Cambia el mensaje cada 10 segundos
    }, 5000);
  }

}
