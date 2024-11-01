import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-operator',
  templateUrl: './pipe-operator.component.html',
  styleUrls: ['./pipe-operator.component.scss']
})
export class PipeOperatorComponent implements OnInit {
  someText = "Testando pipeOperator";
  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
