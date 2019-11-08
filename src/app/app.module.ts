import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { AuthorsComponent } from './authors/authors.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { CreateLyricComponent } from './create-lyric/create-lyric.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    AlbumsComponent,
    CreateAlbumComponent,
    AuthorsComponent,
    CreateAuthorComponent,
    LyricsComponent,
    CreateLyricComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
