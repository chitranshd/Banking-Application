package com.example.customer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.customer.bean.Customer;

@Repository
public interface CustomerDao extends JpaRepository<Customer, Integer> {

	@Query("Select c from Customer c where c.username=?1")
	public Customer findByUserName(String username);
		

	@Query("Select c from Customer c where c.password=?1")
	public Customer findByPassword(String password);
		

	@Query("Select c from Customer c where c.mobileNumber=?1")
	public Customer findByMobileNumber(String mobileNumber);
		

    @Query("Select c from Customer c where c.address=?1")
	public Customer findByAddress(String address);
    
    @Query("Select c from Customer c where c.customerName=?1")
   	public Customer findByCustomerName(String customerName);
		
}
