import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerserviceService } from '../services/customerservice.service';
import { Router } from '@angular/router';
import { Account } from '../models/account.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-search-accountno',
  templateUrl: './search-accountno.component.html',
  styleUrls: ['./search-accountno.component.css']
})
export class SearchAccountnoComponent implements OnInit {

  searchaccntForm:FormGroup;
  submitted=false;
  found=false;
  account:Account[]=[];
   constructor(private fb:FormBuilder,private service:CustomerserviceService,private router:Router,private toast:ToastrService) { }
 
   ngOnInit() {
    this.searchaccntForm=this.fb.group(
      {
        accountNo:['',[Validators.required,Validators.minLength(6)]]
      }
      );
      this.service.listAllAccounts().subscribe((data)=>{this.account=data;});
   }
   
   get f(){
     return this.searchaccntForm.controls;
   }
   
   public search(){
     this.submitted=true;
     if(this.searchaccntForm.valid){
       this.account.forEach(
         (data)=>{
           if(data.accountNo===this.searchaccntForm.controls['accountNo'].value){
            this.found=true;
         }
       }
       );
       if(this.found===true){
       this.router.navigate(['show-admin-account',this.searchaccntForm.controls['accountNo'].value]);
       this.found=false;
     }
     else{
       this.toast.error('Account Number does not exist');
     }
   }
 }

}
