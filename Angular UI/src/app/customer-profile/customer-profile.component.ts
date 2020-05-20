import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../services/customerservice.service';
import { Customer } from '../models/CustInfo';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  customer:Customer;
  constructor(private service:CustomerserviceService) { }

  ngOnInit() {
    this.service.getcustomerByUsername(sessionStorage.getItem('username')).subscribe((data)=>{this.customer=data;});
  }

}
