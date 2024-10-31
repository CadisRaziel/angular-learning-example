import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-filho',
  templateUrl: './component-filho.component.html',
  styleUrls: ['./component-filho.component.scss']
})
export class ComponentFilhoComponent implements OnInit {

  //Para receber o dado de um component eu utilizo o input
  @Input() nameComponentFilho: string = "";
  @Input() userDataComponentFilho!: {compartilhar: string, entreComponents: string}; // a notacao ! indica que ele nao sera nulo e com isso eu inicializo a variavel

  constructor() { }

  ngOnInit(): void {
  }

}
