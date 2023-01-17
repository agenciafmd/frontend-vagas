import { Injectable } from '@angular/core';
import { Heroes } from '../heroes.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  baseUrl = 'https://akabab.github.io/starwars-api/api/all.json';

  constructor(private api: HttpClient) {

  }

  getHeroes(): Observable<Heroes[]> {
    console.log('getHeroes()');
    return this.api.get<Heroes[]>(this.baseUrl)
  }
}
