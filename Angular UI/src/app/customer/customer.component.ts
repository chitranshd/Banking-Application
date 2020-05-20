import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { VALID } from '@angular/forms/src/model';
import { CustomerserviceService } from '../services/customerservice.service';
import { Customer } from '../models/CustInfo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customerForm:FormGroup;
customer:Customer;
submitted=false;
  constructor(private fb:FormBuilder,private toastr:ToastrService,private router:Router,private service:CustomerserviceService) { 
   this.customer=new Customer();
  }

  ngOnInit() {
    this.customerForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required,Validators.pattern('[A-Za-z0-9]{6,10}')]]
    });
  }
  
  get f(){ return this.customerForm.controls;}

  public checkCustomerLogin(){
    this.submitted=true;
    if(this.customerForm.valid){
      this.service.verifyLogin(this.customerForm.controls['username'].value,this.customerForm.controls['password'].value).subscribe(
        (data)=>{this.customer=data;
        if(this.customer!=null){
          this.router.navigate(['custcontain',sessionStorage.getItem('username')]);
          this.toastr.success('Logged In Succesfully!');
          console.log("Login Successful!");
        } 
        else{
          this.toastr.error('Login Failed!');
          this.router.navigate(['customer'])
          console.log("Login Failed!");
          }
        });
      console.log(this.customer);
     
    }
  }
}
