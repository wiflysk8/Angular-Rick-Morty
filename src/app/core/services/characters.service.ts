import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(actualPage: number, textSearch: string){
    return this.http.get('https://rickandmortyapi.com/api/character/?page=' + actualPage + '&name=' + textSearch);
    }

    getCharactersDetail(id: string){
      return this.http.get('https://rickandmortyapi.com/api/character/' + id);
    }
}
