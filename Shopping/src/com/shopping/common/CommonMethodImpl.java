package com.shopping.common;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.simple.JSONObject;

import com.eshop.database.utility.MyConnection;

public class CommonMethodImpl {
	
	public static final String EMAIL_ID = "email";
	public static final String USERNAME = "username";
	
	
	
	@SuppressWarnings("unchecked")
	public static JSONObject getCustDetailsByProperty(String property,Object value,JSONObject object, JSONObject parentjson)
	{
		Connection conn = null;
		PreparedStatement stmt = null;
		try
		{
			conn = MyConnection.getConnection();
			String sql = "select * from customers where "+property+" = '"+value+"'";
			stmt = conn.prepareStatement(sql);
			ResultSet rs = stmt.executeQuery();
			if (rs.next())
			{
				parentjson.put("custFirstName", rs.getString("first_name"));
				parentjson.put("custLastName", rs.getString("last_name"));
				parentjson.put("custPass", rs.getString("password"));
				parentjson.put("custEmailId", rs.getString("email"));
				//parentjson.put("custUsername", rs.getString("username"));
				parentjson.put("custKey", rs.getLong("customer_key"));
				parentjson.put("custAddress", rs.getString("address1"));
				parentjson.put("custAddress2", rs.getString("address2"));
				parentjson.put("street", rs.getString("street"));
				parentjson.put("custCity", rs.getString("city"));
				parentjson.put("custState", rs.getString("state"));
				parentjson.put("custPinCode", rs.getString("postal_code"));
				parentjson.put("custPhone", rs.getString("phone"));
				parentjson.put("custActive", rs.getInt("active"));
				parentjson.put("custOtp", rs.getString("otp"));
				
			}
			
			closeConnectionUpdate(stmt, conn);
			
			if(parentjson != null)
				return parentjson;
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return null;
	}
	
	
	@SuppressWarnings("unchecked")
	public static JSONObject getShopkeeperDetailsByProperty(String property,Object value,JSONObject object, JSONObject parentjson)
	{
		Connection conn = null;
		PreparedStatement stmt = null;
		try
		{
			conn = MyConnection.getConnection();
			String sql = "select * from suppliers where "+property+" = '"+value+"'";
			stmt = conn.prepareStatement(sql);
			ResultSet rs = stmt.executeQuery();
			if (rs.next())
			{
				parentjson.put("supplierFirstName", rs.getString("contact_fname"));
				parentjson.put("supplierLastName", rs.getString("contact_lname"));
				parentjson.put("supplierPass", rs.getString("password"));
				parentjson.put("supplierEmailId", rs.getString("email"));
				parentjson.put("supplierKey", rs.getLong("supplier_key"));
				parentjson.put("supplierAddress", rs.getString("address1"));
				parentjson.put("supplierAddress2", rs.getString("address2"));
				parentjson.put("street", rs.getString("street"));
				parentjson.put("supplierCity", rs.getString("city"));
				parentjson.put("supplierState", rs.getString("state"));
				parentjson.put("supplierPinCode", rs.getString("postal_code"));
				parentjson.put("supplierPhone", rs.getString("phone"));
				parentjson.put("supplierActive", rs.getInt("active"));
				parentjson.put("supplierOtp", rs.getString("otp"));
				
				
				parentjson.put("status", 3);
				parentjson.put("command", 2051);
			
			}
			
			closeConnectionUpdate(stmt, conn);
			
			if(parentjson != null)
				return parentjson;
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return null;
	}
	
	
	 // -- close all for Insert/Update
	  public static void closeConnectionUpdate(PreparedStatement stmt,Connection conn)
	  {
	    try
	    {
	    	stmt.close();
			conn.close();
	    }
	    catch (SQLException e)
	    {
	       e.printStackTrace();
	    } 
	    finally
		{
		   try 
		   {
		    if(stmt!=null)
		    	stmt.close();
		    	
		    if(conn!=null)
		         conn.close();
			} 
		    catch (SQLException e)
		    {
		    	e.printStackTrace();
		    }
		}
	  }
	  
	  // -- close all for ResultSet
	  public static void closeConnectionSelect(PreparedStatement stmt,Connection conn,ResultSet rs)
	  {
	    try
	    {
	    	stmt.close();
			conn.close();
			rs.close();
	    }
	    catch (SQLException e)
	    {
	       e.printStackTrace();
	    } 
	    finally
		{
		   try 
		   {
		    if(stmt!=null)
		    	stmt.close();
		    	
		    if(conn!=null)
		         conn.close();
		    
		    if(rs!=null)
		    	rs.close();
			} 
		    catch (SQLException e)
		    {
		    	e.printStackTrace();
		    }
		}
	  }
	  
	  public static JSONObject putSuccessJson(JSONObject parentjson,int command)
	  {
		  parentjson.put("command",command);
		  parentjson.put("status",3);
		  
		  return parentjson;
	  }
	  
	  public static JSONObject putFailedJson(JSONObject parentjson,int command)
	  {
		  parentjson.put("command",command);
		  parentjson.put("status",2);
		  
		  return parentjson;
	  }
	
	
}
