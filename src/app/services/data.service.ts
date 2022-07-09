import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  db:any = {
    1000:{"acno":1000,"username":"Ramshad","password":1000,"balance":10000},
    1001:{"acno":2000,"username":"Ramshad","password":2000,"balance":60000},
    1002:{"acno":3000,"username":"Ramshad","password":3000,"balance":30000},
    1003:{"acno":4000,"username":"Ramshad","password":4000,"balance":50000},

  }

  constructor() { }
 
  login(acno:any,pswd:any)
{
  let db = this.db
  if(acno in db)
  {
    if(pswd == db[acno]["password"]){
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
      password,"balance": 0
  }
  return true
}
}

deposit(acno:any,password:any,amnt:any){
  var amount = parseInt(amnt)
  let db = this.db
  if(acno in db){
    if(password == db[acno]["password"]){
      
      db[acno]["balance"]+=amount
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
}

