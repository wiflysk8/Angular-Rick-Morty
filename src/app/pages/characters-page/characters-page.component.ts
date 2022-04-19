import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/core/services/counter.service';
@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {

  }

  plusCounter(){
    this.counterService.counter = this.counterService.counter + 1;
    console.log(this.counterService.counter);
  }

}
