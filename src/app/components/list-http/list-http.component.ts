import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces-models/animals';
import { ListServiceService } from 'src/app/service/list-service.service';

@Component({
  selector: 'app-list-http',
  templateUrl: './list-http.component.html',
  styleUrls: ['./list-http.component.scss']
})
export class ListHttpComponent implements OnInit {

  constructor(private listService: ListServiceService) {
    this.getAnimals();
   }

  ngOnInit(): void {
  }

  animals: Animal[] = [];

  getAnimals() : void {
    //Quando na funcao do getAll no service tem o 'Observable' eu nao posso fazer isso abaixo
    //this.animals = this.listService.getAll();
    //O que eu preciso fazer e chamar o 'subscribe' pois é um evento observavel(para que ele seja concretizado)
    //Com esse subscribe eu populo o meu array 'animals: Animal[] = [];'
    this.listService.getAll().subscribe((animalsSub) => (this.animals = animalsSub))
  }

}
