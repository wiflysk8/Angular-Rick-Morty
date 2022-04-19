import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  #counter: number = 0;

  constructor() { }

  get counter() {
    return this.#counter;
  }

  set counter(newCounter: number){
    this.#counter = newCounter;
  }
}
