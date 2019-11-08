import { Component, OnInit } from '@angular/core';
import { SpotiAppService } from '../spotiapp.service';
import {Router} from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 token: string;
 loading: boolean;
 email:string;
 password:string;

 error: boolean;
 mensajeError: string;

  constructor( private spotify: SpotiAppService, private route:Router ) {}

  ngOnInit() {
  }

  ingresar(){

    if(this.spotify.getToken(this.email, this.password) != undefined){
      this.route.navigate(['albums']);

    }else{
      alert("Error Autenticazión");
    }
    
  }

}
