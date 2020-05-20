package com.example.fundtransfer.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.fundtransfer.bean.FundTransfer;

@Repository
public interface FundTransferDao extends JpaRepository<FundTransfer,Integer> {

	@Query("Select f from FundTransfer f where f.accountNumber=?1")
	List<FundTransfer> getTransactionsByAccountNumber(String accountNo);
}
