import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlayout',
  templateUrl: './userlayout.component.html',
  styleUrls: ['./userlayout.component.scss']
})
export class UserlayoutComponent implements OnInit {

  userName:string='';
  constructor(private _router:Router) {
    const uName=localStorage.getItem("logInUserName");
    console.log("uNmae",uName)
    if(uName !==null){
      this.userName=JSON.parse(uName);
    }
  }
  ngOnInit(): void {
  }

  onLogout(){
    this._router.navigateByUrl("");
  }
}
