package com.example.admin.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.admin.bean.Admin;

public interface AdminDao extends JpaRepository<Admin, Integer> {

@Query("Select a from Admin a where a.username=?1")
public Admin getAdmin(String username);
}
