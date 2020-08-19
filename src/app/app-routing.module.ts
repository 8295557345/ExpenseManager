import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OfficeTransactionsComponent} from './office-transactions/office-transactions.component'
import { AddTransactionComponent } from './add-transaction/add-transaction.component';


const routes: Routes = [
  {path: '', redirectTo: 'officeTransactions', pathMatch: 'full'},
  { path: 'officeTransactions', component: OfficeTransactionsComponent},
  { path: 'addTransaction', component: AddTransactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
