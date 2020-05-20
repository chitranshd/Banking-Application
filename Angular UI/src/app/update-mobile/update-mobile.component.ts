import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerserviceService } from '../services/customerservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Customer } from '../models/CustInfo';

@Component({
  selector: 'app-update-mobile',
  templateUrl: './update-mobile.component.html',
  styleUrls: ['./update-mobile.component.css']
})
export class UpdateMobileComponent implements OnInit {
  customer:Customer;
  mobileForm:FormGroup;
  submitted=false;
   constructor(private fb:FormBuilder,private service:CustomerserviceService,private toast:ToastrService,private router:Router) {
    this.customer=new Customer();
    }
 
   ngOnInit() {
    this.mobileForm=this.fb.group({
       oldmobile:['',[Validators.required,Validators.pattern('[7-9][0-9]{9}')]],
       newmobile:['',[Validators.required,Validators.pattern('[7-9][0-9]{9}')]]
     })
   }
 
   get f(){ return this.mobileForm.controls;}
 
   public update(){
   this.submitted=true;
   if(this.mobileForm.valid){
     this.service.updateMobile(this.mobileForm.controls['oldmobile'].value,this.mobileForm.controls['newmobile'].value).subscribe(
      (data)=>{this.customer=data;
      if(this.customer!=null){
        this.router.navigate(['custcontain']);
        this.toast.success('Mobile Number Changed SuccessFully!');  
      }
        else{
          this.router.navigate(['update-mobile']);
          this.toast.error('Please Enter Valid Old Mobile Number');
        }
        });

    
   }
  }
}
