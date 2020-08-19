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
  newDate = new Date();
  constructor(private addService: AddTransactionService,private datePipe: DatePipe) { }

  ngOnInit() {
  }
  onChange(value){
    this.Ttype = value;
  }

  onSave(){
    this.dataObject={
      newDate : this.datePipe.transform(this.newDate, 'yyyy-MM-dd'),
      transactiontype : this.Ttype,
      amount : this.amt,
      description : this.description
    }
    this.addService.saveData(this.dataObject);
  }
}
