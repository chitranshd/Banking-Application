import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerserviceService } from '../services/customerservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Customer } from '../models/CustInfo';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  customer:Customer;
  passwordForm:FormGroup;
 submitted=false;
  constructor(private fb:FormBuilder,private service:CustomerserviceService,private toast:ToastrService,private router:Router) {
   
   }

  ngOnInit() {
   this.passwordForm=this.fb.group({
      oldpassword:['',[Validators.required,Validators.pattern('[A-Za-z0-9]{6,10}')]],
      newpassword:['',[Validators.required,Validators.pattern('[A-Za-z0-9]{6,10}')]]
    })
  }

  get f(){ return this.passwordForm.controls;}

  public update(){
  this.submitted=true;
  if(this.passwordForm.valid){
    this.service.updatePassword(this.passwordForm.controls['oldpassword'].value,this.passwordForm.controls['newpassword'].value).subscribe(
      (data)=>{this.customer=data;
        if(this.customer!=null){
          this.router.navigate(['custcontain']);
          this.toast.success('Password Changed SuccessFully!');  
        }
          else{
            this.router.navigate(['update-password']);
            this.toast.error('Please Enter Valid Old Password');
          }
          });
    
  }
  }


}
