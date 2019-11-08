import { Component, OnInit } from '@angular/core';
import { SpotiAppService } from '../spotiapp.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors:any[] = [];

  constructor(private spotify:SpotiAppService) {
    this.cargarDatos();
  }

  ngOnInit() {
  }

  cargarDatos(){
    this.spotify.getAuthors().subscribe((data:any) => {
      this.authors = data;
    },( errorServicio )=>{
      console.log(errorServicio.error.error.message);
    });
  }

  eliminarAutor(i:number){
    this.spotify.deleteAuthors(this.authors[i].id).subscribe((data:any) => {
      console.log(data);
      this.cargarDatos();
    },(errorServicio) => {
      console.log(errorServicio.error.error.message)
    });
  }

}
