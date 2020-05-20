package com.example.fundtransfer.exception;

public class LowOnBalanceException extends RuntimeException {


	public LowOnBalanceException(String message) {
		super(message);
	}
}
