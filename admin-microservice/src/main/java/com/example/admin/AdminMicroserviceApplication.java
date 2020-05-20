package com.example.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.admin.bean.Admin;
import com.example.admin.dao.AdminDao;

@SpringBootApplication
public class AdminMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdminMicroserviceApplication.class, args);
	}

	@Bean
	public Admin addAdmin(AdminDao dao) {
		Admin admin1=new Admin("Sinhgad","admin123");
		Admin admin2=new Admin("Capgemini","admin1234");
		dao.save(admin1);
		dao.save(admin2);
		return admin1;
	}
	
	
}
