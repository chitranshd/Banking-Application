import { Injectable } from '@angular/core';
import { Customer } from '../models/CustInfo';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { FundTransfer } from '../models/transaction.model';
import { ExceptionBean } from '../models/handle.model';
import { Admin } from '../models/admin.model';
import { Observable } from 'rxjs';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
private customer_url:string;
private account_url:string;
private transaction_url:string;
private admin_url:string;

  constructor(private http:HttpClient) { 
  this.customer_url="http://localhost:9000/customer";
  this.account_url="http://localhost:9001/account"
  this.transaction_url="http://localhost:9002/fundtransfer"
  this.admin_url="http://localhost:9003/admin";
}

  public saveCustomer(customer:Customer){
    return this.http.post(this.customer_url+'/addcustomer',customer);
  }

  public verifyLogin(username:string,password:string){
    sessionStorage.setItem('username',username);
    sessionStorage.setItem('password',password);
    return this.http.get<Customer>(this.customer_url+'/login'+'/'+ username +'/'+ password);
  }

  public updatePassword(oldpassword:string,newpassword:string){
    return this.http.post<Customer>(this.customer_url+'/password'+'/'+oldpassword+'/'+newpassword,oldpassword);
  }

  public updateAddress(oldaddress:string,newaddress:string){
    return this.http.post<Customer>(this.customer_url+'/address'+'/'+oldaddress+'/'+newaddress,oldaddress);
  }

  public updateMobile(oldmobile:string,newmobile:string){
    return this.http.post<Customer>(this.customer_url+'/mobileNumber'+'/'+oldmobile+'/'+newmobile,oldmobile);
  }

  public getcustomerByUsername(username:string){
    return this.http.get<Customer>(this.customer_url+'/getcustomer'+'/'+username);
  }

  public addAccount(username:string,account:Account){
    return this.http.post(this.account_url+'/addaccount'+'/'+username,account);
  }

  public fundTransfer(accountNumber:string,payeeAccountNumber:string,transferAmount:number){
    return this.http.post<String>(this.transaction_url+'/transfer'+'/'+accountNumber+'/to'+'/'+payeeAccountNumber+'/'+transferAmount,accountNumber);
  }

  public listAllAccounts(){
    return this.http.get<Account[]>(this.account_url+'/allaccounts');
  }
  
  public listAccountByUsername(username:string){
    return this.http.get<Account[]>(this.account_url+'/username'+'/'+username);
  }

  public transactionsByAccountNumber(accountNo:string){
    return this.http.get<FundTransfer[]>(this.transaction_url+'/transaction'+'/'+accountNo);
  } 

  public getAdmin(username:string,password:string){
    return this.http.get<Admin>(this.admin_url+'/getadmin'+'/'+username+'/'+password);
  }

  public listAccountByCustomername(customerName:string){
    return this.http.get<Account[]>(this.account_url+'/customername'+'/'+customerName);
  }

  public listAccountByAccountNumber(accountNo:string){
    return this.http.get<Account>(this.account_url+'/getaccount'+'/'+accountNo);
  }

}
