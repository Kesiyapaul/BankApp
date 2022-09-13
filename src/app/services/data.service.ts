import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
currentuser:any
currentacno:any

  db:any = {
    1000:{"acno":1000,"username":"Ramshad","password":1000,"balance":10000,transaction:[]},
    1001:{"acno":2000,"username":"Ram","password":2000,"balance":60000,transaction:[]},
    1002:{"acno":3000,"username":"Ramshu","password":3000,"balance":30000,transaction:[]},
    1003:{"acno":4000,"username":"ponnu","password":4000,"balance":50000,transaction:[]},

  }

  constructor() { 
    this.getDetails()
  }
  //get details from the local storage
  getDetails(){
    if(localStorage.getItem("database")){
      this.db =JSON.parse(localStorage.getItem("database")||' ')
    }
    if(localStorage.getItem("currentuser")){
      this.currentuser =JSON.parse(localStorage.getItem("currentuser")||' ')
    }
    if(localStorage.getItem("currentacno")){
      this.currentacno =JSON.parse(localStorage.getItem("currentacno")||' ')
    }
  }

  //database and current user type is any so it should be converted to string by using json
  saveDetails(){
    if(this.db){
      localStorage.setItem("database",JSON.stringify(this.db))
    }
    if(this.currentuser){
      localStorage.setItem("currentuser",JSON.stringify(this.currentuser))
    }
    if(this.currentacno){
      localStorage.setItem("currentacno",JSON.stringify(this.currentacno))
    }
  }
 
  login(acno:any,pswd:any)
{
  let db = this.db
  if(acno in db)
  {
    if(pswd == db[acno]["password"]){
      //displaying the user name
     this.currentuser = db[acno]["username"]
     this.currentacno = acno
      this.saveDetails()
      return true

    }
    else{
      alert("incorrect password")
      return false
    }
  }
  else{
    alert("user does not exist")
    return false
  }
}
//register
register(username:any,acno:any,password:any)
{ 
  let db = this.db
  //already existing user
  if(acno in db){
    return false
  }
  //insert in db
  else{
    db[acno]={acno,
      username,
      password,
      balance: 0,
      transaction:[]
  }
  this.saveDetails()
  return true
}
}

deposit(acno:any,password:any,amnt:any){
  var amount = parseInt(amnt)
  let db = this.db
  if(acno in db){
    if(password == db[acno]["password"]){
      
      db[acno]["balance"]+=amount
      db[acno].transaction.push({
        type:"CREDIT",
        amount:amount
      })
      this.saveDetails()
      return  db[acno]["balance"]
    }
    else{
      alert("incorrect password")
    }
  }
  else{
    alert("user doesnot exist....")
    return false
  }
}
withdraw(acno:any,password:any,amnt:any){
  var amount = parseInt(amnt)
  let db = this.db
  if(acno in db){
    
    if(password == db[acno]["password"]){
      
    if( db[acno]["balance"]>amount){
       
      db[acno]["balance"]-=amount
      db[acno].transaction.push({
        type:"DEBIT",
        amount:amount
      })
      this.saveDetails()
      return db[acno]["balance"]
    }

    else{
      alert("insufficient balance")
    }
  }
  else{
    alert("incorrect password....")
    return false
  }
}
  else{
    alert("user does not exist....")
    return false
  }
}
getTransaction(acno:any){
 return this.db[acno].transaction;
  }
}

