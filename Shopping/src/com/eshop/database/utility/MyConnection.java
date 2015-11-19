package com.eshop.database.utility;

import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

import javax.naming.ldap.PagedResultsControl;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServlet;

import com.eshop.logger.MakemyshopyLogger;

public class MyConnection extends HttpServlet{
	
	
	  public static Connection getConnection(String DBData)
	  {
		Connection con = null;
		String drivername = "";
		String connection = "";
		String username = "";
		String password = "";
			
	    try
	    {            
	      if(con==null)
	      {
	    	  
				MakemyshopyLogger mms = new MakemyshopyLogger();
				try
				{
					String readvalue = "";

					String[] DBDataArray = DBData.split("#");

						connection = DBDataArray[0];
						drivername = DBDataArray[1];
						username = DBDataArray[2];
						password = DBDataArray[3];

				    if(username.equals("NaN"))
					{
						username = "";
					}
					
					if(password.equals("NaN"))
					{
						password = "";
					}
					
					readvalue = "drivername : " + drivername + " connection : " + connection + " username: " + username + " password : " + password + "";

//					mms.writeLogs("ReadWriteUpdatePropertieFiles readCommonPropertieFile() Details from properties files : " + readvalue, 1);
				}
				catch (Exception e)
				{
					e.printStackTrace();
					mms.writeLogs("ReadWriteUpdatePropertieFiles readCommonPropertieFile() fileReader reading Exception : " + e, 0);
				}
	    	  
	        Class.forName(drivername);  
	        con=DriverManager.getConnection(connection,username,password);
	      }
	    }
	    catch (Exception ex)
	    {
	        ex.printStackTrace();
	    }        
	    return con;
	  }
}