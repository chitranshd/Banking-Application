package com.example.admin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.admin.bean.Admin;
import com.example.admin.dao.AdminDao;


@Service
public class AdminService {

	@Autowired
	AdminDao dao;
	
	public Admin getAdminByUsername(String username) {
	return dao.getAdmin(username);
	}
}
