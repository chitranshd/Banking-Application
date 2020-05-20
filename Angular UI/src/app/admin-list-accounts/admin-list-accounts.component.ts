import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../services/customerservice.service';
import { Account } from '../models/account.model';
@Component({
  selector: 'app-admin-list-accounts',
  templateUrl: './admin-list-accounts.component.html',
  styleUrls: ['./admin-list-accounts.component.css']
})
export class AdminListAccountsComponent implements OnInit {
  account:Account[]=[];
  constructor(private service:CustomerserviceService) { }

  ngOnInit() {
    this.service.listAllAccounts().subscribe(res=>{this.account=res;});
  }

}
