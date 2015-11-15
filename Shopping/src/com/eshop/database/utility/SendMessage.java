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
	public boolean sendMessage(String mobilenumber, String tempOtp, String regsmsTemplet, String action)
	{
//		mms.writeLogs("mobilenumber : "+mobilenumber+" tempOtp : "+tempOtp,1);
		String accountid = "";
		String apikey = "";
		String Senderid = "";
		String templateid = "";
		String templatename = "";
		
		try
		{
			MakemyshopyLogger mms = new MakemyshopyLogger();
//			Properties properties = new Properties();
			try
			{
				String readvalue = "";
//				FileReader fileReader = new FileReader("sms.properties");
				/*FileReader fileReader = new FileReader("F:\\D Drive\\My Career\\MMS Local Code\\Shopping\\sms.properties");
				properties.load(fileReader);

				accountid = properties.getProperty("otp_accountid");
				apikey = properties.getProperty("otp_apikey");
				Senderid = properties.getProperty("otp_Senderid");
				templateid = properties.getProperty("otp_templateid");
				templatename = properties.getProperty("otp_templatename");*/
				
				
				String[] prop = regsmsTemplet.split("#");
				accountid = prop[0];
				apikey = prop[1];
				Senderid = prop[2];
				templateid = prop[3];
				templatename = prop[4];
				
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
			data.put("otp", " "+tempOtp);
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
