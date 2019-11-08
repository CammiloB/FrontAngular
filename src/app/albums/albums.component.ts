import { Component, OnInit } from '@angular/core';
import { SpotiAppService } from '../spotiapp.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
 loading: boolean;

 error: boolean;
 mensajeError: string;
 

  constructor(private spotify: SpotiAppService) {
    this.cargarDatos()
  }

  ngOnInit() {
  }

  cargarDatos(){
    this.spotify.getQuery('albums').subscribe( ( data: any ) => {
        this.albums = data;
        this.loading = false;
        return true;
      }, ( errorServicio ) => {
        this.loading = false; 
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
        console.log(errorServicio.error.error.message);
      });
    return false;
  }

  eliminarAlbum(i:number){
    this.spotify.deleteAlbums(this.albums[i].id).subscribe((data:any) => {
      console.log(data);
      this.cargarDatos();
    },(errorServicio) => {
      console.log(errorServicio.error.error.message)
    });
  }

  

}
