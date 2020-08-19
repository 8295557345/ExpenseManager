import { Component, OnInit } from '@angular/core';
import { AddTransactionService } from '../add-transaction/add-transaction.service';
@Component({
  selector: 'app-office-transactions',
  templateUrl: './office-transactions.component.html',
  styleUrls: ['./office-transactions.component.css']
})
export class OfficeTransactionsComponent implements OnInit {
  oldData:any;
  OldBalance = 5000;
  constructor(private addService: AddTransactionService) { }

  ngOnInit() {
    this.oldData=this.addService.fetchdata();
    debugger;
    if(this.oldData.transactiontype == 'credit') {
      this.OldBalance+=this.oldData.amount;
     }else{
      this.OldBalance-=this.oldData.amount;
     }
  }

}
