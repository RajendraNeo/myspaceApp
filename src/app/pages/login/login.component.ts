import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginObj:any={
    userName: "",
    userPassword: ""
  }
  constructor(private _http:HttpClient, private _router:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    debugger
    this._http.post("/api/Meeting/login", this.loginObj).subscribe((response:any)=>{
      debugger
      if(response.result){
        localStorage.setItem("logInUserData",JSON.stringify(response.data));
        localStorage.setItem("logInUserName",JSON.stringify(response.data.userName));
        if(response.data.role==="SuperAdmin"){
         this._router.navigateByUrl("admin-dashboard");
        }else if(response.data.role==="ClientAdmin"){
          this._router.navigateByUrl("client-dashboard");
        }else if(response.data.role==="ClientUser"){
          this._router.navigateByUrl("user-dashboard");
        }
      }else{
        alert(response.message)
      }
    })
  }
}
