import { Component, OnInit } from '@angular/core';
import { SpotiAppService } from '../spotiapp.service';
import { LyricI } from '../interfaces/lyric-i';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-lyric',
  templateUrl: './create-lyric.component.html',
  styleUrls: ['./create-lyric.component.css']
})
export class CreateLyricComponent implements OnInit {

  album_id:string;
  name:string;
  image:string;
  date:string;
  autor_id:string;
  lyric:LyricI;

  constructor(private spotify:SpotiAppService, private route:Router) { }

  ngOnInit() {
  }

  crearAlbum(){
    this.lyric = {album_id: parseInt(this.album_id), name: this.name, image: this.image, date: this.date, author_id: parseInt(this.autor_id)}
    this.spotify.postLyric(this.lyric).subscribe((data:any) => {
      console.log(data);
      this.route.navigate(['songs']);
    },(errorServicio) => {
      console.log(errorServicio.error.error.message)
    }); 
  }

}
