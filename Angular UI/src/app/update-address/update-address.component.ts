import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, Form} from '@angular/forms';
import { CustomerserviceService } from '../services/customerservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Customer } from '../models/CustInfo';



@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {
 customer:Customer;
 addressForm:FormGroup;
 submitted=false;
  constructor(private fb:FormBuilder,private service:CustomerserviceService,private toast:ToastrService,private router:Router) {
   this.customer=new Customer();
   }

  ngOnInit() {
   this.addressForm=this.fb.group({
      oldaddress:['',[Validators.required]],
      newaddress:['',[Validators.required]]
    })
  };

  get f(){ return this.addressForm.controls;}

  public update(){
  this.submitted=true;
  if(this.addressForm.valid){
    this.service.updateAddress(this.addressForm.controls['oldaddress'].value,this.addressForm.controls['newaddress'].value).subscribe(
    (data)=>{this.customer=data;
    console.log(this.customer);
    if(this.customer!=null){
      this.router.navigate(['custcontain']);
      this.toast.success('Address Changed SuccessFully!');  
    }
      else{
        this.router.navigate(['update-address']);
        this.toast.error('Please Enter Valid Old Address');
      }
    });
  }
  }

}
