import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AddTransactionService {
  Data:any=[];
  constructor(private router:Router) { }

  saveData(newData){
    this.Data.unshift(newData);
    this.router.navigate(['officeTransactions']);
    console.log(this.Data);
  }

  fetchdata(){
    return this.Data;
  }
}
