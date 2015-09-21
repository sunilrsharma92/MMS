package com.eshop.database.utility;

import java.sql.Connection;
import java.sql.DriverManager;

public class MyConnection {
	
	
	  public static Connection getConnection()
	  {
		  Connection con = null;
	    try
	    {            
	      if(con==null)
	      {
	        Class.forName("com.mysql.jdbc.Driver");  
	       // con=DriverManager.getConnection("jdbc:mysql://localhost:3306/heenabou_shopprofile","heenabou_shop","rahulm@2015");
	        con=DriverManager.getConnection("jdbc:mysql://localhost:3306/shopprofile","root","root");
	      }
	    }
	    catch (Exception ex)
	    {
	        ex.printStackTrace();
	    }        
	    return con;
	  }
	  
	 
	  
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
