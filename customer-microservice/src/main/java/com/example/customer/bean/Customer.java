package com.example.customer.bean;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.example.customer.bean.Account;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Customer {

@Id
@GeneratedValue(strategy = GenerationType.AUTO )
private Integer customerId;

private String customerName;
private String emailId;
private String mobileNumber;
private String address;
private String pancard;
private String username;
private String password;



}
