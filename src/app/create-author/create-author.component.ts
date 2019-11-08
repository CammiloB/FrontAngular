import { Component, OnInit } from '@angular/core';
import { SpotiAppService } from '../spotiapp.service';
import { Router } from '@angular/router';
import { AuthorI } from '../interfaces/author-i';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {

  name:string;
  author:AuthorI;

  constructor(private spotify:SpotiAppService, private route:Router) { }

  ngOnInit() {
  }

  crearAlbum(){
    this.author = {name:this.name}
    this.spotify.postAuthor(this.author).subscribe((data:any) => {
      console.log(data);
      this.route.navigate(['authors']);
    },(errorServicio) => {
      console.log(errorServicio.error.error.message)
    }); 
  }



}
