import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {VALID} from '@angular/forms/src/model';
import { Router } from '@angular/router';
import { Customer } from '../models/CustInfo';
import { CustomerserviceService } from '../services/customerservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent implements OnInit {
customer:Customer;
 InfoForm:FormGroup;
 submitted=false;
  constructor(private fb:FormBuilder,private router:Router,private service:CustomerserviceService,private toast:ToastrService){
    this.customer=new Customer();
   }

  ngOnInit() {
    this.InfoForm=this.fb.group({
      customerName:['',[Validators.required]],
      emailId:['',[Validators.required,Validators.email]],
      mobileNumber:['',[Validators.required,Validators.pattern('[7-9][0-9]{9}')]],
      address:['',[Validators.required]],
      pancard:['',[Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
      username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      password:['',[Validators.required,Validators.pattern('[A-Za-z0-9]{6,10}')]]
      })
  }


  get f(){ return this.InfoForm.controls;}


  public addCustomer(){ 
  this.submitted=true;
  if(this.InfoForm.valid){
  this.service.saveCustomer(this.InfoForm.value).subscribe();
  this.toast.success('Registration Complete');
  console.log("Done");
  this.router.navigate(['customer']);
  }
}
}
