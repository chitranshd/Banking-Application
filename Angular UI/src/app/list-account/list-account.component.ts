import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../services/customerservice.service';
import { Account } from '../models/account.model';
@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  account:Account[]=[];
  username:string;
  constructor(private service:CustomerserviceService) { }

  ngOnInit() {
    this.username=sessionStorage.getItem('username');
    this.service.listAccountByUsername(this.username).subscribe(res=>{this.account=res;});
  }

}
