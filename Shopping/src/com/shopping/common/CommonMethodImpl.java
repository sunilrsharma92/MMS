package com.shopping.common;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.eshop.database.utility.MyConnection;

public class CommonMethodImpl {
	
	public static final String EMAIL_ID = "email";
	public static final String USERNAME = "username";
	
	
	
	@SuppressWarnings("unchecked")
	public static JSONObject getCustDetailsByProperty(String property,Object value, JSONObject parentjson, String DBData)
	{
		Connection conn = null;
		PreparedStatement stmt = null;
		try
		{
			conn = MyConnection.getConnection(DBData);
			String sql = "select * from customers where "+property+" = '"+value+"'";
			stmt = conn.prepareStatement(sql);
			ResultSet rs = stmt.executeQuery();
			if (rs.next())
			{
				
				parentjson.put("firstName", rs.getString("first_name"));
				parentjson.put("lastName", rs.getString("last_name"));
				parentjson.put("password", rs.getString("password"));
				parentjson.put("emailId", rs.getString("email"));
				//parentjson.put("custUsername", rs.getString("username"));
				parentjson.put("key", rs.getLong("customer_key"));
				parentjson.put("address1", rs.getString("address1"));
				parentjson.put("address2", rs.getString("address2"));
				parentjson.put("street", rs.getString("street"));
				parentjson.put("city", rs.getString("city"));
				parentjson.put("state", rs.getString("state"));
				parentjson.put("pinCode", rs.getString("postal_code"));
				parentjson.put("phone", rs.getString("phone"));
				parentjson.put("active", rs.getInt("active"));
				parentjson.put("otp", rs.getString("otp"));
				parentjson.put("profileImg", rs.getString("profile_img"));
				parentjson.put("userType", "customer");
				
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
	public static JSONObject getShopkeeperDetailsByProperty(String property,Object value, JSONObject parentjson, String DBData)
	{
		Connection conn = null;
		PreparedStatement stmt = null;
		try
		{
			conn = MyConnection.getConnection(DBData);
			String sql = "select * from suppliers where "+property+" = '"+value+"'";
			stmt = conn.prepareStatement(sql);
			ResultSet rs = stmt.executeQuery();
			if (rs.next())
			{
				parentjson.put("companyname", rs.getString("company_name"));
				parentjson.put("firstName", rs.getString("first_name"));
				parentjson.put("lastName", rs.getString("last_name"));
				parentjson.put("password", rs.getString("password"));
				parentjson.put("emailId", rs.getString("email"));
				//parentjson.put("custUsername", rs.getString("username"));
				parentjson.put("key", rs.getLong("supplier_key"));
				parentjson.put("address1", rs.getString("address1"));
				parentjson.put("address2", rs.getString("address2"));
				parentjson.put("street", rs.getString("street"));
				parentjson.put("city", rs.getString("city"));
				parentjson.put("state", rs.getString("state"));
				parentjson.put("pinCode", rs.getString("postal_code"));
				parentjson.put("phone", rs.getString("phone"));
				parentjson.put("active", rs.getInt("active"));
				parentjson.put("otp", rs.getString("otp"));
				parentjson.put("profileImg", rs.getString("profile_img"));
				parentjson.put("userType", "supplier");
				
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
	public static JSONObject getShippingDetails(String property,Object value, JSONObject parentjson, String address, JSONArray jsonarray, String DBData)
	{
		Connection conn = null;
		PreparedStatement stmt = null;
		try
		{
			conn = MyConnection.getConnection(DBData);
			String sql = "select * from shipping_address where "+property+" = "+value+"";
			stmt = conn.prepareStatement(sql);
			ResultSet rs = stmt.executeQuery();
			while (rs.next())
			{
				JSONObject childjson = new JSONObject();
				if(address == "address")
				{
					childjson.put("shippingaddress", rs.getString("shipping_address"));
					jsonarray.add(childjson);
				}
				else
				{
//					childjson.put("id", rs.getLong("id"));
					childjson.put("id", rs.getLong("shipping_address_key"));
					childjson.put("customerid", rs.getLong("customer_key"));
					childjson.put("supplierid", rs.getLong("supplier_key"));
					childjson.put("name", rs.getString("name"));
					childjson.put("shippingaddress", rs.getString("shipping_address"));
					childjson.put("email", rs.getString("email"));
					childjson.put("mobile", rs.getString("mobile"));
					childjson.put("totalammount", rs.getFloat("total_ammount"));
					childjson.put("orderid", rs.getString("orderid"));
					jsonarray.add(childjson);
				}
				
			}
			
			closeConnectionUpdate(stmt, conn);
//			System.out.println("parentjson Address : "+parentjson);
			parentjson.put("address", jsonarray);
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
