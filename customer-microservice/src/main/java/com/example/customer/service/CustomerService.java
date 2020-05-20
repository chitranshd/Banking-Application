package com.example.customer.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.customer.bean.Customer;
import com.example.customer.dao.CustomerDao;

@Service
public class CustomerService {

	@Autowired
	CustomerDao dao;
	
	public Customer addCustomer(Customer customer) {
	return dao.save(customer);
	}
	
	public Optional<Customer> getCustomerById(Integer id) {
	return dao.findById(id);
	}
	
	public Customer findCustomerByUsername(String username) {
	return dao.findByUserName(username);
	}
	
	public Customer findCustomerByPassword(String password) {
	return dao.findByPassword(password);
	}
	
	public Customer findCustomerByMobileNumber(String mobileNumber) {
	return dao.findByMobileNumber(mobileNumber);
	}
	
	public Customer findCustomerByAddress(String address) {
	return dao.findByAddress(address);
	}
	
	public Customer findCustomerByCustomerName(String customerName) {
		return dao.findByCustomerName(customerName);
		}
	
	public List<Customer> getCustomers(){
		return dao.findAll();
	}
}
