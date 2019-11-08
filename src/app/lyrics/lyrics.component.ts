import { Component, OnInit } from '@angular/core';
import { SpotiAppService } from '../spotiapp.service';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {

  lyrics:any[] = [];

  constructor(private spotify:SpotiAppService) {
    this.cargarDatos();
    console.log(this.lyrics);
   }

  ngOnInit() {
  }

  cargarDatos(){
    this.spotify.getLyrics().subscribe( ( data: any ) => {
        this.lyrics = data;
        console.log(data);
      }, ( errorServicio ) => {
        console.log(errorServicio.error.error.message);
      });
  }

}
