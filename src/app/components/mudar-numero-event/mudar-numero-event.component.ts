import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mudar-numero-event',
  templateUrl: './mudar-numero-event.component.html',
  styleUrls: ['./mudar-numero-event.component.scss']
})
export class MudarNumeroEventComponent implements OnInit {
  //Output -> enviar algo para o component pai
  //EventEmitter -> vai emitir o evento

  //!Aqui é o componente filho e vamos enviar algo para o componente pai que é o emitter.component

  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    //Aqui eu apenas faço a lógica para enviar o evento atraves do emitter para o componente pai
    //no componente pai nos fazemos a lógica
    this.changeNumber.emit();
  }

}
