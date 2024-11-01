import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  funcaoParaoClick(): void {
      // this.show = true;
      this.show = !this.show;
  }

  alerta(): void {
    alert(
      "alerta"
    );
  }

}
