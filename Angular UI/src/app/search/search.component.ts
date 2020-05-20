import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { CustomerserviceService } from '../services/customerservice.service';
import { Router } from '@angular/router';
import { Account } from '../models/account.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 searchForm:FormGroup;
 submitted=false;
 found=false;
 account:Account[]=[];
  constructor(private fb:FormBuilder,private service:CustomerserviceService,private router:Router,private toast:ToastrService) { }

  ngOnInit() {
   this.searchForm=this.fb.group(
     {
       username:['',[Validators.required,Validators.minLength(6)]]
     }
     );
     this.service.listAllAccounts().subscribe((data)=>{this.account=data;});
  }
  
  get f(){
    return this.searchForm.controls;
  }
  
  public search(){
    this.submitted=true;
    if(this.searchForm.valid){
      this.account.forEach(
        (data)=>{
          if(data.customer.customerName===this.searchForm.controls['username'].value){
           this.found=true;
        }
      }
      );
      if(this.found===true){
      this.router.navigate(['admin-customername',this.searchForm.controls['username'].value]);
      this.found=false;
    }
    else{
      this.toast.error('Customer Of this name does not exist');
    }
  }
}
}