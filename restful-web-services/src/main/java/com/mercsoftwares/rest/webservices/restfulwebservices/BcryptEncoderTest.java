package com.mercsoftwares.rest.webservices.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String randomPass = "pass@321#";
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String endodedPass = encoder.encode(randomPass);
		
		System.out.println("encoded: "+endodedPass);
		System.out.println("decoder: "+ encoder.matches( randomPass, endodedPass));
		
	}

}
