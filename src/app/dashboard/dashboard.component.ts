import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno=""
  pswd=""
  amount =""
depositform = this.fb.group({
  acno :['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd :['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
withdrawform = this.fb.group({
  acno :['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd :['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
  dacno= ""
  user:any
  ldate: any
  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    //fetching the  name of user from dataservice class
    //should be executed at first of the class so it is defined in the constructor
    this.user=this.ds.currentuser
    this.ldate = new Date()
   }

  ngOnInit(): void {
    if(!localStorage.getItem("currentacno")){
      alert("please log in...")
      this.router.navigateByUrl("")
    }
  }

  deposit(){
    var acno= this.depositform.value.acno
    var pswd= this.depositform.value.pswd
    var amount=this.depositform.value.amount
   
   if(this.depositform.valid){

    const result = this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(amount+"deposited successfully and new balance is:"+result )
    }
  }
   else{
    alert ("invalid form")
   }
  }
  withdraw(){
    var acno= this.withdrawform.value.acno
    var pswd= this.withdrawform.value.pswd
    var amount=this.withdrawform.value.amount
    if(this.withdrawform.valid){

    const result = this.ds.withdraw(acno,pswd,amount)
    if(result){
      alert(amount+"debited successfully and new balance is:"+result )
    }
    }
   else{
   alert("invalid form")
   }
   }
   logout(){
      localStorage.removeItem("currentuser")
      localStorage.removeItem("currentacno")
      this.router.navigateByUrl("")
   }
   deleteaccount(){
    this.dacno = JSON.parse(localStorage.getItem("currentacno")||'')
   }
   cancel()
   {
    this.dacno=""
   }

  }

