import { Injectable } from '@angular/core';
import { Animal } from '../interfaces-models/animals';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor() { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }
}
