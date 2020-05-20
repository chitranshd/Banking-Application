import { Component, OnInit, ErrorHandler } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { CustomerserviceService } from '../services/customerservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ExceptionBean } from '../models/handle.model';
import { HttpResponse, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { error } from 'util';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { Account } from '../models/account.model';


@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  exception:ExceptionBean;
  accounts:Account[];
  account:Account[];
  transferForm:FormGroup;
  submitted=false;
  sender=false;
  reciever=false;
  minimumBalance=false;
  constructor(private fb:FormBuilder,private service:CustomerserviceService,private toast:ToastrService,private router:Router) { }

  ngOnInit(){
    this.transferForm=this.fb.group({
     accountNumber:['',[Validators.required,Validators.minLength(6)]],
     payeeAccountNumber:['',[Validators.required,Validators.minLength(6)]],
     transferAmount:['',[Validators.required]]
    });
    this.service.listAllAccounts().subscribe(res=>{this.accounts=res;});
    this.service.listAccountByUsername(sessionStorage.getItem('username')).subscribe(data=>{this.account=data;});
  }
    
  get f(){ return this.transferForm.controls;}


  public fundTransfer(){
  this.submitted=true;
  if(this.transferForm.valid){
    //debugger
    this.accounts.forEach(
    (res)=>{
      if(res.accountNo===this.transferForm.controls['accountNumber'].value){
        if(res.openingBalance<=500 || (res.openingBalance-this.transferForm.controls['transferAmount'].value<=500)){
        this.toast.warning('Minimum Balance 500 required');
        this.minimumBalance=true;
        }
        this.sender=true;
       }
        if(res.accountNo===this.transferForm.controls['payeeAccountNumber'].value){
        this.reciever=true;
        }
        
    }
    );
    if(this.sender===true && this.reciever===true){
      if(this.minimumBalance===false){  
      this.service.fundTransfer(this.transferForm.controls['accountNumber'].value,this.transferForm.controls['payeeAccountNumber'].value,this.transferForm.controls['transferAmount'].value).subscribe();
      this.sender=false;
      this.reciever=false;
      this.router.navigate(['list-account']);
      this.toast.success('Funds Transferred Successfully'); 
      }
      this.minimumBalance=false;
    }
     else{
      this.sender=false;
      this.reciever=false;
      this.minimumBalance=false;
      this.toast.error('Check your Payee Account Number');
     }

    }
     
        }
      }
  
