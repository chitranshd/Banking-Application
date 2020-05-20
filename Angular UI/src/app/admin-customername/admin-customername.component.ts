import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../services/customerservice.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-admin-customername',
  templateUrl: './admin-customername.component.html',
  styleUrls: ['./admin-customername.component.css']
})
export class AdminCustomernameComponent implements OnInit {
   customerName:string;
   account:Account[]=[];
  constructor(private service:CustomerserviceService,private route:ActivatedRoute,private toast:ToastrService) { }

  ngOnInit() {
    this.customerName=this.route.snapshot.params["username"];
    this.service.listAccountByCustomername(this.customerName).subscribe(
      (data)=>{this.account=data;
    });
  }

}
