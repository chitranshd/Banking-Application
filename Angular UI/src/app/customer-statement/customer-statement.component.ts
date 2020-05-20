import { Component, OnInit } from '@angular/core';
import { FundTransfer } from '../models/transaction.model';
import { CustomerserviceService } from '../services/customerservice.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-statement',
  templateUrl: './customer-statement.component.html',
  styleUrls: ['./customer-statement.component.css']
})
export class CustomerStatementComponent implements OnInit {
  accountNo:string;
  fundTransfer:FundTransfer[];
  constructor(private service:CustomerserviceService,private router:ActivatedRoute,private toast:ToastrService) { }

  ngOnInit() {
    this.accountNo=this.router.snapshot.params["accountNo"];
    this.service.transactionsByAccountNumber(this.accountNo).subscribe(res=>{this.fundTransfer=res;
    });
  }

}
