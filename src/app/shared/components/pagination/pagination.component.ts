import { CharactersService } from 'src/app/core/services/characters.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() changePageEmmiter = new EventEmitter<number>();

  public actualPage: number = 1;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {

  }
  changePage(newPage: any){
    if(newPage >=1){
      this.changePageEmmiter.emit(newPage);
      this.actualPage = newPage;
    }
  }



 /*  findCharacter(characters: any, actualPage: any){
    this.actualPage = actualPage
    this.charactersService.getCharactersPage(actualPage).subscribe((data: any) => {
      this.characters = data.results;
      console.log("hola", this.characters)
    })
  } */

}

