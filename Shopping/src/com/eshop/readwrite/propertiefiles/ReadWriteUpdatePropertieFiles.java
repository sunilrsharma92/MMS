package com.eshop.readwrite.propertiefiles;

import java.io.FileReader;
import java.io.FileWriter;
import java.sql.DriverManager;
import java.util.Properties;

import com.eshop.logger.MakemyshopyLogger;

public class ReadWriteUpdatePropertieFiles
{
	public void updateCommonPropertieFile(int action)
	{
		MakemyshopyLogger mms = new MakemyshopyLogger();
		Properties properties = new Properties();
		int num = action;
		String propertyFileName = "";
		if(num == 1)
		{
			propertyFileName = "db.properties";
			properties.setProperty("drivername", "com.mysql.jdbc.Driver");
			properties.setProperty("connection", "jdbc:mysql://localhost:3306/shopprofile");
			properties.setProperty("username", "root");
			properties.setProperty("password", "");
		}
		else if(num == 2)
		{
			propertyFileName = "sms.properties";
			properties.setProperty("accountid", "56078e483284c21d24b9a708");
			properties.setProperty("apikey", "dAdXpTZSJGSSdxCdB9GycKRRzymc5ymKCcFkwZtxytB6RKanQh3");
			properties.setProperty("Senderid", "MMSTRA");
			properties.setProperty("templateid", "a4baf07c1259be39fb3c0ba7");
			properties.setProperty("templatename", "helloName");
		}
		
		
		FileWriter fileWriter = null;
		try
		{
			fileWriter = new FileWriter(propertyFileName);
			properties.store(fileWriter, "MakeMyShopy");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			mms.writeLogs("ReadWriteUpdatePropertieFiles updateCommonPropertieFile() fileWriter writing Exception : "+e, 0);
		}
		finally
		{
			if(fileWriter!=null)
			{
				try
				{
					fileWriter.close();
				}
				catch(Exception e)
				{
					e.printStackTrace();
					mms.writeLogs("ReadWriteUpdatePropertieFiles updateCommonPropertieFile() fileWriter is not null Exception : "+e, 0);
				}
			}
		}
	}
	
	public String readCommonPropertieFile(int action)
	{
			MakemyshopyLogger mms = new MakemyshopyLogger();
			Properties properties = new Properties();
			FileReader fileReader = null;
			try
			{
				int num = action;
				String propertyFileName = "";
				String readvalue = "";
				if(num == 1)
				{
					propertyFileName = "db.properties";
				}
				else if(num == 2)
				{
					propertyFileName = "sms.properties";
				}
					fileReader = new FileReader(propertyFileName);
					properties.load(fileReader);
					
					if(num == 1)
					{
						String drivername = properties.getProperty("drivername");
						String connection = properties.getProperty("connection");
						String username = properties.getProperty("username");
						String password = properties.getProperty("password");
						
						readvalue = "drivername : "+drivername+" connection : "+connection+" username: "+username+" password : "+password+"";
						System.out.println(readvalue);
					}
					else if(num == 2)
					{
						String accountid = properties.getProperty("accountid");
						String apikey = properties.getProperty("apikey");
						String Senderid = properties.getProperty("Senderid");
						String templateid = properties.getProperty("templateid");
						String templatename = properties.getProperty("templatename");
						
						readvalue = "accountid : "+accountid+" apikey : "+apikey+" Senderid: "+Senderid+" templatename : "+templatename+" templateid : "+templateid+" accountid : "+accountid+"";
						System.out.println(readvalue);
					}
					
					mms.writeLogs("ReadWriteUpdatePropertieFiles readCommonPropertieFile() Details from properties files : "+readvalue, 1);
					return "";
			}
			catch(Exception e)
			{
				e.printStackTrace();
				mms.writeLogs("ReadWriteUpdatePropertieFiles readCommonPropertieFile() fileReader reading Exception : "+e, 0);
			}
			finally
			{
				if(fileReader!=null)
				{
					try
					{
						fileReader.close();
					}
					catch(Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ReadWriteUpdatePropertieFiles updateCommonPropertieFile() fileReader is not null Exception : "+e, 0);
					}
				}
			}
			return null;
	}
	
	public static void main(String args[])
	{
		ReadWriteUpdatePropertieFiles rwup = new ReadWriteUpdatePropertieFiles();
		rwup.updateCommonPropertieFile(1);
		rwup.readCommonPropertieFile(1);
	}
	
}
