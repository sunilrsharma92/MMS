package com.eshop.database.utility;

import java.util.Random;

public class Ramdomuniqnumber 
{

	public static int number()
	{
		 Random random = new Random() ;
	     int num = random.nextInt(5) + 2;
	     int randomNumber=100+num;
//	     System.out.println (randomNumber) ; 
		 return randomNumber;
		
	}
	public static void main (String[]arg) 
    {   
       
    } 

}
