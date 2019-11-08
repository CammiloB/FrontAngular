import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { AuthorsComponent } from './authors/authors.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { CreateLyricComponent } from './create-lyric/create-lyric.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/create', component: CreateAlbumComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'authors/create', component: CreateAuthorComponent },
  { path: 'songs', component: LyricsComponent },
  { path: 'songs/create', component: CreateLyricComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
