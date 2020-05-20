import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../services/customerservice.service';
import { ActivatedRoute } from '@angular/router';
import { FundTransfer } from '../models/transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  accountNo:string;
  fundTransfer:FundTransfer[];
  constructor(private service:CustomerserviceService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.accountNo=this.router.snapshot.params["accountNo"];
    this.service.transactionsByAccountNumber(this.accountNo).subscribe(res=>{this.fundTransfer=res;});
  }

}
