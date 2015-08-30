package com.eshop.database.utility;

import org.apache.commons.lang.RandomStringUtils;

public class RandomStringUtilsTrial 
{
	  
	public static String orderNumber()
	{
		String OTP=RandomStringUtils.random(8, true, true);
	    System.out.println("OTP : "+OTP);
		return OTP;
	}
	
	public static void main(String[] args) 
	  {
			
	  }
	}
