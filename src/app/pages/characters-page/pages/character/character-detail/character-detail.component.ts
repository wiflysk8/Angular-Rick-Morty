import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  findCharacter: any;
  character: any;
  constructor(private charactersService: CharactersService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.findCharacter = params.get('idCharacters');

        this.charactersService.getCharactersDetail(this.findCharacter).subscribe((data: any) => {
          this.character = data;
          console.log(this.character)
        })
    });
  }

}
