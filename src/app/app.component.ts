import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import {Users} from './Users'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular_json';

  constructor(private rs : RestService){}

  columns =["User id","Email", "First Name","Last Name","Gender"];

  index=["id","email","first_name","last_name","avatar"];

  users: Users[]=[];

  ngOnInit() : void{
    this.rs.getUsers().subscribe
    (
      (response)=>
      {
        this.users=response;
      },
      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }


}
