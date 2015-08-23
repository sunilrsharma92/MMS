package com.eshop.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;

import com.eshop.database.utility.EmailUtility;
import com.eshop.database.utility.MyConnection;
import com.shopping.common.CommonMethodImpl;

public class ProductInterfaceImpl implements ProductInterface{

	
	JSONObject parentjson = new JSONObject();
	JSONArray jsonarray = new JSONArray();
	JSONArray jsonarray1 = new JSONArray();
	PreparedStatement ps,ps1,ps2 = null;
	Connection conn = null;
	ResultSet rs,rs1 = null;
	int result, resultTemp = 0;
	String output = null;
	
	public static final String OTP_REGISTER = "otpRegister";
	public static final String FORGOT_PASSWORD = "ForgotPassword";
	
	@Override
	public String handleRequestResponse(String jsonMsg,int command) {
		try
		{
			conn=MyConnection.getConnection();
		
		
		switch (command) {

		case 1000: //All main product category//
			try
			{
					ps=conn.prepareStatement("select category_key,category_name from category");
					rs=ps.executeQuery();
					while(rs.next())
					{	
						JSONObject childjson = new JSONObject();
						childjson.put("categoryid", rs.getInt("category_key"));
						childjson.put("categoryname", rs.getString("category_name"));
						
						jsonarray.add(childjson);
//						System.out.println("jsonarray : :  : :"+jsonarray);
					}
					
					parentjson.put("category", jsonarray);
					
					
					ps1=conn.prepareStatement("select sub_category_key,category_ref,sub_category_name from sub_category");
					rs1=ps1.executeQuery();
					while(rs1.next())
					{	
						JSONObject childjson1 = new JSONObject();
						childjson1.put("categoryid", rs1.getLong("category_ref"));
						childjson1.put("subcategoryid", rs1.getLong("sub_category_key"));
						childjson1.put("subcategoryname", rs1.getString("sub_category_name"));
						
						jsonarray1.add(childjson1);
					}
					parentjson.put("subcategory", jsonarray1);
					
					parentjson.put("command",2000);
					parentjson.put("status",3);
					
					output = parentjson.toString();
//					System.out.println("output ::::::::: "+output);
					return output;
			}
			catch (Exception e)
			{
				e.printStackTrace();
			}
			break;
					
		case 1001: // --  Update shop profile.//
			try
			{
				JSONObject parentjson = (JSONObject) JSONValue.parse(jsonMsg);
		        
		        String sql = "update suppliers set address1 = ?, city = ?, state = ?, postal_code = ?,contact_fname = ?, contact_lname = ?  where supplier_key = ?";
				ps = conn.prepareStatement(sql);
				ps.setString(1, (String) parentjson.get("address"));
				ps.setString(2, (String) parentjson.get("city"));
				ps.setString(3, (String) parentjson.get("state"));
				ps.setLong(4,  (Long) parentjson.get("pincode"));
				ps.setString(5,(String) parentjson.get("firstName"));
				ps.setString(6,(String) parentjson.get("lastName"));
				ps.setLong(7, 1);
				
				System.out.println("Sunil before:"+parentjson.toJSONString());
				
				parentjson.remove("command");
				
				System.out.println("Sunil before:"+parentjson.toJSONString());
				
				result = ps.executeUpdate();
				
				if(result > 0)
				{
					/*String sqlSelect = "";
					sqlSelect = "select * from suppliers where supplier_key = ?";
					ps1 = conn.prepareStatement(sqlSelect);
					ps1.setLong(1, 1);
					rs1 = ps1.executeQuery();*/
					
//					if(rs1.next())
//					{
						/*parentjson.put("supKey", rs1.getLong("supplier_key"));
						parentjson.put("supFirstName", rs1.getString("contact_fname"));
						parentjson.put("supLastName", rs1.getString("contact_lname"));
						parentjson.put("supAddress", rs1.getString("address1"));
						parentjson.put("supCity", rs1.getString("city"));
						parentjson.put("supState", rs1.getString("state"));
						parentjson.put("supPinCode", rs1.getLong("postal_code"));*/
						parentjson.put("status", 3);
						parentjson.put("command", 2001);
					} 
					else
					{
						parentjson.put("status", 2);
						parentjson.put("command", command);
					}
					output = parentjson.toString();
					System.out.println("output ::::::::: "+output);
					return output;
				}
			
		        
			catch (Exception e)
			{
				e.printStackTrace();
			}
			break;
		
		case 1002:

			break;
		
		case 1003:
			try
			{
//				{"mainCategoryID":7,"command":1003,"subCategoryID":"1"}
			JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
			
			System.out.println("Object : "+object.toString());
			
			Long mc = (Long)object.get("mainCategoryID");
			Long sc = (Long)object.get("subCategoryID");
			
//			System.out.println("mc : "+mc+" sc : "+sc);
			
			ps=conn.prepareStatement("select * from products where category_ref=? and sub_category_ref=?");
			ps.setLong(1, mc );
			ps.setLong(2, sc);
			rs=ps.executeQuery();
			while(rs.next())
			{	
				JSONObject childjson = new JSONObject();
				childjson.put("productid", rs.getLong("product_key"));
				childjson.put("price", rs.getFloat("unite_price"));
				childjson.put("stock", rs.getFloat("units_in_stock"));
				childjson.put("prodName", rs.getString("product_name"));
				childjson.put("images", rs.getString("picture"));
				
				jsonarray.add(childjson);
//				System.out.println("jsonarray : :  : :"+jsonarray);
			}
			
			parentjson.put("product", jsonarray);
			parentjson.put("command",2003);
			parentjson.put("status",3);
			
			output = parentjson.toString();
//			System.out.println("output ::::::::: "+output);
			return output;
			}
			catch(Exception e)
			{
				e.printStackTrace();
			}
			break;
			
		case 1004:

			break;
			
			
		case 1005:
			try
			{
					System.out.println("jsonMsg of product in cart ::::::::::::::: "+jsonMsg);
					
					JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
//					
					String product = (String)object.get("productArray");
					System.out.println("product : "+product);
					
					String[] productid = product.split("#");
					
					for(int i = 0; i<productid.length; i++)
					{
//						String id = (String) productid.get(i);
						Long productkey = Long.parseLong(productid[i]);
						System.out.println(productkey);
					
					
					ps=conn.prepareStatement("select * from products where product_key=?");
					ps.setLong(1, productkey);
					
					rs=ps.executeQuery();
					while(rs.next())
					{	
						JSONObject childjson = new JSONObject();
						childjson.put("productid", rs.getLong("product_key"));
						childjson.put("price", rs.getFloat("unite_price"));
						childjson.put("stock", rs.getFloat("units_in_stock"));
						childjson.put("prodName", rs.getString("product_name"));
						childjson.put("images", rs.getString("picture"));
						
						jsonarray.add(childjson);
						System.out.println("jsonarray : :  : :"+jsonarray);
					}
					}
					parentjson.put("product", jsonarray);
					parentjson.put("command",2005);
					parentjson.put("status",3);
					
					output = parentjson.toString();
					System.out.println("output ::::::::: "+output);
					return output;
			}
			catch(Exception e)
			{
				parentjson.put("command",1005);
				parentjson.put("status",2);
				
				output = parentjson.toString();
				System.out.println("output ::::::::: "+output);
//				return output;
//				e.printStackTrace();
			}
					
			break;
			
		case 1006:
			try
			{
				JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
//				
				String product = (String)object.get("txt");
			System.out.println("txt : "+product);
			
			ps=conn.prepareStatement("select * from products where product_name LIKE '"+product+"%'");
//			ps.setString(1, jsonMsg );
			rs=ps.executeQuery();
			while(rs.next())
			{	
				JSONObject childjson = new JSONObject();
				childjson.put("productid", rs.getLong("product_key"));
				childjson.put("price", rs.getFloat("unite_price"));
				childjson.put("stock", rs.getFloat("units_in_stock"));
				childjson.put("prodName", rs.getString("product_name"));
				childjson.put("images", rs.getString("picture"));
				
				jsonarray.add(childjson);
//				System.out.println("jsonarray : :  : :"+jsonarray);
			}
			
			parentjson.put("product", jsonarray);
			parentjson.put("command",2003);
			parentjson.put("status",3);
			
			output = parentjson.toString();
//			System.out.println("output ::::::::: "+output);
			return output;
			}
			catch(Exception e)
			{
				e.printStackTrace();
			}
			break;
			
		case 1010: // --  Supplier/ Shop Profile info on load of page // 
			try
			{
				JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
				
					String sqlSelect = "";
					sqlSelect = "select * from suppliers where supplier_key = ?";
					ps1 = conn.prepareStatement(sqlSelect);
					ps1.setLong(1,(Long) object.get("supplierKey")); // -- supplier key is to be inserted
					rs1 = ps1.executeQuery();
					
					if(rs1.next())
					{
						parentjson.put("supKey", rs1.getLong("supplier_key"));
						parentjson.put("supFirstName", rs1.getString("contact_fname"));
						parentjson.put("supLastName", rs1.getString("contact_lname"));
						parentjson.put("supAddress", rs1.getString("address1"));
						parentjson.put("supCity", rs1.getString("city"));
						parentjson.put("supState", rs1.getString("state"));
						parentjson.put("supPinCode", rs1.getLong("postal_code"));
						parentjson.put("status", 3);
						parentjson.put("command", 2010);
					}
					else
					{
						parentjson.put("status", 2);
						parentjson.put("command", command);
					}
					output = parentjson.toString();
					System.out.println("output ::::::::: "+output);
					return output;
				}
			
		        
			catch (Exception e)
			{
				e.printStackTrace();
			}
			break;
			
			
		case 1051: // --  Customer/Shopkeeper Login //
			try
			{
				JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
				
					String custEmail = (String) object.get("emailLogin");
					String custPass = (String) object.get("passLogin");
					String userType = (String) object.get("userType");
					String otpLogin = (String) object.get("otpLogin");
					
					if(userType != null && userType.trim().equalsIgnoreCase("customer"))
					{
						parentjson = CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl.EMAIL_ID, custEmail,object ,parentjson);
						
						// -- Unregistered user
						if(otpLogin != null && !otpLogin.trim().isEmpty()){
						if(parentjson.get("custActive") != null && parentjson.get("custActive").toString().equalsIgnoreCase("0"))
						{
						if(otpLogin != null && otpLogin.trim().equalsIgnoreCase((String) parentjson.get("custOtp")))
						{
						
						if(custPass!= null && parentjson.get("custPass") != null && custPass.trim().equals(parentjson.get("custPass")))
						{
							
							String sql = "update customers set active = 1 where email = ?";
							ps = conn.prepareStatement(sql);
							ps.setString(1, custEmail);
							result = ps.executeUpdate();
							if(result > 0)
							{
								parentjson.put("status", 3);
								parentjson.put("command", 2051);
							}
							else
							{
								parentjson.put("status", 2);
								parentjson.put("command", command);
							}
						}
						else
						{
							parentjson.put("status", 2);
							parentjson.put("command", command);
						}
						}
						else
						{
							parentjson.put("status", 2);
							parentjson.put("command", command);
						}
						}
						else
						{
							parentjson.put("status", 2);
							parentjson.put("command", command);
						}
						}// -- Registered user
						else {
							if(custPass!= null && parentjson.get("custPass") != null && custPass.trim().equals(parentjson.get("custPass")))
							{
								parentjson.put("status", 3);
								parentjson.put("command", 2051);
							}
							else
							{
								parentjson.put("status", 2);
								parentjson.put("command", command);
							}
						}
						
					}
					
					else if(userType != null && userType.trim().equalsIgnoreCase("supplier"))
					{
						parentjson = CommonMethodImpl.getShopkeeperDetailsByProperty(CommonMethodImpl.EMAIL_ID, custEmail,object ,parentjson);
						
						// -- Unregistered user
						if(otpLogin != null && !otpLogin.trim().isEmpty()){
						if(parentjson.get("supplierActive") != null && parentjson.get("supplierActive").toString().equalsIgnoreCase("0"))
						{
						if(otpLogin != null && otpLogin.trim().equalsIgnoreCase((String) parentjson.get("supplierOtp")))
						{
						
						if(custPass!= null && parentjson.get("supplierPass") != null && custPass.trim().equals(parentjson.get("supplierPass")))
						{
						
							String sql = "update suppliers set active = 1 where email = ?";
							ps = conn.prepareStatement(sql);
							ps.setString(1, custEmail);
							result = ps.executeUpdate();
							
							if(result > 0)
							{
								parentjson.put("status", 3);
								parentjson.put("command", 2051);
							}
							else
							{
								parentjson.put("status", 2);
								parentjson.put("command", command);
							}
						}
						else
						{
							parentjson.put("status", 2);
							parentjson.put("command", command);
						}
						}
						else
						{
							parentjson.put("status", 2);
							parentjson.put("command", command);
						}
						}
						else
						{
							parentjson.put("status", 2);
							parentjson.put("command", command);
						}
						}// -- Registered user
						else {
							if(custPass!= null && parentjson.get("supplierPass") != null && custPass.trim().equals(parentjson.get("supplierPass")))
							{
								parentjson.put("status", 3);
								parentjson.put("command", 2051);
							}
							else
							{
								parentjson.put("status", 2);
								parentjson.put("command", command);
							}
						}
					}
					
					
					else
					{
						parentjson.put("status", 2);
						parentjson.put("command", command);
					}
						
					output = parentjson.toString();
					System.out.println("output ::::::::: "+output);
					return output;
				}
			
		        
			catch (Exception e)
			{
				e.printStackTrace();
			}
			break;

		case 1052: // --  Customer/Shopkeeper Registration and Email Verification // 
			try
			{
				JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
				String userType = (String) object.get("userType");
				
					String sqlInsert = "";
					
					if(userType != null && userType.trim().equalsIgnoreCase("customer"))
						sqlInsert = "insert into customers(email,phone,password) values(?,?,?)";
						
					if(userType != null && userType.trim().equalsIgnoreCase("supplier"))
						sqlInsert = "insert into suppliers(email,phone,password) values(?,?,?)";
					ps = conn.prepareStatement(sqlInsert);
					
					//String usernameSignUp = (String) object.get("usernameSignUp");
					String emailSignUp = (String) object.get("emailKey");
					
					ps.setString(1, emailSignUp);
				//	ps.setString(2, usernameSignUp);
					ps.setString(2, (String) object.get("mobileKey"));
					ps.setString(3, (String) object.get("passSignUp"));

					result = ps.executeUpdate();
					
					if(result > 0)
					{
						String sql1 = "";
						
						String tempOtp = EmailUtility.sendEmail(emailSignUp, null, OTP_REGISTER);
						if(tempOtp != null && !tempOtp.trim().isEmpty())
						{
							if(userType != null && userType.trim().equalsIgnoreCase("customer"))
								sql1 = "update customers set otp = ? where email = ?";
							
							if(userType != null && userType.trim().equalsIgnoreCase("supplier"))
								sql1 = "update suppliers set otp = ? where email = ?";
							
							ps1 = conn.prepareStatement(sql1);
							ps1.setString(1, tempOtp);
							ps1.setString(2, emailSignUp);
							
							resultTemp = ps1.executeUpdate();
							
							
						}
						parentjson.put("status", 3);
						parentjson.put("command", 2052);
					}
					else
					{
						parentjson.put("status", 2);
						parentjson.put("command", command);
					}
					output = parentjson.toString();
					System.out.println("output ::::::::: "+output);
					return output;
				}
			
		        
			catch (Exception e)
			{
				e.printStackTrace();
			}
			break;
			
			
		/*case 1053: // --  Customer Username availability // 
			try
			{
				JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
				
				String custUsername = (String) object.get("usernameSignUp");
				
				parentjson = CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl.USERNAME, custUsername,object ,parentjson);
				
				if(parentjson != null)
				{
					parentjson.put("status", 3);
					parentjson.put("command", 2053);
				}
				else
				{
					parentjson.put("status", 2);
					parentjson.put("command", command);
				}
				
				output = parentjson.toString();
				System.out.println("output ::::::::: "+output);
				return output;
			}
		        
			catch (Exception e)
			{
				e.printStackTrace();
			}
			break;*/
			
			
		case 1054: // --  Forgot/Shopkeeper Password Customer// 
			try
			{
				JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
				
//				String usernameCust = (String) object.get("usernameForgotPwd");
				String email = (String) object.get("emailForgotPwd");
				String userType = (String) object.get("userType");
				
				/*if(usernameCust != null && !usernameCust.trim().isEmpty())
					parentjson = CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl.USERNAME, usernameCust,object ,parentjson);*/
				
				// -- for customer
				if(userType != null && userType.trim().equalsIgnoreCase("customer"))
				{
				 if(email != null && !email.trim().isEmpty())
					parentjson = CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl.EMAIL_ID, email,object ,parentjson);
				 
				 if (parentjson != null && !parentjson.isEmpty())
					{
						EmailUtility.sendEmail((String) parentjson.get("custEmailId"),(String) parentjson.get("custPass"), FORGOT_PASSWORD);
						parentjson.put("status", 3);
						parentjson.put("command", 2054);
					}
					else
					{
						parentjson.put("status", 2);
						parentjson.put("command", command);
					}
				}
				// -- for supplier
				if(userType != null && userType.trim().equalsIgnoreCase("supplier"))
				{
				 if(email != null && !email.trim().isEmpty())
					parentjson = CommonMethodImpl.getShopkeeperDetailsByProperty(CommonMethodImpl.EMAIL_ID, email,object ,parentjson);
				 
				 if (parentjson != null && !parentjson.isEmpty())
					{
						EmailUtility.sendEmail((String) parentjson.get("supplierEmailId"),(String) parentjson.get("supplierPass"), FORGOT_PASSWORD);
						parentjson.put("status", 3);
						parentjson.put("command", 2054);
					}
					else
					{
						parentjson.put("status", 2);
						parentjson.put("command", command);
					}
				 
				}

				output = parentjson.toString();
				System.out.println("output ::::::::: "+output);
				return output;
				
			}
			catch (Exception e)
			{
				e.printStackTrace();
			}
			
			break;
			
			
		case 1055: // -- Save Customer Details // 
			try
			{
				Long custPincode = 0L;
				JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
				
//				String usernameCust = (String) object.get("usernameForgotPwd");
				String custFirstName = (String) object.get("custFirstName");
				String custLastName = (String) object.get("custLastName");
				String custMobNo = (String) object.get("custMobNo");
				String custEmail = (String) object.get("custEmail");
				String custAddress1 = (String) object.get("custAddress1");
				String custAddress2 = (String) object.get("custAddress2");
				String custState = (String) object.get("custState");
				String custCity = (String) object.get("custCity");
				
				if(object.get("custPincode") != null)
					custPincode = (Long)object.get("custPincode");
				
				String sql = "update customers set ";
				
				if(custFirstName != null && !custFirstName.trim().isEmpty())
					sql += " first_name = '"+custFirstName+"' ";
				
				if(custLastName != null && !custLastName.trim().isEmpty())
					sql += " ,last_name = '"+custLastName+"' ";
				
				if(custMobNo != null && !custMobNo.trim().isEmpty())
					sql += " ,phone = '"+custMobNo+"' ";
				
				if(custEmail != null && !custEmail.trim().isEmpty())
					sql += " ,email = '"+custEmail+"' ";
				
				if(custFirstName != null && !custFirstName.trim().isEmpty()) // -- Personal Details
				{
					if(custAddress1 != null && !custAddress1.trim().isEmpty())
						sql += " ,address1 = '"+custAddress1+"' ";
				}
				else // -- Address Details
				{
					if(custAddress1 != null && !custAddress1.trim().isEmpty())
						sql += " address1 = '"+custAddress1+"' ";
				}
				
				if(custAddress2 != null && !custAddress2.trim().isEmpty())
					sql += " ,address2 = '"+custAddress2+"' ";
				
				if(custState != null && !custState.trim().isEmpty())
					sql += " ,state = '"+custState+"' ";
				
				if(custCity != null && !custCity.trim().isEmpty())
					sql += " ,city = '"+custCity+"' ";
				
				if(custPincode != 0)
					sql += " ,postal_code = "+custPincode+" ";
				
				sql += "where customer_key = ?";
				
				ps = conn.prepareStatement(sql);
				ps.setInt(1, 6);
				result = ps.executeUpdate();
				
				if(result > 0)
				{
					parentjson.put("status", 3);
					parentjson.put("command", 2055);
				}
				
				else
				{
					parentjson.put("status", 2);
					parentjson.put("command", command);
				}
				 
				output = parentjson.toString();
				System.out.println("output ::::::::: "+output);
				return output;
				
			}
			catch (Exception e)
			{
				e.printStackTrace();
			}
			
			break;
			
			
			
		default:

			break;
		}
		
		return output;
		
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return null;
		}
		finally
		{
			output = null;
			parentjson = null;
			jsonarray1 = null;
			jsonarray = null;
			ps = null;
			ps1 = null;
			conn = null;
			rs = null;
		}
		
		
	}

}
