package com.example.fundtransfer.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fundtransfer.bean.FundTransfer;
import com.example.fundtransfer.dao.FundTransferDao;

@Service
public class FundTransferService {

	@Autowired
	FundTransferDao dao;
	
	public FundTransfer saveTransfer(FundTransfer fund) {
	 return dao.save(fund);
	}
	
	public List<FundTransfer> getTransactionsByAccountNumber(String accountNumber) {
	return dao.getTransactionsByAccountNumber(accountNumber);	
	}
	
	public List<FundTransfer>  getTransactions(){
		return dao.findAll();
	}
}
