import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { AlbumI } from './interfaces/album-i';
import { AuthorI } from './interfaces/author-i';
import { LyricI } from './interfaces/lyric-i';

@Injectable({
  providedIn: 'root'
})
export class SpotiAppService {

  token:any;
  error: boolean;
 loogeado: boolean;
 mensajeError: string;

  constructor(private http: HttpClient) { }

  getQuery( query: string ) {
    if(this.token){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': this.token.token
      });
      const url = `http://localhost:3000/${ query }`;
      return this.http.get( url, { headers } );
    }

    
  }

  postLogin( query:string, email:string, password:string ){
    const params = new HttpParams();
    const url = `http://localhost:3000/${ query }?email=${ email }&password=${ password }`;
    return this.http.post( url, {params});
  }

  getAlbums(){
    return this.getQuery('albums');
  }

  getToken(email:string, password:string){
    this.postLogin('auth/login', email, password).subscribe( (data:any)=>{
      this.token = data;
    }, ( errorServicio ) => {
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
      console.log(errorServicio.error.error.message);
    });;
    return this.token;
  }

  postAlbums(album:AlbumI){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.token.token
    });
    const url = 'http://localhost:3000/albums';
    return this.http.post(url, album, {headers});
  }

  deleteAlbums(index:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.token.token
    });
    const url = `http://localhost:3000/albums/${ index }`;
    return this.http.delete(url, {headers});
  }

  getAuthors(){
    return this.getQuery('authors');
  }

  postAuthor(author:AuthorI){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.token.token
    });
    const url = 'http://localhost:3000/authors';
    return this.http.post(url, author, {headers});
  }

  deleteAuthors(index:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.token.token
    });
    const url = `http://localhost:3000/authors/${ index }`;
    return this.http.delete(url, {headers});
  }

  getLyrics(){
    return this.getQuery('lyrics');
  }

  postLyric(lyric:LyricI){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.token.token
    });
    const url = 'http://localhost:3000/lyrics';
    return this.http.post(url, lyric, {headers});
  }

  deleteLyrics(index:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.token.token
    });
    const url = `http://localhost:3000/lyrics/${ index }`;
    return this.http.delete(url, {headers});
  }
  
}

