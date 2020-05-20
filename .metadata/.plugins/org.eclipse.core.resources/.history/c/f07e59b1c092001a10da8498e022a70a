package com.example.account.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.account.bean.Account;

@Repository
public interface AccountDao extends JpaRepository<Account, Integer> {

	@Query("Select a from Account a where a.accountNo=?1")
	public Account getAccountByaccountNo(String accountNo);
	
}
