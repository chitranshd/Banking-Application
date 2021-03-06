package com.example.account.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.account.bean.Account;
import com.example.account.bean.Customer;
import com.example.account.bean.FundTransfer;
import com.example.account.service.AccountService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/account")
public class AccountController {

@Autowired
AccountService service;
@Autowired
RestTemplate restTemplate;

  final String CUSTOMER_URL="http://localhost:9000/customer/getcustomer";
  final String TRANSACTION_URL="http://localhost:9002/fundtransfer/addtransaction";
  
@PostMapping(value="/addaccount/{username}",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
public Account saveAccount(@PathVariable String username,@RequestBody Account account) {

	
	Customer customer=restTemplate.getForObject(CUSTOMER_URL+'/'+username, Customer.class);
	
	System.out.println(customer);
	//int id=customer.getCustomerId();
	account.setAccountNo(service.generateAccountNumber());
	account.setCustomer(customer);
	service.addAccount(account);
	FundTransfer funds=restTemplate.postForObject(TRANSACTION_URL,new FundTransfer(account.getAccountNo(),account.getOpeningBalance(),"Credit",new Date(), account),FundTransfer.class);
   return account;
	 
}

@GetMapping(value="/username/{username}")
public List<Account> getAccounts(@PathVariable String username){
	return service.getAccountByUsername(username);
}

@GetMapping(value="/customername/{customerName}")
public List<Account> getAccountsByCustomerName(@PathVariable String customerName){
	List<Account> acc= service.getAccountByCustomername(customerName);
	if(acc!=null) {
		return acc;
	}
	else {
		return null;
	}
	
}

@RequestMapping(value="/update",method = RequestMethod.POST)
	public Account update(@RequestBody Account account) {
	return service.updateAccount(account);
}

@GetMapping(value="/getaccount/{accountNo}")
public Account getAccountNumber(@PathVariable String accountNo) {
	Account acc =service.getAccount(accountNo);
	if(acc!=null) {
		return acc;
	}
	else {
		return null;
	}
}

@GetMapping(value="allaccounts")
public List<Account> getAllAccounts(){
	return service.getAccounts();
}

}
