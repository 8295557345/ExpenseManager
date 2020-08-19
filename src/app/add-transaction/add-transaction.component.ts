import { Component, OnInit } from '@angular/core';
import { AddTransactionService } from './add-transaction.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  Ttype : any = 'credit';
  amt : any;
  description : any;
  dataObject;
  availbalance = 5000;
  latestBalance:any;
  newDate = new Date();
  constructor(private addService: AddTransactionService,private datePipe: DatePipe) { }

  ngOnInit() {
  }
  onChange(value){
    this.Ttype = value;
  }

  onSave(){
    this.latestBalance =this.addService.getAvalbalance();
    if(this.latestBalance!=''){
      this.availbalance = this.latestBalance;
    }
    if(this.Ttype == 'credit'){
      this.availbalance=this.availbalance+this.amt;
    }else {
      this.availbalance=this.availbalance-this.amt;
    }
    this.addService.setAvailBalance(this.availbalance);
    this.dataObject={
      newDate : this.datePipe.transform(this.newDate, 'yyyy-MM-dd'),
      transactiontype : this.Ttype,
      amount : this.amt,
      description : this.description,
      availableBalance : this.availbalance
    }
    this.addService.saveData(this.dataObject);
  }
}
