import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ListComponent } from './shared/components/list/list.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { CharacterDetailComponent } from './pages/characters-page/pages/character/character-detail/character-detail.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    GalleryComponent,
    ContactPageComponent,
    LocationsPageComponent,
    CharacterDetailComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
