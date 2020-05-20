import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../services/customerservice.service';
import { Account } from '../models/account.model';
@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {
account:Account[]=[];
  constructor(private service:CustomerserviceService) { }

  ngOnInit() {
   this.service.listAllAccounts().subscribe(res=>{this.account=res;});
  }

}
