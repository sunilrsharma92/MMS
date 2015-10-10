package com.eshop.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;

import com.eshop.database.utility.EmailUtility;
import com.eshop.database.utility.EncryptionUtility;
import com.eshop.database.utility.MyConnection;
import com.eshop.database.utility.RandomStringUtilsTrial;
import com.eshop.database.utility.SendMessage;
import com.makemyshopy.searchingutility.SearchUtility;
import com.eshop.logger.MakemyshopyLogger;
import com.shopping.common.CommonMethodImpl;

public class ProductInterfaceImpl implements ProductInterface
{

	JSONObject parentjson = new JSONObject();
	JSONArray jsonarray = new JSONArray();
	JSONArray jsonarray1 = new JSONArray();
	MakemyshopyLogger mms = null;
	PreparedStatement ps, ps1, ps2, ps3 = null;
	Connection conn = null;
	ResultSet rs, rs1, rs2 = null;
	int result, result1, result2, resultTemp = 0;
	String output = null;

	public static final String OTP_REGISTER = "otpRegister";
	public static final String FORGOT_PASSWORD = "ForgotPassword";
	public static final String CHANGE_PASSWORD = "changPassword";

	@Override
	public String handleRequestResponse(String jsonMsg, int command)
	{
		mms = new MakemyshopyLogger();
		try
		{
			conn = MyConnection.getConnection();

			switch (command)
			{

				case 1000: // All main product category//
					try
					{
						ps = conn.prepareStatement("select category_key,category_name from category");
						rs = ps.executeQuery();
						while (rs.next())
						{
							JSONObject childjson = new JSONObject();
							childjson.put("categoryid", rs.getInt("category_key"));
							childjson.put("categoryname", rs.getString("category_name"));

							jsonarray.add(childjson);
							// //System.out.println("jsonarray : :  : :"+jsonarray);
						}

						parentjson.put("category", jsonarray);

						ps1 = conn.prepareStatement("select sub_category_key,category_ref,sub_category_name from sub_category");
						rs1 = ps1.executeQuery();
						while (rs1.next())
						{
							JSONObject childjson1 = new JSONObject();
							childjson1.put("categoryid", rs1.getLong("category_ref"));
							childjson1.put("subcategoryid", rs1.getLong("sub_category_key"));
							childjson1.put("subcategoryname", rs1.getString("sub_category_name"));

							jsonarray1.add(childjson1);
						}
						parentjson.put("subcategory", jsonarray1);

						parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2000);

						output = parentjson.toString();
						// //System.out.println("output ::::::::: "+output);
						return output;
					}
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;

					// -- not in use
/*				case 1001: // -- Update shop profile.//
					try
					{
						JSONObject parentjson = (JSONObject) JSONValue.parse(jsonMsg);

						String sql = "update suppliers set address1 = ?, city = ?, state = ?, postal_code = ?,contact_fname = ?, contact_lname = ?  where supplier_key = ?";
						ps = conn.prepareStatement(sql);
						ps.setString(1, (String) parentjson.get("address1"));
						ps.setString(2, (String) parentjson.get("city"));
						ps.setString(3, (String) parentjson.get("state"));
						ps.setLong(4, (Long) parentjson.get("pincode"));
						ps.setString(5, (String) parentjson.get("firstName"));
						ps.setString(6, (String) parentjson.get("lastName"));
						ps.setLong(7, 1);

						// System.out.println("Sunil before:"+parentjson.toJSONString());

						parentjson.remove("command");

						// System.out.println("Sunil before:"+parentjson.toJSONString());

						result = ps.executeUpdate();

						if (result > 0)
						{
							
							 * String sqlSelect = ""; sqlSelect =
							 * "select * from suppliers where supplier_key = ?";
							 * ps1 = conn.prepareStatement(sqlSelect);
							 * ps1.setLong(1, 1); rs1 = ps1.executeQuery();
							 

							// if(rs1.next())
							// {
							
							 * parentjson.put("supKey",
							 * rs1.getLong("supplier_key"));
							 * parentjson.put("supFirstName",
							 * rs1.getString("contact_fname"));
							 * parentjson.put("supLastName",
							 * rs1.getString("contact_lname"));
							 * parentjson.put("supAddress",
							 * rs1.getString("address1"));
							 * parentjson.put("supCity", rs1.getString("city"));
							 * parentjson.put("supState",
							 * rs1.getString("state"));
							 * parentjson.put("supPinCode",
							 * rs1.getLong("postal_code"));
							 

							parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2001);

						}
						else
						{
							parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
						}
						output = parentjson.toString();
						// System.out.println("output ::::::::: "+output);
						return output;
					}

					catch (Exception e)
					{
						e.printStackTrace();
//						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;
*/
				case 1002:

					break;

				case 1003:
					try
					{
						// {"mainCategoryID":7,"command":1003,"subCategoryID":"1"}
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);

						// System.out.println("Object : "+object.toString());

						Long mc = (Long) object.get("mainCategoryID");
						Long sc = (Long) object.get("subCategoryID");
						String action = (String) object.get("action");
						Long userid = (Long) object.get("userid");
						String userType = (String) object.get("userType");
						
						String usertypecolumnname = "";
						
						if (userType != null && userType.trim().equalsIgnoreCase("customer"))
						{
							usertypecolumnname = "customer_key"; 
						}
						else if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							usertypecolumnname = "supplier_key";
						}
						
						// //System.out.println("mc : "+mc+" sc : "+sc);

						ps = conn.prepareStatement("select * from products where category_ref=? and sub_category_ref=?");
						ps.setLong(1, mc);
						ps.setLong(2, sc);
						rs = ps.executeQuery();
						while (rs.next())
						{
							JSONObject childjson = new JSONObject();
							childjson.put("productid", rs.getLong("product_key"));
							childjson.put("price", rs.getFloat("unite_price"));
							childjson.put("stock", rs.getFloat("units_in_stock"));
							childjson.put("prodName", rs.getString("product_name"));
							childjson.put("images", rs.getString("picture"));

							jsonarray.add(childjson);
							// //System.out.println("jsonarray : :  : :"+jsonarray);
						}

						parentjson.put("product", jsonarray);
						
						if (action.equalsIgnoreCase("withlogin"))
						{
							ps1 = conn.prepareStatement("select * from cart where " + usertypecolumnname + " = ?  and orderid is null");
							ps1.setLong(1, userid);

							rs1 = ps1.executeQuery();
							while (rs1.next())
							{
								Long productkey = rs1.getLong("productid");

								JSONObject childjson = new JSONObject();
								childjson.put("productid", productkey);
								jsonarray1.add(childjson);
								// System.out.println("jsonarray : :  : :"+jsonarray);
							}
							parentjson.put("productid", jsonarray1);
						}
						
						
						parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2003);
						output = parentjson.toString();
						// //System.out.println("output ::::::::: "+output);
						return output;
					}
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;

				case 1004:

					break;

				case 1005:
					try
					{
						// System.out.println("jsonMsg of product in cart ::::::::::::::: "+jsonMsg);

						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
						//
						String product = (String) object.get("productArray");
						String action = (String) object.get("action");
						Long userid = (Long) object.get("userid");
						String userType = (String) object.get("userType");
						
						String usertypecolumnname = "";
						
						if (userType != null && userType.trim().equalsIgnoreCase("customer"))
						{
							usertypecolumnname = "customer_key"; 
						}
						else if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							usertypecolumnname = "supplier_key";
						}
						
						// System.out.println("product : "+product);
						if(action.equalsIgnoreCase("withlogin"))
						{
							ps1 = conn.prepareStatement("select * from cart where "+usertypecolumnname+" = ?  and orderid is null");
							ps1.setLong(1, userid);

							rs1 = ps1.executeQuery();
							while (rs1.next())
							{
								Long productkey = rs1.getLong("productid");

								ps = conn.prepareStatement("select * from products where product_key=?");
								ps.setLong(1, productkey);

								rs = ps.executeQuery();
								while (rs.next())
								{
									JSONObject childjson = new JSONObject();
									childjson.put("productid", rs.getLong("product_key"));
									childjson.put("price", rs.getFloat("unite_price"));
									childjson.put("stock", rs.getFloat("units_in_stock"));
									childjson.put("prodName", rs.getString("product_name"));
									childjson.put("images", rs.getString("picture"));

									jsonarray.add(childjson);
									// System.out.println("jsonarray : :  : :"+jsonarray);
								}
							}
						}
						else if(action.equalsIgnoreCase("withoutlogin"))
						{
							String[] productid = product.split("#");
							for (int i = 0; i < productid.length; i++)
							{
								// String id = (String) productid.get(i);
								Long productkey = Long.parseLong(productid[i]);
								// System.out.println(productkey);

								ps = conn.prepareStatement("select * from products where product_key=?");
								ps.setLong(1, productkey);

								rs = ps.executeQuery();
								while (rs.next())
								{
									JSONObject childjson = new JSONObject();
									childjson.put("productid", rs.getLong("product_key"));
									childjson.put("price", rs.getFloat("unite_price"));
									childjson.put("stock", rs.getFloat("units_in_stock"));
									childjson.put("prodName", rs.getString("product_name"));
									childjson.put("images", rs.getString("picture"));

									jsonarray.add(childjson);
									// System.out.println("jsonarray : :  : :"+jsonarray);
								}
							}
						}
						
						parentjson.put("product", jsonarray);
						parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2005);

						output = parentjson.toString();
						// System.out.println("output ::::::::: "+output);
						return output;
					}
					catch (Exception e)
					{
						parentjson = CommonMethodImpl.putFailedJson(parentjson, command);

						output = parentjson.toString();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
						// System.out.println("output ::::::::: "+output);
						// return output;
						// e.printStackTrace();
					}

					break;

				case 1006:
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
						SearchUtility searchKeyword = new SearchUtility();
						
						String product = (String) object.get("txt");
						
						String output = searchKeyword.searchProduct(product);
						
						/*
						ps = conn.prepareStatement("select * from products where product_name LIKE '" + product + "%'");
						// ps.setString(1, jsonMsg );
						rs = ps.executeQuery();
						while (rs.next())
						{
							JSONObject childjson = new JSONObject();
							childjson.put("productid", rs.getLong("product_key"));
							childjson.put("price", rs.getFloat("unite_price"));
							childjson.put("stock", rs.getFloat("units_in_stock"));
							childjson.put("prodName", rs.getString("product_name"));
							childjson.put("images", rs.getString("picture"));

							jsonarray.add(childjson);
							// //System.out.println("jsonarray : :  : :"+jsonarray);
						}

						parentjson.put("product", jsonarray);
						parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2003);

						output = parentjson.toString();
						// //System.out.println("output ::::::::: "+output);
						
						*/
						
						return output;
						
					}
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;
					
				case 1007:
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
						Long key = (Long) object.get("key");
						String usertype = (String) object.get("userType");
						if(usertype.equalsIgnoreCase("customer"))
						{
							usertype = "customer_key";
						}
						else if(usertype.equalsIgnoreCase("supplier"))
							{
								usertype = "supplier_key";
							}
						
						parentjson = CommonMethodImpl.getShippingDetails(usertype, key, parentjson, "address", jsonarray);
						if (parentjson != null)
						{
							parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2007);
							parentjson.put("statusdesc", "Success.");
						}
						else
						{
							parentjson = new JSONObject();
							parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
							parentjson.put("statusdesc", "No address Found.");
						}

						output = parentjson.toString();
						// //System.out.println("output ::::::::: "+output);
						return output;
					}
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;

				case 1008:

					break;

				case 1009:

					break;

				case 1010: // -- Supplier/ Shop Profile info on load of page //
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
						
						Long supplierKey = (Long) object.get("supplierKey");
						parentjson = CommonMethodImpl.getShopkeeperDetailsByProperty("supplier_key", supplierKey, parentjson);
						if(parentjson != null)
						{
							parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2010);
						}
						else
						{
							parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
						}
						
						output = parentjson.toString();
						// System.out.println("output ::::::::: "+output);
						return output;
					}

					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;
				case 1011: //Add product to cart to database //
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);

						Long userid = (Long) object.get("userid");
						String userType = (String) object.get("userType");
						Long productid = (Long) object.get("productid");
						String ipaddress = (String) object.get("ipaddress");
						String authorisedUser = (String) object.get("authoriseduser");
						
						Long quantity =  (Long) object.get("quantity");
						String action = (String) object.get("action");
						
						String sql = "";
						String usertypecolumnname = "";
						
						if (userType != null && userType.trim().equalsIgnoreCase("customer"))
						{
							usertypecolumnname = "customer_key"; 
						}
						else if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							usertypecolumnname = "supplier_key";
						}
						
						if (action.trim().equalsIgnoreCase("add"))
						{
							sql = "insert into cart("+usertypecolumnname+", productid, quantity, ipaddress, datetime) values(?, ?, ?, ?, now())";
							ps2 = conn.prepareStatement(sql);
							
							ps2.setLong(1, userid);
							ps2.setLong(2, productid);
							ps2.setLong(3, quantity);
							ps2.setString(4, ipaddress);
						}
						else if (action.trim().equalsIgnoreCase("update"))
						{
							sql = "update cart set quantity = ? where productid = ? and "+usertypecolumnname+" = ? and orderid IS NULL";
							ps2 = conn.prepareStatement(sql);
							
							ps2.setLong(1, quantity);
							ps2.setLong(2, productid);
							ps2.setLong(3, userid);
						}
						
						
						
						
						result1 = ps2.executeUpdate();
						if (result1 > 0)
						{
							ps3 = conn.prepareStatement("select count(quantity) as itemsinCart from cart where "+usertypecolumnname+" = ?  and orderid is null");
							ps3.setLong(1, userid);
							rs2 = ps3.executeQuery();
							if (rs2.next())
							{
								int itemsinCart = rs2.getInt("itemsinCart");
								parentjson.put("itemsinCart", itemsinCart);
							}
							else
							{
								parentjson.put("itemsinCart", 0);
							}
							parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2011);
						}
						
						output = parentjson.toString();
						// System.out.println("output ::::::::: "+output);
						return output;
					}
					
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;

					
				case 1051: // -- Customer/Shopkeeper Login //
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);

						String email = (String) object.get("emailLogin");
						String normalPwd = (String) object.get("passLogin");
						String userType = (String) object.get("userType");
						String otpLogin = (String) object.get("otpLogin");
						String ipaddress = (String) object.get("ipaddress");
						String sql = "";
						String usertypecolumnname = "";

						if (userType != null && userType.trim().equalsIgnoreCase("customer"))
						{
							parentjson = CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson);
							sql = "update customers set active = 1 where email = ?";
							usertypecolumnname = "customer_key"; 
						}
						else if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							parentjson = CommonMethodImpl.getShopkeeperDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson);
							sql = "update suppliers set active = 1 where email = ?";
							usertypecolumnname = "supplier_key";
						}
						// -- Unregistered user
						if (otpLogin != null && !otpLogin.trim().isEmpty())
						{
							if (parentjson.get("active") != null && parentjson.get("active").toString().equalsIgnoreCase("0"))
							{
								if (otpLogin != null && otpLogin.trim().equals((String) parentjson.get("otp")))
									{
									String encryptedPwd = EncryptionUtility.encryptUsingMD5(normalPwd);
									if(encryptedPwd != null)
									{
										boolean validPwd = EncryptionUtility.validatePassword((String) parentjson.get("password"), encryptedPwd);
	
										if (validPwd)
										{
											ps = conn.prepareStatement(sql);
											ps.setString(1, email);
											result = ps.executeUpdate();
											if (result > 0)
											{
												parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2051);
												parentjson.put("userType", userType);
											}
											else
											{
												parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
											}
										}
										else // -- Incorrect password
										{
											parentjson = new JSONObject();
											parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
											parentjson.put("statusdesc", "Login Failed, Incorrect username or password.");
											System.out.println("Login Failed, Incorrect username or password.");
										}
									}
									else // --  Encryption of password failed
									{
										parentjson.put("status", 10);// --  Encryption of password failed
										parentjson.put("statusdesc", "Login Failed,Please try again");
										parentjson.put("command", command);
										System.out.println("Encryption of password failed,Unregistered user");
									}
								}
								else
								// -- otp
								{
//									parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
									parentjson.put("status", 10);// email already exist
									parentjson.put("statusdesc", "Invalid OTP. Please check your mail or mobile for the valid OTP");
									parentjson.put("command", command);
								}
							
							}
							else
							// -- inactive
							{
								parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
							}
						}// -- Registered user
						else if (parentjson.get("active") != null && parentjson.get("active").toString().equalsIgnoreCase("0"))
						{
							parentjson.put("status", 10);// email already exist
							parentjson.put("statusdesc", "Your account is not yet verified. Please enter your verification code(OTP)");
							parentjson.put("command", command);	
						}
						else
						{
							String encryptedPwd = EncryptionUtility.encryptUsingMD5(normalPwd);
//							System.out.println("encryptedPwd : "+encryptedPwd);
							if(encryptedPwd != null)
							{
								boolean validPwd = EncryptionUtility.validatePassword((String) parentjson.get("password"), encryptedPwd);
								
								if (validPwd)
								{
//									insert into login_log(supplier_key,ipaddress,login_datetime) values(6,'192.168.2.119',now());
									try
									{
										ps2 = conn.prepareStatement("insert into login_log("+usertypecolumnname+",ipaddress,login_datetime) values(?,?,now())");
										ps2.setLong(1, (Long) parentjson.get("key"));
										ps2.setString(2, ipaddress);
										result1 = ps2.executeUpdate();
										if (result1 > 0)
										{
											parentjson.put("loginlog", "Login log successfull");
											
											ps3 = conn.prepareStatement("select count(quantity) as itemsinCart from cart where "+usertypecolumnname+" = ?  and orderid is null");
											ps3.setLong(1, (Long) parentjson.get("key"));
											rs2 = ps3.executeQuery();
											if (rs2.next())
											{
												int itemsinCart = rs2.getInt("itemsinCart");
												parentjson.put("itemsinCart", itemsinCart);
											}
											else
											{
												parentjson.put("itemsinCart", 0);
											}
											
										}
									}
									catch(Exception e)
									{
										e.printStackTrace();
										mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
									}
									parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2051);
									parentjson.put("userType", userType);
								}
								else
								{
									parentjson = new JSONObject();
									parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
									parentjson.put("statusdesc", "Login Failed, Incorrect username or password.");
								}
							}
							else
							{
								parentjson.put("status", 10);// Encryption of password failed
								parentjson.put("statusdesc", "Login Failed,Please try again");
								parentjson.put("command", command);
								System.out.println("Encryption of password failed,Registered user");
							}
						}

						output = parentjson.toString();
						// System.out.println("output ::::::::: "+output);
						return output;
					}

					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;

				case 1052: // -- Customer/Shopkeeper Registration and Email
							// Verification //
					try
					{
						SendMessage sm = new SendMessage();
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
						String userType = (String) object.get("userType");
						String emailSignUp = (String) object.get("emailKey");

						String sqlInsert = "";
						String emailExist = "";
						String tempOtp = "";
						String user = "";
						int checkEmailExist = 0;

						if (userType != null && userType.trim().equalsIgnoreCase("customer"))
						{
							emailExist = "select email from customers";
							sqlInsert = "insert into customers(email,phone,password) values(?,?,?)";
							user = "customers";
						}

						if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							emailExist = "select email from suppliers";
							sqlInsert = "insert into suppliers(email,phone,password) values(?,?,?)";
							user = "suppliers";
						}

						ps = conn.prepareStatement(emailExist);
						rs = ps.executeQuery();
						while (rs.next())
						{
							String dbEmail = rs.getString("email");
							if (emailSignUp.equals(dbEmail))
							{
								checkEmailExist++;
							}
						}

						if (checkEmailExist == 0)
						{
							String normalPwd = (String) object.get("passSignUp");
							
							String encryptedPwd = EncryptionUtility.encryptUsingMD5(normalPwd);
							
							if(encryptedPwd != null)
							{
								ps = conn.prepareStatement(sqlInsert);
	
								// String usernameSignUp = (String)
								// object.get("usernameSignUp");
	
								ps.setString(1, emailSignUp);
								// ps.setString(2, usernameSignUp);
								ps.setString(2, (String) object.get("mobileKey"));
								ps.setString(3, encryptedPwd);
	//							ps.setString(4, (String) object.get("firstNameSignUp"));
	
								try
								{
									result = ps.executeUpdate();
								}
								catch (Exception e)
								{
									e.printStackTrace();
									mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
								}
	
								if (result > 0)
								{
									String sql1 = "";
	
									tempOtp = RandomStringUtilsTrial.orderNumber();
	
									if (tempOtp != null && !tempOtp.trim().isEmpty())
									{
										boolean verification = EmailUtility.sendEmail(emailSignUp, null, OTP_REGISTER, tempOtp);
	//									if (userType != null && userType.trim().equalsIgnoreCase("customer"))
	//									{
	//										user = "customers";
	//									}
	//									else if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
	//									{
	//										user = "suppliers";
	//									}
	
										if (verification)
										{
											sql1 = "update " + user + " set otp = ? where email = ?";
											ps1 = conn.prepareStatement(sql1);
											ps1.setString(1, tempOtp);
											ps1.setString(2, emailSignUp);
											resultTemp = ps1.executeUpdate();
											if (resultTemp > 0)
											{
												boolean result = sm.sendMessage("+91"+(String) object.get("mobileKey"),tempOtp);
												parentjson = new JSONObject();
												parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2052);// succcess
												parentjson.put("email", emailSignUp);
												parentjson.put("statusdesc", "Success");
											}
											else
											{
												parentjson.put("status", 11);// OTP
																				// Updation
																				// Failed
												parentjson.put("statusdesc", "OTP Updation Failed");
												parentjson.put("command", command);
											}
										}
										else
										{
											parentjson.put("status", 12);// //Email
																			// sending
																			// Failed
											parentjson.put("email", emailSignUp);
											parentjson.put("statusdesc", "Email sending Failed");
											parentjson.put("command", command);
										}
									}
									else
									{
										// OTP generation Failed
										parentjson.put("status", 12);// //Email
																		// sending
																		// Failed
										parentjson.put("email", emailSignUp);
										parentjson.put("statusdesc", "Email sending Failed");
										parentjson.put("command", command);
									}
	
								}
								else
								{
									parentjson = CommonMethodImpl.putFailedJson(parentjson, command);// Registeration
																										// failed
									parentjson.put("statusdesc", "Registration failed");// Registeration
																						// failed
									parentjson.put("command", command);
								}
						}
							else
							{
								parentjson = CommonMethodImpl.putFailedJson(parentjson, command);// Encryption password failed
								parentjson.put("statusdesc", "Registration failed");// Registeration failed
								System.out.println("Encrypting password failed");
								parentjson.put("command", command);
							}

						}
						else
						{
							parentjson.put("status", 10);// email already exist
							parentjson.put("statusdesc", "Email Id Already exist, please try registering  with other Email-id");
							parentjson.put("command", command);

							checkEmailExist = 0;
						}
						output = parentjson.toString();
						// System.out.println("output ::::::::: "+output);
						return output;
					}
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;

				/*
				 * case 1053: // -- Customer Username availability // try {
				 * JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
				 * 
				 * String custUsername = (String) object.get("usernameSignUp");
				 * 
				 * parentjson =
				 * CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl
				 * .USERNAME, custUsername,object ,parentjson);
				 * 
				 * if(parentjson != null) { parentjson =
				 * CommonMethodImpl.putSuccessJson(parentjson, 2000);
				 * parentjson.put("command", 2053); } else { parentjson =
				 * CommonMethodImpl.putFailedJson(parentjson, command);
				 * 
				 * }
				 * 
				 * output = parentjson.toString();
				 * //System.out.println("output ::::::::: "+output); return
				 * output; }
				 * 
				 * catch (Exception e) 
				 * { 
				 * 		e.printStackTrace();
				 * 		mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0); 
				 * } break;
				 */

				case 1054: // -- Forgot/Shopkeeper Password Customer//
					try
					{
						String tempOtp = "";
						String sql1 = "";
						String user = "";
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);

						String email = (String) object.get("emailForgotPwd");
						String userType = (String) object.get("userType");

						// -- for customer
						if (userType != null && userType.trim().equalsIgnoreCase("customer"))
						{
							if (email != null && !email.trim().isEmpty())
								parentjson = CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson);
							
							user = "customers";
						}

						// -- for supplier
						if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							if (email != null && !email.trim().isEmpty())
								parentjson = CommonMethodImpl.getShopkeeperDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson);
							
							user = "suppliers";
						}
						if (parentjson != null && !parentjson.isEmpty())
						{
							tempOtp = RandomStringUtilsTrial.orderNumber();
							
							if (tempOtp != null && !tempOtp.trim().isEmpty())
							{
								boolean verification = EmailUtility.sendEmail((String) parentjson.get("emailId"), (String) parentjson.get("password"), FORGOT_PASSWORD, tempOtp);
								if(verification)
								{
									String encryptedPwd = EncryptionUtility.encryptUsingMD5(tempOtp); // -- otp set as pwd 
								
									if(encryptedPwd != null)
									{
										sql1 = "update " + user + " set password = ? where email = ?";
										ps1 = conn.prepareStatement(sql1);
										ps1.setString(1, encryptedPwd); // -- set otp as password
										ps1.setString(2, email);
										resultTemp = ps1.executeUpdate();
										
										if (resultTemp > 0)
										{
											parentjson = new JSONObject();
											parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2054);// succcess
											parentjson.put("email", email);
											parentjson.put("statusdesc", "Success");
											System.out.println("OTP as password updation succeeded");
										}
										else
										{
											parentjson.put("status", 11);// OTP Updation Failed
											parentjson.put("statusdesc", "OTP as password updation failed");
											parentjson.put("command", command);
											System.out.println("OTP as password updation failed");
										}
									}
									else
									{
										parentjson.put("status", 10);// Encryption of password failed
										parentjson.put("statusdesc", "Forgot Password Failed,Please try again");
										parentjson.put("command", command);
										System.out.println("Encryption of password failed,Forgot password");
									}
								}
								else
								{
									parentjson.put("status", 12); //Email sending Failed
									parentjson.put("email", email);
									parentjson.put("statusdesc", "Email sending Failed");
									parentjson.put("command", command);
									System.out.println("Email sending failed");
								}
							}
							else
							{
								// OTP generation Failed
								parentjson.put("status", 12);// OTP generation failed
								parentjson.put("email", email);
								parentjson.put("statusdesc", "Email sending Failed");
								parentjson.put("command", command);
								System.out.println("OTP generation failed");
							}
						}
						else
						{
							parentjson = new JSONObject();
							parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
							parentjson.put("statusdesc", "Email-Id " + email + " does not exist");
						}
						output = parentjson.toString();
						// System.out.println("output ::::::::: "+output);
						return output;

					}
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}

					break;

				case 1055: // -- Save Customer/Shopkeepers Details //
					try
					{
						Long pincode = 0L;
						Long key = 0L;
						String sql = null;
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);

						// String usernameCust = (String)
						// object.get("usernameForgotPwd");
						String firstName = (String) object.get("firstName");
						String lastName = (String) object.get("lastName");
						String mobileNo = (String) object.get("mobileNo");
						String email = (String) object.get("email");
						String address1 = (String) object.get("address1");
						String address2 = (String) object.get("address2");
						String state = (String) object.get("state");
						String city = (String) object.get("city");
						String street = (String) object.get("street");
						String userType = (String) object.get("userType");

						if (object.get("pincode") != null)
							pincode = (Long) object.get("pincode");
						
						if (object.get("key") != null)
							key = (Long) object.get("key");
						
						if(userType != null && userType.trim().equalsIgnoreCase("customer"))
							sql = "update customers set ";
						
						else if(userType != null && userType.trim().equalsIgnoreCase("supplier"))
							sql = "update suppliers set ";
						
						if (firstName != null && !firstName.trim().isEmpty())
							sql += " first_name = '" + firstName + "' ";

						if (lastName != null && !lastName.trim().isEmpty())
							sql += " ,last_name = '" + lastName + "' ";

						if (mobileNo != null && !mobileNo.trim().isEmpty())
							sql += " ,phone = '" + mobileNo + "' ";

//						if (email != null && !email.trim().isEmpty())
//							sql += " ,email = '" + email + "' ";

						if (firstName != null && !firstName.trim().isEmpty()) // -- Personal Details
						{
							parentjson.put("saveType", "personalDetail");
						}
						else // -- Address Details
						{
							if (address1 != null && !address1.trim().isEmpty())
							{
								sql += " address1 = '" + address1 + "' ";
								parentjson.put("saveType", "address");
							}
						}

						if (address2 != null && !address2.trim().isEmpty())
							sql += " ,address2 = '" + address2 + "' ";
						
						sql += " ,country = 'India' ";

						if (state != null && !state.trim().isEmpty())
							sql += " ,state = '" + state + "' ";

						if (city != null && !city.trim().isEmpty())
							sql += " ,city = '" + city + "' ";

						if (street != null && !street.trim().isEmpty())
							sql += " ,street = '" + street + "' ";

						if (pincode != 0)
							sql += " ,postal_code = " + pincode + " ";
						
						if(userType != null && key != null && userType.trim().equalsIgnoreCase("customer"))
						{
							sql += "where customer_key = ?";
							parentjson = CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson);
						}
						
						else if(userType != null  && key != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							sql += "where supplier_key = ?";
							parentjson = CommonMethodImpl.getShopkeeperDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson);
						}
						
						if (email != null && !email.trim().isEmpty())
							sql += " and email = ? ";

						ps = conn.prepareStatement(sql);
						ps.setLong(1, key);
						if (email != null && !email.trim().isEmpty())
							ps.setString(2, email);
						
						result = ps.executeUpdate();

						if (result > 0)
						{
							if(userType != null && key != null && userType.trim().equalsIgnoreCase("customer"))
							{
								parentjson = CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson);
							}
							else if(userType != null  && key != null && userType.trim().equalsIgnoreCase("supplier"))
							{
								parentjson = CommonMethodImpl.getShopkeeperDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson);
							}
							
							parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2055);
							
						}

						else
						{
							parentjson = new JSONObject();
							parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
							parentjson.put("statusdesc", "Updation failed");
						}

						output = parentjson.toString();
						// System.out.println("output ::::::::: "+output);
						return output;

					}
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}

					break;

				case 1056: // -- Reset Password Cust/Shopkeeper Details //
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
						
//						String sqlSelect = "";
						String sqlUpdate = "";
//						String tempPwd = null;
						
//						String usernameCust = (String) object.get("usernameForgotPwd");
//						String oldPwd = (String) object.get("oldPwd");
						String normalPwd = (String) object.get("pwd");
						String email = (String) object.get("email");
						String userType = (String) object.get("userType");
						
						if (normalPwd != null && !normalPwd.trim().isEmpty())
						{
							if(userType.trim().equalsIgnoreCase("customer"))
							{
//								sqlSelect = "select password from customers where email = ?";
								sqlUpdate = "update customers set password = ? where email = ?";
							}
							else if(userType.trim().equalsIgnoreCase("supplier"))
							{
//								sqlSelect = "select password from suppliers where email = ?";
								sqlUpdate = "update suppliers set password = ? where email = ?";
							}
							
							String encryptedPwd = EncryptionUtility.encryptUsingMD5(normalPwd);
							if(encryptedPwd != null)	
							{
								ps = conn.prepareStatement(sqlUpdate);
								ps.setString(1, encryptedPwd);
								ps.setString(2, email);
								result = ps.executeUpdate();
								if (result > 0)
								{
									boolean verification = EmailUtility.sendEmail(email, null, CHANGE_PASSWORD, null);
									if(verification)
									{
										parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2056);
										System.out.println("Email sending success");
									}
									else
									{
										parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
										parentjson.put("statusdesc", "Error occurred during sending email,Please try again");
										System.out.println("Email sending failed");
									}
								}
								else
								{
									parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
									parentjson.put("statusdesc", "Error occurred during reset,Please try again");
									System.out.println("Error occurred during update query of reset");
								}
							}
							else
							{
								parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
								parentjson.put("statusdesc", "Error occurred,Please try again");
								System.out.println("Error occurred during encryption");
							}

						}
						else
						{
							parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
						}

						output = parentjson.toString();
						// System.out.println("output ::::::::: "+output);
						return output;

					}
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;
					
				case 1057: // -- Update Customer/Shopkeepers Profile Image //
					try
					{
						Long key = 0L;
						String sql = null;
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);

						String profileImg = (String) object.get("profileImg");
						String userType = (String) object.get("userType");
						String email = (String) object.get("email");
						
						if (object.get("key") != null)
							key = (Long) object.get("key");
						
						if(userType != null && userType.trim().equalsIgnoreCase("customer"))
							sql = "update customers set ";
						
						else if(userType != null && userType.trim().equalsIgnoreCase("supplier"))
							sql = "update suppliers set ";
						
						if (profileImg != null && !profileImg.trim().isEmpty())
							sql += " profile_img = '" + profileImg + "' ";

						if(userType != null && key != null && userType.trim().equalsIgnoreCase("customer"))
						{
							sql += "where customer_key = ?";
						}
						
						else if(userType != null  && key != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							sql += "where supplier_key = ?";
						}
						
						if (email != null && !email.trim().isEmpty())
							sql += " and email = ? ";

						ps = conn.prepareStatement(sql);
						ps.setString(1, profileImg);
						ps.setLong(2, key);
						if (email != null && !email.trim().isEmpty())
							ps.setString(3, email);
						
						result = ps.executeUpdate();

						if (result > 0)
						{
							parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2057);
							parentjson.put("profileImg", profileImg);
						}

						else
						{
							parentjson = new JSONObject();
							parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
							parentjson.put("statusdesc", "Updation failed");
							System.out.println("Updation failed");
						}

						output = parentjson.toString();
						// System.out.println("output ::::::::: "+output);
						return output;

					}
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}

					break;

				default:

					break;
			}

			return output;

		}
		catch (Exception e)
		{
			e.printStackTrace();
			mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
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
			mms = null;
		}

	}

}
