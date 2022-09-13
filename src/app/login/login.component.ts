import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //event -function calling and definition

  aim="thank you"
  accno ="Account Number please"
  acno=""
  pswd=""
  loginform = this.fb.group({
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd : ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  //database
 

  // dependency injection : navigat by url function is predefined in the Router class so it is privately accessed by access identifier
  // so now we can access functions in Router.
  // router is the variable name instance of login component- login and dashboard is depended
  constructor(private router:Router, private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  //the type of argument should be defined in the function, if we didn't know about the type of value 
  //then specified it as type any 

  //this key word represents the variables declared in a class

login()
{
  var acno = this.loginform.value.acno
  var pswd = this.loginform.value.pswd

  if(this.loginform.valid){
  const result = this.ds.login(acno,pswd)
  if(result)
  {
      alert("login successfull")
      this.router.navigateByUrl('dashboard')
    }
}
else{
  alert("invalid form")
}
}
//template reference

// login(a:any,p:any)

// {
//   console.log(a);
  
//   var acno = a.value
//   var pswd = p.value
//   let db = this.db
//   if(acno in db)
//   {
//     if(pswd == db[acno]["password"]){
//       alert("login successfull")

//     }
//     else{
//       alert("incorrect password")
//     }
//   }
//   else{
//     alert("user does not exist")
//   }
// }

}
