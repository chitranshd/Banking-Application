import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../services/customerservice.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-show-accounts-admin',
  templateUrl: './show-accounts-admin.component.html',
  styleUrls: ['./show-accounts-admin.component.css']
})
export class ShowAccountsAdminComponent implements OnInit {

  accountNo:string;
  accounts:Account;
  constructor(private service:CustomerserviceService,private route:ActivatedRoute,private toast:ToastrService) { }

  ngOnInit() {
    this.accountNo=this.route.snapshot.params["accountNo"];
    this.service.listAccountByAccountNumber(this.accountNo).subscribe(
      (data)=>{this.accounts=data;
    });
    console.log(this.accounts);
  }

}
