import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicionais',
  templateUrl: './condicionais.component.html',
  styleUrls: ['./condicionais.component.scss']
})
export class CondicionaisComponent implements OnInit {

  canShow: boolean = true;
  name: string = 'vitu'

  constructor() { }

  ngOnInit(): void {
  }

}
