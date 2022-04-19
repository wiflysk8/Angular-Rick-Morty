import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
const routes: Routes = [
  { path: "", pathMatch: "full", component: HomePageComponent},
  {path: "characters", component: CharactersPageComponent},
  {path: "character", redirectTo: "characters"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
