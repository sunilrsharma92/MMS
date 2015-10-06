package com.eshop.database.utility;

import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

import com.eshop.logger.MakemyshopyLogger;

public class MyConnection {
	
	
	  public static Connection getConnection()
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
				Properties properties = new Properties();
				try
				{
					String readvalue = "";
					FileReader fileReader = new FileReader("F:\\D Drive\\My Career\\MMS Local Code\\Shopping\\db.properties");
					properties.load(fileReader);

					drivername = properties.getProperty("drivername");
					connection = properties.getProperty("connection");
					username = properties.getProperty("username");
					password = properties.getProperty("password");

					readvalue = "drivername : " + drivername + " connection : " + connection + " username: " + username + " password : " + password + "";
//					System.out.println(readvalue);

					mms.writeLogs("ReadWriteUpdatePropertieFiles readCommonPropertieFile() Details from properties files : " + readvalue, 1);
				}
				catch (Exception e)
				{
					e.printStackTrace();
					mms.writeLogs("ReadWriteUpdatePropertieFiles readCommonPropertieFile() fileReader reading Exception : " + e, 0);
				}
	    	  
	        Class.forName(drivername);  
//	        con=DriverManager.getConnection("jdbc:mysql://localhost:3306/heenabou_shopprofile","heenabou_shop","rahulm@2015");
	        con=DriverManager.getConnection(connection,username,password);
	      }
	    }
	    catch (Exception ex)
	    {
	        ex.printStackTrace();
	    }        
	    return con;
	  }
	/* public static void main(String args[])
	 {
		MyConnection.getConnection();
	 }*/
}
	  
	 /* public static void CloseConnection()
	  {
	    try
	    {
	       con.close();
	       con = null;
	    }
	    catch (SQLException e)
	    {
	       e.printStackTrace();
	    } 
	  }*/
	  
	  /*public static ResultSet getResultFromSqlQuery(String SqlQueryString)
	  {
	     Statement stmt;
	     ResultSet rs = null;
	     try
	     {  
	        getConnection();  
	        stmt = con.createStatement();
	        rs = stmt.executeQuery(SqlQueryString);
	     }
	     catch (SQLException e)
	     {
	        e.printStackTrace();
	     }       
	     return rs;
	  }
	}*/
