
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { CharacterDetailComponent } from './pages/characters-page/pages/character/character-detail/character-detail.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomePageComponent},
  {path: "characters", component: CharactersPageComponent},
  {path: "character", redirectTo: "characters"},
  {path: "characters/:idCharacters", component: CharacterDetailComponent},
  {path: "locations", component: LocationsPageComponent},
  {path: "contact", component: ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
