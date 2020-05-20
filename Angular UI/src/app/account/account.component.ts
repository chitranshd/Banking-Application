import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, Form} from '@angular/forms';
import { Account } from '../models/account.model';
import { CustomerserviceService } from '../services/customerservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountForm:FormGroup;
  accountNumber:string;
  account:Account;
  accountType:string[];
  submitted=false;
  constructor(private fb:FormBuilder,private service:CustomerserviceService,private toast:ToastrService,private router:Router) {
    this.account=new Account();
    this.accountType=["Current","Savings"];
   }

  ngOnInit() {
    this.accountForm=this.fb.group(
      {
        accountType:['',[Validators.required]],
        openingBalance:['',[Validators.required,Validators.minLength(3)]]
      }
    )
  };

  get f(){return this.accountForm.controls;}

  public openAccount(){
    this.submitted=true;
  if(this.accountForm.valid){
    this.service.addAccount(sessionStorage.getItem('username'),this.accountForm.value).subscribe();
    this.toast.success('Account opened sucessFully');
    this.router.navigate(['list-account']);
  }
  }
}
