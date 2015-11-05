package com.eshop.database.utility;

import java.net.InetAddress;
import java.net.NetworkInterface;
import java.util.Enumeration;

public class IPAddressUtility
{
	public String getIpAddress()
	{
		try
		{
			String strOSName = getSystemConfiguration();
			String agentServerIpAddress = "";
			if (strOSName.equals("LINUX"))
			{
				InetAddress mownIP = InetAddress.getByName("localhost");
				Enumeration e = NetworkInterface.getNetworkInterfaces();

				while (e.hasMoreElements())
				{
					NetworkInterface ni = (NetworkInterface) e.nextElement();
					String strNetworkInterface = ni.getName();
					if (strNetworkInterface.startsWith("eth"))
					{
						strNetworkInterface = strNetworkInterface.toUpperCase().substring(0, 3);
					}
					if (strNetworkInterface.equals("ETH"))
					{
						Enumeration e2 = ni.getInetAddresses();
						int nCt = 1;
						while (e2.hasMoreElements())
						{
							InetAddress ip = (InetAddress) e2.nextElement();
							if (nCt == 2)
							{
								agentServerIpAddress = ip.toString().substring(1);
							}
							nCt++;
						}
					}
				}
			}
			else if (strOSName.equals("WINDOWS XP"))
			{
				InetAddress ownIP = InetAddress.getLocalHost();
				agentServerIpAddress = ownIP.getHostAddress();
			}
			else
			{
				InetAddress ownIP = InetAddress.getLocalHost();
				agentServerIpAddress = ownIP.getHostAddress();
			}
			return agentServerIpAddress;
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return "Error";
	}

	public String getSystemConfiguration()
	{
		try
		{
			String strOSName = System.getProperty("os.name");
			strOSName = strOSName.toUpperCase();
			String strosarch = System.getProperty("os.arch");
			String strosversion = System.getProperty("os.version");
			String strjavaversion = System.getProperty("java.version");
			String strjavavender = System.getProperty("java.vendor");
			return strOSName;
		}
		catch (Exception e)
		{
		}
		return "ERROR";
	}
	
	public static void main(String args[])
	{
		
		IPAddressUtility ip = new IPAddressUtility();
		String IPAddress = ip.getIpAddress();
//		System.out.println("IPAddress : "+IPAddress);

	}
}
