import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AddTransactionService {
  Data:any=[];
  LastAvailableBal:any=0;
  constructor(private router:Router) { }

  saveData(newData){
    this.Data.unshift(newData);
    this.router.navigate(['officeTransactions']);
    console.log(this.Data);
  }

  fetchdata(){
    return this.Data;
  }

  setAvailBalance(previousBalance){
    this.LastAvailableBal= previousBalance;
  }
  getAvalbalance(){
    return this.LastAvailableBal;
  }
}
