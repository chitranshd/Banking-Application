package com.example.fundtransfer.controller;

import java.util.Date;
import java.util.List;

import javax.swing.text.html.FormSubmitEvent.MethodType;

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

import com.example.fundtransfer.bean.Account;
import com.example.fundtransfer.bean.FundTransfer;
import com.example.fundtransfer.exception.LowOnBalanceException;
import com.example.fundtransfer.service.FundTransferService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/fundtransfer")
public class FundTransferController {

	@Autowired
	RestTemplate restTemplate;
	
	@Autowired
	FundTransferService service;
	
	@RequestMapping(value="/addtransaction")
	public FundTransfer add(@RequestBody FundTransfer fund) {
		return service.saveTransfer(fund);
	}
	
	@GetMapping(value="/alltransfers")
	public List<FundTransfer> getTransfers(){
		return service.getTransactions();
	}
	
	@GetMapping(value="transaction/{accountNumber}")
	public List<FundTransfer> getTransactions(@PathVariable String accountNumber){
	return service.getTransactionsByAccountNumber(accountNumber);	
	}
	
	
	@RequestMapping(value="/transfer/{accountNumber}/to/{payeeAccountNumber}/{transferAmount}",method = RequestMethod.POST,produces="text/plain")
	public String transactions(@PathVariable String accountNumber,@PathVariable String payeeAccountNumber,@PathVariable double transferAmount) {
		System.out.println("Done");
		final String ACCOUNT_URL="http://localhost:9001/account/getaccount";
		final String POST_URL="http://localhost:9001/account";
		Account fromAccount=restTemplate.getForObject(ACCOUNT_URL+'/'+accountNumber, Account.class);
		if(fromAccount.getOpeningBalance()<transferAmount) {
			throw new LowOnBalanceException("You are Low on Balance");
		}
		fromAccount.setOpeningBalance(fromAccount.getOpeningBalance()-transferAmount);
		Account acc=restTemplate.postForObject(POST_URL+"/update", fromAccount, Account.class);
		service.saveTransfer(new FundTransfer(accountNumber,transferAmount,"Debit",new Date(), fromAccount));
		System.out.println("Done");
		Account toAccount=restTemplate.getForObject(ACCOUNT_URL+'/'+payeeAccountNumber, Account.class);
		toAccount.setOpeningBalance(toAccount.getOpeningBalance()+transferAmount);
		Account acc1=restTemplate.postForObject(POST_URL +"/update", toAccount, Account.class);
		service.saveTransfer(new FundTransfer(payeeAccountNumber,transferAmount,"Credit",new Date(), toAccount));
		System.out.println("Done1");
		return "Funds transferred successfully";
		
	}
}
