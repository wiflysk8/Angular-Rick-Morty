import { CounterService } from './../../core/services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {

  }

  plusCounter(){
    this.counterService.counter = this.counterService.counter + 1;
    console.log(this.counterService.counter);
  }

}
