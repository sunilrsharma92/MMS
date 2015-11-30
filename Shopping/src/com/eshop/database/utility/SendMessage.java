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
	public boolean sendMessage(String mobilenumber, String tempOtp, String regsmsTemplet, String action, String name, float total, String shopyNumber)
	{
//		mms.writeLogs("mobilenumber : "+mobilenumber+" tempOtp : "+tempOtp,1);
		String accountid = "";
		String apikey = "";
		String Senderid = "";
		String templateid = "";
		String templateid1 = "";
		String templatename = "";
		String orderid = "";
		float totalammount = total;
		
		String rahul = "";
		String sunil = "";
		String deva = "";
		String own = "";
		
		MakemyshopyLogger mms = null;
		HashMap<String, String> data = null;
		SmsOwl client = null;
		
		try
		{
			mms = new MakemyshopyLogger();
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
				templateid1 = prop[3];
				templatename = prop[4];
				
				readvalue = "accountid : "+accountid+" apikey : "+apikey+" Senderid: "+Senderid+" templatename : "+templatename+" templateid : "+templateid1+" accountid : "+accountid+"";
//				System.out.println(readvalue);

				mms.writeLogs("SendMessage sendMessage() Details from properties files : " + readvalue, 1);
			}
			catch (Exception e)
			{
				e.printStackTrace();
				mms.writeLogs("SendMessage sendMessage() fileReader reading Exception : " + e, 0);
			}
			
			
		    //SmsOwl client = new SmsOwl("56078e483284c21d24b9a708", "dAdXpTZSJGSSdxCdB9GycKRRzymc5ymKCcFkwZtxytB6RKanQh3");
			client = new SmsOwl(accountid, apikey);
			
			
			data = new HashMap<String, String>();
			if(action.equalsIgnoreCase("registration"))
			{
				templateid = templateid1;
				data.put("otp", " "+tempOtp);
			}
			else if(action.equalsIgnoreCase("ordering"))
			{
				String[] templateidArray = templateid1.split("@");
				
				templateid = templateidArray[0];
				
				orderid = tempOtp;
				data.put("name", " "+name);	
				data.put("total", " "+totalammount);	
				data.put("orderid", " "+orderid);	
			}
			else if(action.equalsIgnoreCase("notify"))
			{
				templateid = templateid1;
				
				orderid = tempOtp;
				data.put("name", " "+name);	
				data.put("total", " "+totalammount);	
				data.put("orderid", " "+orderid);	
			}
			
			
//			data.put("otp", " "+tempOtp);
			
			//client.sendTransactionalSms(senderId, to, templateId, placeholderMap)
			String mobNumber = mobilenumber;
			
			//client.sendTransactionalSms("MMSTRA", mobNumber, "a4baf07c1259be39fb3c0ba7", data);
			  client.sendTransactionalSms(Senderid, mobNumber, templateid, data);
			  
			  if(!shopyNumber.equalsIgnoreCase(""))
				{
				  	String[] templateidArray = templateid1.split("@");
					templateid = templateidArray[1];
					String[] numbers = shopyNumber.split("#");
					for(int i=0; i<numbers.length; i++)
					{
						own = numbers[i];
						client.sendTransactionalSms(Senderid, "+91"+own, templateid, data);
					}
				}
			  
			  return true;
			
		}
		catch(Exception e)
		{
			mms.writeLogs(""+e, 0);
			e.printStackTrace();
		}
		finally
		{
			client = null;
			data = null;
			mms = null;
		}
		return false;
	}
}
