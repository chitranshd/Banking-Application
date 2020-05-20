import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Admin } from '../models/admin.model';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../services/customerservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin:Admin;
  adminForm:FormGroup;
   submitted=false;
  constructor(private fb:FormBuilder,private toastr:ToastrService,private router:Router,private service:CustomerserviceService) {
    this.admin=new Admin();
   }

  ngOnInit() {
    this.adminForm=this.fb.group({
      username:['',[Validators.required,Validators.pattern('[A-Za-z]{7,}')]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
   
  get f(){
    return this.adminForm.controls;
  }

  checkAdminLogin(){
    this.submitted=true;
    if(this.adminForm.valid){
      this.service.getAdmin(this.adminForm.controls['username'].value,this.adminForm.controls['password'].value).subscribe(
        (data)=>{this.admin=data;
        if(this.admin!=null){
          this.toastr.success('Login Successful!');
          this.router.navigate(['admincontain']);
          console.log("Login Successful!");
        }
        else{
          this.toastr.error('Login Failed!');
          this.router.navigate(['admin']);
         console.log("Login Failed!");
        }
        }
      );
      
      }
}
}
