import { Component, OnInit } from '@angular/core';
import { AlbumI } from '../interfaces/album-i';
import { SpotiAppService } from '../spotiapp.service';
import { Router } from '@angular/router';
import { AuthorI } from '../interfaces/author-i';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  name:string;
  image:string;
  date:string;
  album: AlbumI;

  constructor(private spotify:SpotiAppService, private route:Router) { }

  ngOnInit() {
  }

  crearAlbum(){
    this.album = {name:this.name, image:this.image, date:this.date}
    this.spotify.postAlbums(this.album).subscribe((data:any) => {
      console.log(data);
      this.route.navigate(['albums']);
    },(errorServicio) => {
      console.log(errorServicio.error.error.message)
    });
    
  }

}
