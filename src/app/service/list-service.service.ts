import { Injectable } from '@angular/core';
import { Animal } from '../interfaces-models/animals';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = 'http://localhost:3000/animals'

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(this.apiUrl)
  }
}
