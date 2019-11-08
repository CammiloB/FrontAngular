import { Component, OnInit, Input } from '@angular/core';
import { SpotiAppService } from '../spotiapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[];

  constructor(private spotify:SpotiAppService, private route:Router) {}

  ngOnInit() {
  }

  eliminarAlbum(i:number){
    this.spotify.deleteAlbums(i).subscribe((data:any) => {
      console.log(data);
      this.route.navigate(['albums']);
    },(errorServicio) => {
      console.log(errorServicio.error.error.message)
    });
  }

}
