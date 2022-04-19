import { PaginationComponent } from './../../shared/components/pagination/pagination.component';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from './../../core/services/characters.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss'],
})
export class CharactersPageComponent implements OnInit {
  gestionForm!: any;
  public submitted: boolean = false;
  searchCharacter: any = '';
  characters: any;
  actualPage: any;


  constructor(
    private charactersService: CharactersService,
    private formBuilder: FormBuilder
  ) {
    this.gestionForm = this.formBuilder.group({
      name: [''],
    });
  }

  ngOnInit(): void {
    this.paginate(1, this.searchCharacter);

  }

  paginate = (page: number, textSearch: string) => {
    this.charactersService
      .getCharacters(page, textSearch)
      .subscribe((res: any) => {
        this.actualPage = page;
        this.characters = res.results;
      });
  };

  onSearch(): void {
    this.submitted = true;
    if (this.gestionForm.valid) {
      this.searchCharacter = this.gestionForm.get('name').value;
      this.paginate(this.actualPage, this.searchCharacter);
    }
  }
}
