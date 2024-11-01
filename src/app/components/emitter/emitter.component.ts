import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {

  myNumber: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  onChangeNumber() {
    //Eu escrevo minha logica no componente pai, o componente filho só vai comunicar que ouve um evento com o EventEmitter
    this.myNumber = Math.floor(Math.random() * 10);
  }

}
