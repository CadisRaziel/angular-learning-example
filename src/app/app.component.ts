import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string = 'Variavel vindo do app.Components global para o component filho';
  userData = {
    compartilhar: "Compartilhando objetos",
    entreComponents: "Feito dessa maneira"
  }

  title = 'projeto-versao13';
}
