package com.eshop.database.utility;

import org.apache.commons.lang.RandomStringUtils;

public class RandomStringUtilsTrial 
{
	  
	public static String orderNumber()
	{
		String ordernumber=RandomStringUtils.random(8, true, true);
	    System.out.println("ordernumber : "+ordernumber);
		return ordernumber;
	}
	
	public static void main(String[] args) 
	  {
			
	  }
	}
