package com.eshop.database.utility;

import in.smsowl.client.SmsOwl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Properties;

import com.eshop.logger.MakemyshopyLogger;

public class SendMessage
{
//	public static void main(String args[])
	public boolean sendMessage(String mobilenumber, String tempOtp)
	{
		System.out.println("mobilenumber : "+mobilenumber+" tempOtp : "+tempOtp);
		String accountid = "";
		String apikey = "";
		String Senderid = "";
		String templateid = "";
		String templatename = "";
		
		try
		{
			MakemyshopyLogger mms = new MakemyshopyLogger();
			Properties properties = new Properties();
			try
			{
				String readvalue = "";
				FileReader fileReader = new FileReader("F:\\D Drive\\My Career\\Fixed Local Code\\Shopping\\sms.properties");
				properties.load(fileReader);

				accountid = properties.getProperty("accountid");
				apikey = properties.getProperty("apikey");
				Senderid = properties.getProperty("Senderid");
				templateid = properties.getProperty("templateid");
				templatename = properties.getProperty("templatename");
				
				readvalue = "accountid : "+accountid+" apikey : "+apikey+" Senderid: "+Senderid+" templatename : "+templatename+" templateid : "+templateid+" accountid : "+accountid+"";
				System.out.println(readvalue);

				mms.writeLogs("SendMessage sendMessage() Details from properties files : " + readvalue, 1);
			}
			catch (Exception e)
			{
				e.printStackTrace();
				mms.writeLogs("SendMessage sendMessage() fileReader reading Exception : " + e, 0);
			}
			
			
		    //SmsOwl client = new SmsOwl("56078e483284c21d24b9a708", "dAdXpTZSJGSSdxCdB9GycKRRzymc5ymKCcFkwZtxytB6RKanQh3");
			SmsOwl client = new SmsOwl(accountid, apikey);
			
			
			HashMap<String, String> data = new HashMap<String, String>();
			data.put("test", " "+tempOtp);
//			data.put("otp", " "+tempOtp);
			
			//client.sendTransactionalSms(senderId, to, templateId, placeholderMap)
			String mobNumber = mobilenumber;
			
			//client.sendTransactionalSms("MMSTRA", mobNumber, "a4baf07c1259be39fb3c0ba7", data);
			  client.sendTransactionalSms(Senderid, mobNumber, templateid, data);
			  return true;
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return false;
	}
}
