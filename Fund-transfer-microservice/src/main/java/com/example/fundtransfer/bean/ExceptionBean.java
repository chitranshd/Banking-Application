package com.example.fundtransfer.bean;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ExceptionBean {
    
	private int status;
	private String message;
	private long timeStamp;
	
	
}
