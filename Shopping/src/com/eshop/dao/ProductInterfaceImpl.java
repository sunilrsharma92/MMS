package com.eshop.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;

import com.eshop.database.utility.EmailUtility;
import com.eshop.database.utility.MyConnection;
import com.eshop.database.utility.RandomStringUtilsTrial;
import com.shopping.common.CommonMethodImpl;

public class ProductInterfaceImpl implements ProductInterface
{

	JSONObject parentjson = new JSONObject();
	JSONArray jsonarray = new JSONArray();
	JSONArray jsonarray1 = new JSONArray();
	PreparedStatement ps, ps1, ps2 = null;
	Connection conn = null;
	ResultSet rs, rs1 = null;
	int result, resultTemp = 0;
	String output = null;

	public static final String OTP_REGISTER = "otpRegister";
	public static final String FORGOT_PASSWORD = "ForgotPassword";

	@Override
	public String handleRequestResponse(String jsonMsg, int command)
	{
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
					}
					break;

				case 1001: // -- Update shop profile.//
					try
					{
						JSONObject parentjson = (JSONObject) JSONValue.parse(jsonMsg);

						String sql = "update suppliers set address1 = ?, city = ?, state = ?, postal_code = ?,contact_fname = ?, contact_lname = ?  where supplier_key = ?";
						ps = conn.prepareStatement(sql);
						ps.setString(1, (String) parentjson.get("address"));
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
							/*
							 * String sqlSelect = ""; sqlSelect =
							 * "select * from suppliers where supplier_key = ?";
							 * ps1 = conn.prepareStatement(sqlSelect);
							 * ps1.setLong(1, 1); rs1 = ps1.executeQuery();
							 */

							// if(rs1.next())
							// {
							/*
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
							 */

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
					}
					break;

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
						parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2003);

						output = parentjson.toString();
						// //System.out.println("output ::::::::: "+output);
						return output;
					}
					catch (Exception e)
					{
						e.printStackTrace();
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
						// System.out.println("product : "+product);

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
						// System.out.println("output ::::::::: "+output);
						// return output;
						// e.printStackTrace();
					}

					break;

				case 1006:
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
						//
						String product = (String) object.get("txt");
						// System.out.println("txt : "+product);

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
						return output;
					}
					catch (Exception e)
					{
						e.printStackTrace();
					}
					break;

				case 1010: // -- Supplier/ Shop Profile info on load of page //
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);

						String sqlSelect = "";
						sqlSelect = "select * from suppliers where supplier_key = ?";
						ps1 = conn.prepareStatement(sqlSelect);
						ps1.setLong(1, (Long) object.get("supplierKey")); // --
																			// supplier
																			// key
																			// is
																			// to
																			// be
																			// inserted
						rs1 = ps1.executeQuery();

						if (rs1.next())
						{
							parentjson.put("supKey", rs1.getLong("supplier_key"));
							parentjson.put("supFirstName", rs1.getString("contact_fname"));
							parentjson.put("supLastName", rs1.getString("contact_lname"));
							parentjson.put("supAddress", rs1.getString("address1"));
							parentjson.put("supCity", rs1.getString("city"));
							parentjson.put("supState", rs1.getString("state"));
							parentjson.put("supPinCode", rs1.getLong("postal_code"));

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
					}
					break;

				case 1051: // -- Customer/Shopkeeper Login //
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);

						String email = (String) object.get("emailLogin");
						String password = (String) object.get("passLogin");
						String userType = (String) object.get("userType");
						String otpLogin = (String) object.get("otpLogin");
						String sql = "";

						if (userType != null && userType.trim().equalsIgnoreCase("customer"))
						{
							parentjson = CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, object, parentjson);
							sql = "update customers set active = 1 where email = ?";
						}
						else if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							parentjson = CommonMethodImpl.getShopkeeperDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, object, parentjson);
							sql = "update suppliers set active = 1 where email = ?";
						}
						// -- Unregistered user
						if (otpLogin != null && !otpLogin.trim().isEmpty())
						{
							if (parentjson.get("active") != null && parentjson.get("active").toString().equalsIgnoreCase("0"))
							{
								if (otpLogin != null && otpLogin.trim().equalsIgnoreCase((String) parentjson.get("otp")))
								{

									if (password != null && parentjson.get("password") != null && password.trim().equals(parentjson.get("password")))
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
									else
									// -- password
									{
										parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
									}
								}
								else
								// -- otp
								{
									parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
								}
							}
							else
							// -- inactive
							{
								parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
							}
						}// -- Registered user
						else
						{
							if (password != null && parentjson.get("password") != null && password.trim().equals(parentjson.get("password")))
							{
								parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2051);
								parentjson.put("userType", userType);
							}
							else
							{
								parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
							}
						}

						output = parentjson.toString();
						// System.out.println("output ::::::::: "+output);
						return output;
					}

					catch (Exception e)
					{
						e.printStackTrace();
					}
					break;

				case 1052: // -- Customer/Shopkeeper Registration and Email
							// Verification //
					try
					{
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
							sqlInsert = "insert into customers(email,phone,password,first_name) values(?,?,?,?)";
							user = "customers";
						}

						if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							emailExist = "select email from suppliers";
							sqlInsert = "insert into suppliers(email,phone,password,first_name) values(?,?,?,?)";
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
							ps = conn.prepareStatement(sqlInsert);

							// String usernameSignUp = (String)
							// object.get("usernameSignUp");

							ps.setString(1, emailSignUp);
							// ps.setString(2, usernameSignUp);
							ps.setString(2, (String) object.get("mobileKey"));
							ps.setString(3, (String) object.get("passSignUp"));
							ps.setString(4, (String) object.get("firstNameSignUp"));

							try
							{
								result = ps.executeUpdate();
							}
							catch (Exception e)
							{
								e.printStackTrace();
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
				 * catch (Exception e) { e.printStackTrace(); } break;
				 */

				case 1054: // -- Forgot/Shopkeeper Password Customer//
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);

						String email = (String) object.get("emailForgotPwd");
						String userType = (String) object.get("userType");

						// -- for customer
						if (userType != null && userType.trim().equalsIgnoreCase("customer"))
						{
							if (email != null && !email.trim().isEmpty())
								parentjson = CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, object, parentjson);
						}

						// -- for supplier
						if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							if (email != null && !email.trim().isEmpty())
								parentjson = CommonMethodImpl.getShopkeeperDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, object, parentjson);
						}
						if (parentjson != null && !parentjson.isEmpty())
						{
							EmailUtility.sendEmail((String) parentjson.get("emailId"), (String) parentjson.get("password"), FORGOT_PASSWORD, null);
							parentjson = new JSONObject();
							parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2054);
							parentjson.put("email", email);
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
					}

					break;

				case 1055: // -- Save Customer/Shopkeepers Details //
					try
					{
						Long custPincode = 0L;
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

						if (object.get("custPincode") != null)
							custPincode = (Long) object.get("custPincode");

						String sql = "update customers set ";

						if (firstName != null && !firstName.trim().isEmpty())
							sql += " first_name = '" + firstName + "' ";

						if (lastName != null && !lastName.trim().isEmpty())
							sql += " ,last_name = '" + lastName + "' ";

						if (mobileNo != null && !mobileNo.trim().isEmpty())
							sql += " ,phone = '" + mobileNo + "' ";

						if (email != null && !email.trim().isEmpty())
							sql += " ,email = '" + email + "' ";

						if (firstName != null && !firstName.trim().isEmpty()) // --
																				// Personal
																				// Details
						{
							if (address1 != null && !address1.trim().isEmpty())
								sql += " ,address1 = '" + address1 + "' ";
						}
						else
						// -- Address Details
						{
							if (address1 != null && !address1.trim().isEmpty())
								sql += " address1 = '" + address1 + "' ";
						}

						if (address2 != null && !address2.trim().isEmpty())
							sql += " ,address2 = '" + address2 + "' ";

						if (state != null && !state.trim().isEmpty())
							sql += " ,state = '" + state + "' ";

						if (city != null && !city.trim().isEmpty())
							sql += " ,city = '" + city + "' ";

						if (street != null && !street.trim().isEmpty())
							sql += " ,street = '" + street + "' ";

						if (custPincode != 0)
							sql += " ,postal_code = " + custPincode + " ";

						sql += "where customer_key = ?";

						ps = conn.prepareStatement(sql);
						ps.setInt(1, 6);
						result = ps.executeUpdate();

						if (result > 0)
						{
							parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2055);
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
					}

					break;

				case 1056: // -- Reset Password Cust/Shopkeeper Details //
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);

						String usernameCust = (String) object.get("usernameForgotPwd");
						String pwd = (String) object.get("pwd");
						String email = (String) object.get("email");
						String userType = (String) object.get("userType");

						if (pwd != null && !pwd.trim().isEmpty())
						{
							if (userType != null && userType.trim().equalsIgnoreCase("customer"))
							{
								String sql = "update customers set password = ? where email = ?";
								ps = conn.prepareStatement(sql);
								ps.setString(1, pwd);
								ps.setString(2, email);
								result = ps.executeUpdate();
								if (result > 0)
								{
									parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2056);
								}
								else
								{
									parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
								}
							}
							else if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
							{
								String sql = "update suppliers set password = ? where email = ?";
								ps = conn.prepareStatement(sql);
								ps.setString(1, pwd);
								ps.setString(2, email);
								result = ps.executeUpdate();
								if (result > 0)
								{
									parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2056);
								}
								else
								{
									parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
								}
							}
							else
							{
								parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
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
