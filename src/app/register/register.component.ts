import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acno=""
  pswd=""
//creating form group based on the imported class form builder
// should create as an array
registerform = this.fb.group({

acno :['',[Validators.required,Validators.pattern('[0-9]*')]],
pswd : ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
uname :['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
  
})
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
register(){
  //new registered user is login by using the registered acno and pswd , validated
  console.log(this.registerform.value.uname);
  
  var uname = this.registerform.value.uname
  var acno = this.registerform.value.acno
  var pswd = this.registerform.value.pswd
  

  if(this.registerform.valid){
    const result =  this.ds.register(uname,acno,pswd)
    if(result){
      alert("successfully registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("Already a user....please log in")
    }
    }
    else{
      alert("invalid form...")
    }

  }


}




