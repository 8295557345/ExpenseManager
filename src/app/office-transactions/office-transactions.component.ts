import { Component, OnInit } from '@angular/core';
import { AddTransactionService } from '../add-transaction/add-transaction.service';
@Component({
  selector: 'app-office-transactions',
  templateUrl: './office-transactions.component.html',
  styleUrls: ['./office-transactions.component.css']
})
export class OfficeTransactionsComponent implements OnInit {
  oldData:any=[];
  flag=true;
  constructor(private addService: AddTransactionService) { }

  ngOnInit() {
    this.oldData=this.addService.fetchdata()
  }

}
