package com.eshop.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

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
	SendMessage sm = null;
	PreparedStatement ps, ps1, ps2, ps3, ps4 = null;
	Connection conn = null;
	ResultSet rs, rs1, rs2, rs3, rs4 = null;
	int result, result1, result2, resultTemp = 0;
	String output = null;

	public static final String OTP_REGISTER = "otpRegister";
	public static final String FORGOT_PASSWORD = "ForgotPassword";
	public static final String CHANGE_PASSWORD = "changPassword";
	public static final String PURCHASE_DETAILS = "purchaseDetails";

	@Override
	public String handleRequestResponse(String jsonMsg, int command, String DBData, String regsmsTemplet)
	{
		mms = new MakemyshopyLogger();
		try
		{
			conn = MyConnection.getConnection(DBData);

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
							// ////System.out.println("jsonarray : :  : :"+jsonarray);
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
						// ////System.out.println("output ::::::::: "+output);
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

						// //System.out.println("Sunil before:"+parentjson.toJSONString());

						parentjson.remove("command");

						// //System.out.println("Sunil before:"+parentjson.toJSONString());

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
						// //System.out.println("output ::::::::: "+output);
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
						try
						{
							JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
							String action = (String) object.get("action");
							if(action.equals("shop"))
							{
								ps = conn.prepareStatement("select company_name, profile_img from suppliers");
							}
							else if(action.equals("prod"))
							{
								ps = conn.prepareStatement("select product_name, picture from products");
							}
							
//							
							rs = ps.executeQuery();
							while (rs.next())
							{
//								JSONObject childjson = new JSONObject();
								
//								String productList = "<table><tr><td class='cimg'><img class='cartimgsize' src='" + rs.getString("picture") + "'></td>" 
//																 + "<td class='cname'>" + rs.getString("product_name") + "</td></tr></table>";
								if(action.equals("shop"))
								{
									String companyName = rs.getString("company_name");
									if(companyName != null)
									{
										jsonarray.add(rs.getString("company_name"));
									}
									
								}
								else if(action.equals("prod"))
								{
									String productName = rs.getString("product_name");
									if(productName != null)
									{
										jsonarray.add(rs.getString("product_name"));
									}
//									childjson.put("name", rs.getString("product_name"));
//									childjson.put("icon", rs.getString("picture"));
								}
//								
								
								
							}
							
							parentjson.put("autoCompleteLabel", jsonarray);
							parentjson.put("action", action);
							
							parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2002);
							
							output = parentjson.toString();
							return output;
						}
						catch (Exception e)
						{
							e.printStackTrace();
							mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
						}
					break;

				case 1003:
					try
					{
						// {"mainCategoryID":7,"command":1003,"subCategoryID":"1"}
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);

						// //System.out.println("Object : "+object.toString());

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
						
						// ////System.out.println("mc : "+mc+" sc : "+sc);

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
							// ////System.out.println("jsonarray : :  : :"+jsonarray);
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
								// //System.out.println("jsonarray : :  : :"+jsonarray);
							}
							parentjson.put("productid", jsonarray1);
						}
						
						
						parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2003);
						output = parentjson.toString();
						// ////System.out.println("output ::::::::: "+output);
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
						// //System.out.println("jsonMsg of product in cart ::::::::::::::: "+jsonMsg);

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
						
						// //System.out.println("product : "+product);
						if(action.equalsIgnoreCase("withlogin"))
						{
							ps1 = conn.prepareStatement("select * from cart where "+usertypecolumnname+" = ?  and orderid is null");
							ps1.setLong(1, userid);

							rs1 = ps1.executeQuery();
							while (rs1.next())
							{
								Long productkey = rs1.getLong("productid");
								Long quantity = rs1.getLong("quantity");
								Long shopkey = rs1.getLong("shopid");
								
								ps = conn.prepareStatement("select * from products where product_key=? and supplier_ref=?");
								ps.setLong(1, productkey);
								ps.setLong(2, shopkey);

								rs = ps.executeQuery();
								while (rs.next())
								{
									JSONObject childjson = new JSONObject();
									childjson.put("productid", rs.getLong("product_key"));
									childjson.put("price", rs.getFloat("unite_price"));
									childjson.put("stock", rs.getFloat("units_in_stock"));
									childjson.put("prodName", rs.getString("product_name"));
									childjson.put("images", rs.getString("picture"));
									childjson.put("quantity", quantity);

									jsonarray.add(childjson);
									// //System.out.println("jsonarray : :  : :"+jsonarray);
								}
							}
						}
						else if(action.equalsIgnoreCase("withoutlogin"))
						{
							String[] productid = product.split("#");
							for (int i = 0; i < productid.length; i++)
							{
								String id = "";
								String shopid = "";
								Long productkey = (long) 0;
								Long shopkey = (long) 0;
								
								String[] prodarr = productid[i].split("/");
								
								for (int j = 0; j < prodarr.length; j++)
								{
									id = prodarr[0];
									shopid = prodarr[1];
								}
								// String id = (String) productid.get(i);
								productkey = Long.parseLong(id);
								shopkey = Long.parseLong(shopid);
								// //System.out.println(productkey);

								ps = conn.prepareStatement("select * from products where product_key=? and supplier_ref=?");
								ps.setLong(1, productkey);
								ps.setLong(2, shopkey);

								rs = ps.executeQuery();
								while (rs.next())
								{
									JSONObject childjson = new JSONObject();
									childjson.put("productid", rs.getLong("product_key"));
									childjson.put("price", rs.getFloat("unite_price"));
									childjson.put("stock", rs.getFloat("units_in_stock"));
									childjson.put("prodName", rs.getString("product_name"));
									childjson.put("images", rs.getString("picture"));
									childjson.put("quantity", 1);
									jsonarray.add(childjson);
									// //System.out.println("jsonarray : :  : :"+jsonarray);
								}
							}
						}
						
						parentjson.put("product", jsonarray);
						parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2005);

						output = parentjson.toString();
						// //System.out.println("output ::::::::: "+output);
						return output;
					}
					catch (Exception e)
					{
						parentjson = CommonMethodImpl.putFailedJson(parentjson, command);

						output = parentjson.toString();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
						// //System.out.println("output ::::::::: "+output);
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
						String action = (String) object.get("action");
						Long shopid = (Long) object.get("shopid");
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
						
						JSONObject objparentjson = searchKeyword.searchProduct(product, action, shopid, DBData);
						
						if(action.equals("product") && userid != null  && userid != 0)
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
								// //System.out.println("jsonarray : :  : :"+jsonarray);
							}
							objparentjson.put("productid", jsonarray1);
						}
						
						if(action.equals("product"))
						{
							objparentjson = CommonMethodImpl.putSuccessJson(objparentjson, 2003);
						}
						else if(action.equals("shop"))
						{
							objparentjson = CommonMethodImpl.putSuccessJson(objparentjson, 2006);
						}
						
						
							output = objparentjson.toString();
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
						
						parentjson = CommonMethodImpl.getShippingDetails(usertype, key, parentjson, "address", jsonarray, DBData);
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
						// ////System.out.println("output ::::::::: "+output);
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
						parentjson = CommonMethodImpl.getShopkeeperDetailsByProperty("supplier_key", supplierKey, parentjson, DBData);
						if(parentjson != null)
						{
							parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2010);
						}
						else
						{
							parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
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
				case 1011: //Add product to cart to database //
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);

						Long userid = (Long) object.get("userid");
						Long shopid = (Long) object.get("shopid");
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
							ps1 = conn.prepareStatement("select * from cart where "+usertypecolumnname+" = ? and productid = ? and shopid = ? and orderid is null");
							ps1.setLong(1, userid);
							ps1.setLong(2, productid);
							ps1.setLong(3, shopid);
	
							rs1 = ps1.executeQuery();
						
							while (rs1.next())
							{
								Long productkey = rs1.getLong("productid");
								Long quantityOld = rs1.getLong("quantity");
								Long shopkey = rs1.getLong("shopid");
									
								action = "update";
								quantity = quantity+quantityOld;
							}
						}
						
						if (action.trim().equalsIgnoreCase("add"))
						{
							sql = "insert into cart("+usertypecolumnname+", productid, quantity, ipaddress, datetime, shopid) values(?, ?, ?, ?, now(), ?)";
							ps2 = conn.prepareStatement(sql);
							
							ps2.setLong(1, userid);
							ps2.setLong(2, productid);
							ps2.setLong(3, quantity);
							ps2.setString(4, ipaddress);
							ps2.setLong(5, shopid);
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
						// //System.out.println("output ::::::::: "+output);
						return output;
					}
					
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;
					
				case 1012:
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
						
						Long userid = (Long) object.get("userid");
						String userType = (String) object.get("userType");
						Long productid = (Long) object.get("productid");
						String ipaddress = (String) object.get("ipaddress");
						String authorisedUser = (String) object.get("authoriseduser");
						
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
						else if (userType != null && authorisedUser.trim().equalsIgnoreCase("unauthorisedUser"))
						{
							usertypecolumnname = "ipaddress";
						}
						
							sql = "delete from cart where "+usertypecolumnname+" = ? and productid = ? and orderid is null";
							ps2 = conn.prepareStatement(sql);
							
							if(authorisedUser.trim().equalsIgnoreCase("authorisedUser"))
							{
								ps2.setLong(1, userid);
							}
							else if(authorisedUser.trim().equalsIgnoreCase("unauthorisedUser"))
							{
								ps2.setString(1, ipaddress);
							}
							
							ps2.setLong(2, productid);
						
							result1 = ps2.executeUpdate();
							if (result1 > 0)
							{
								parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2012);
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
					
				case 1013:
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
						
						Long userid = (Long) object.get("userid");
						String userType = (String) object.get("userType");
						String newAddress = (String) object.get("newAddress");
						float total = 0;
						String orderid = RandomStringUtilsTrial.orderNumber().toUpperCase();
						String sql = "";
						String usertypecolumnname = "";
						boolean addValidation = true;
						
						if (userType != null && userType.trim().equalsIgnoreCase("customer"))
						{
							usertypecolumnname = "customer_key"; 
						}
						else if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							usertypecolumnname = "supplier_key";
						}
						
						ps1 = conn.prepareStatement("select * from cart where "+usertypecolumnname+" = ?  and orderid is null");
						ps1.setLong(1, userid);

						rs1 = ps1.executeQuery();
						while (rs1.next())
						{
							Long productkey = rs1.getLong("productid");
							Long quantity = rs1.getLong("quantity");
							Long shopid = rs1.getLong("shopid");

							ps = conn.prepareStatement("select * from products where product_key=?");
							ps.setLong(1, productkey);

							rs = ps.executeQuery();
							while (rs.next())
							{
								float price = rs.getFloat("unite_price");
								float stock = rs.getFloat("units_in_stock");
								String prodName = rs.getString("product_name");
								String image = rs.getString("picture");
								
								total = quantity * price;
								stock = stock - quantity;
								
								ps2 = conn.prepareStatement("update cart c, products p set c.total=?, c.orderid=?, c.productname = ?, c.productimg = ?, c.productprice = ?, c.datetime = now(), c.status = ?, p.units_in_stock = ? where c."+usertypecolumnname+" = ? and c.productid = ? and p.product_key = ? and orderid is null");
								ps2.setFloat(1, total);
								ps2.setString(2, orderid);
								ps2.setString(3, prodName);
								ps2.setString(4, image);
								ps2.setFloat(5, price);
								ps2.setString(6, "Pending");
								ps2.setFloat(7, stock);
								ps2.setLong(8, userid);
								ps2.setLong(9, productkey);
								ps2.setLong(10, productkey);
								
								result1 = ps2.executeUpdate();
								if (result1 > 0)
								{
									parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2013);
									parentjson.put("orderid", orderid);
									
								}
								else
								{
									parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
									parentjson.put("statusdesc", "Something went wrong. Please try again..");
								}
							}
						}
						
						String addressQuery = "select shipping_address from shipping_address where "+usertypecolumnname+" = ?";
						ps3 = conn.prepareStatement(addressQuery);
						ps3.setLong(1, userid);
						rs2 = ps3.executeQuery();
						while(rs2.next())
						{
							String dbAddress = rs2.getString("shipping_address");
							if(dbAddress.equalsIgnoreCase(newAddress))
							{
								addValidation = false;
							}
							
						}
						
						if(addValidation == true)
						{
							String addAddressQuery = "insert into shipping_address("+usertypecolumnname+", shipping_address, orderid) values(?, ?, ?)";
							ps4 = conn.prepareStatement(addAddressQuery);
							ps4.setLong(1, userid);
							ps4.setString(2, newAddress);
							ps4.setString(3, orderid);
							result2 = ps4.executeUpdate();
							if(result2 > 0)
							{
								
							}
						}
						
						output = parentjson.toString();
						return output;
					}
					
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;
					
				case 1014:
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
						
						Long userid = (Long) object.get("userid");
						String userType = (String) object.get("userType");
						float total = 0;
						String sql = "";
						String usertypecolumnname = "";
						
						if (userType != null && userType.trim().equalsIgnoreCase("customer"))
						{
							usertypecolumnname = "customer_key";
						}
						else if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							usertypecolumnname = "shopid";
						}
						
						ps = conn.prepareStatement("select c.*, s.company_name, s.first_name, s.last_name, "
								+ "s.phone, s.address1, s.address2, s.city,"
								+ " s.state, s.street, s.postal_code, s.country, "
								+ "s.profile_img from cart c, suppliers s "
								+ "where c."+usertypecolumnname+" = ? and c.shopid = s.supplier_key and orderid is not null group by c.orderid order by datetime DESC");
						
						ps.setLong(1, userid);
						
						rs = ps.executeQuery();
						while (rs.next())
						{
							String keyName = null;
							JSONObject childjson = new JSONObject();
							long id = (long) 0;
							
							if(userType.trim().equalsIgnoreCase("customer"))
							{
								id = rs.getLong("customer_key");
								keyName = "customers";
							}
							else if(userType.trim().equalsIgnoreCase("supplier"))
							{
								String customer = ""+rs.getLong("customer_key");
								String supplier = ""+rs.getLong("supplier_key");
								if(!customer.equalsIgnoreCase("0"))
								{
									keyName = "customers";
								}
								if(!supplier.equalsIgnoreCase("0"))
								{
									keyName = "suppliers";
								}
								
								id = rs.getLong("supplier_key");
								
							}
							
							childjson.put("tablename", keyName);
							childjson.put("userid", id);
							childjson.put("orderid", rs.getString("orderid"));
							childjson.put("datetime", rs.getString("datetime"));
							childjson.put("shopid", rs.getLong("shopid"));
							childjson.put("companyname", rs.getString("company_name"));
							childjson.put("name", rs.getString("first_name")+" "+rs.getString("last_name"));
							childjson.put("phone", rs.getString("phone"));
							childjson.put("address1", rs.getString("address1"));
							childjson.put("address2", rs.getString("address2"));
							childjson.put("city", rs.getString("city"));
							childjson.put("state", rs.getString("state"));
							childjson.put("street", rs.getString("street"));
							childjson.put("pincode", rs.getString("postal_code"));
							childjson.put("country", rs.getString("country"));
							childjson.put("img", rs.getString("profile_img"));

							jsonarray.add(childjson);
							
						}
						parentjson.put("Order", jsonarray);
						parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2014);
						output = parentjson.toString();
						System.out.println("Output : "+output);
						return output;
					}
					
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;
					
				case 1015:
					try
					{
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
						
						Long userid = (Long) object.get("userid");
						String userType = (String) object.get("userType");
						String orderid = (String) object.get("orderid");
						String tablename = (String) object.get("tablename");
						float total = 0;
						String sql = "";
						String usertypecolumnname = "";
						String orderSQl = "";
						if (userType != null && userType.trim().equalsIgnoreCase("customer"))
						{
							usertypecolumnname = "customer_key";
							orderSQl = "select c.*, s.company_name, s.first_name, s.last_name, "
									+ "s.phone, s.address1, s.address2, s.city,"
									+ " s.state, s.street, s.postal_code, s.country, "
									+ "s.profile_img, s.email from cart c, suppliers s "
									+ "where c."+usertypecolumnname+" = ? and c.orderid=? and c.shopid = s.supplier_key";
						}
						else if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							String key = "";
							usertypecolumnname = "shopid";
							if(tablename.equalsIgnoreCase("customers"))
							{
								key = "customer_key";
							}
							if(tablename.equalsIgnoreCase("suppliers"))
							{
								key = "supplier_key";
							}
							
//							orderSQl = "select c.*,  s.first_name, s.last_name, s.phone, s.address1, s.address2, s.city,s.state, s.street, s.postal_code, s.country, s.profile_img, s.email, sp.shipping_address "
//							+" from cart c, customers s, shipping_address sp where c."+usertypecolumnname+" = ? and c.orderid= ?  and c.customer_key = s.customer_key and sp.orderid = '"+orderid+"'";
							orderSQl = "select c.*,  s.first_name, s.last_name, s.phone, s.address1, s.address2, s.city,s.state, s.street, s.postal_code, s.country, s.profile_img, s.email, sp.shipping_address "
									+" from cart c, "+tablename+" s, shipping_address sp where c."+usertypecolumnname+" = ? and c.orderid= ?  and c."+key+" = s."+key+" and sp.orderid = '"+orderid+"'";
						
						}
						//System.out.println("SQL : "+orderSQl);
						ps = conn.prepareStatement(orderSQl);
						ps.setLong(1, userid);
						ps.setString(2, orderid);
						
						System.out.println("orderSQl : "+ps);
						
						rs = ps.executeQuery();
						while (rs.next())
						{
							JSONObject childjson = new JSONObject();
							long id = (long) 0;
							
							if(userType.trim().equalsIgnoreCase("customer"))
							{
								id = rs.getLong("customer_key");
								childjson.put("companyname", rs.getString("company_name"));
								
								if(rs.getString("address1") != null)
								{
									childjson.put("address1", rs.getString("address1"));
								}
								else
								{
									childjson.put("address1", "");
								}
								
								if(rs.getString("address2") != null)
								{
									childjson.put("address2", rs.getString("address2"));
								}
								else
								{
									childjson.put("address2", "");
								}
								
							}
							else if(userType.trim().equalsIgnoreCase("supplier"))
							{
								id = rs.getLong("supplier_key");
								childjson.put("companyname", "");
//								childjson.put("shippingAddress", rs.getString("shipping_address"));
								childjson.put("address1", rs.getString("shipping_address"));
								childjson.put("address2", "");
								
							}
							
							childjson.put("userid", id);
							childjson.put("orderid", rs.getString("orderid"));
							childjson.put("datetime", rs.getString("datetime"));
							childjson.put("shopid", rs.getLong("shopid"));
							
							childjson.put("productid", rs.getLong("productid"));
							childjson.put("productname", rs.getString("productname"));
							childjson.put("productimg", rs.getString("productimg"));
							childjson.put("productprice", rs.getFloat("productprice"));
							childjson.put("total", rs.getFloat("total"));
							childjson.put("quantity", rs.getLong("quantity"));
							
							
//							childjson.put("companyname", rs.getString("company_name"));
							childjson.put("name", rs.getString("first_name")+" "+rs.getString("last_name"));
							childjson.put("phone", rs.getString("phone"));
							
							childjson.put("city", rs.getString("city"));
							childjson.put("state", rs.getString("state"));
							childjson.put("street", rs.getString("street"));
							childjson.put("pincode", rs.getString("postal_code"));
							childjson.put("country", rs.getString("country"));
							childjson.put("img", rs.getString("profile_img"));
							childjson.put("userType", userType);
							
							jsonarray.add(childjson);
							
						}
						parentjson.put("Order", jsonarray);
						parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2015);
						output = parentjson.toString();
						return output;
					}
					
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;
					
				case 1016:
					try
					{
							JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
							
							String purchaseTemplet = (String) object.get("purchaseTemplet");
							String userType = (String) object.get("userType");
							String email = (String) object.get("email");
							String total1 = (String) object.get("total");
							String phone = (String) object.get("phone");
							String name = (String) object.get("name");
							String orderid = (String) object.get("orderid");
							String shopyNumber = (String) object.get("shopyNumber");
							String successStatusDesc = null;
							String failedStatusDesc = null;
							int returnSuccessCommand = 0;
							int returnFailedCommand = 0;
							float total = Float.parseFloat(total1);
							sm = new SendMessage();
							
							if(userType.equalsIgnoreCase(""))
							{
								successStatusDesc = "Order Details have been successfull send to shopkeeper.";
								failedStatusDesc = "Failed to send Order Details to shopkeeper. Please try again";
								boolean result = sm.sendMessage("+91"+phone,orderid, regsmsTemplet, "notify", name, total, "");
								returnSuccessCommand = 2021;
								returnFailedCommand = 1021;
							}
							else
							{
								successStatusDesc = "Your order has been placed successfully, please visit to your mail id or to makemyshopy.com for complete details";
								failedStatusDesc = "Your order has been placed successfully, but failed to send order details to your registered mail-id. Please contact to customer-care";
								boolean result = sm.sendMessage("+91"+phone,orderid, regsmsTemplet, "ordering", name, total, shopyNumber);
								returnSuccessCommand = 2016;
								returnFailedCommand = 1016;
							}
							
							boolean verification = EmailUtility.sendEmail(email, null, PURCHASE_DETAILS, null, purchaseTemplet);
							if(verification)
							{
								parentjson = CommonMethodImpl.putSuccessJson(parentjson, returnSuccessCommand);
								parentjson.put("statusdesc", successStatusDesc);
							}
							else
							{
								parentjson = CommonMethodImpl.putFailedJson(parentjson, returnFailedCommand);
								parentjson.put("statusdesc", failedStatusDesc);
							}
							
							output = parentjson.toString();
							return output;
							
//							boolean result = sm.sendMessage("+91"+phone,orderid);
							
					}
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;
					
				case 1020:
					try
					{
						String orderSQl = "select * from cart where orderid is not null group by orderid order by datetime DESC";
						ps = conn.prepareStatement(orderSQl);
						
						rs = ps.executeQuery();
						while (rs.next())
						{
							JSONObject childjson = new JSONObject();
							
							String id = null;
							String custKey = ""+rs.getLong("customer_key");
							String suppKey = ""+rs.getLong("supplier_key");
							String columnNAme = null;
							String tableNAme = null;
							Long key = (long) 0;
							float grandTotal = 0;
							
							if(!custKey.equalsIgnoreCase("0"))
							{
								id = "customer_key#"+rs.getLong("customer_key");
								columnNAme = "customer_key";
								tableNAme = "customers";
								key = rs.getLong("customer_key");
							}
							else if(!suppKey.equalsIgnoreCase("0"))
							{
								id = "supplier_key#"+rs.getLong("supplier_key");
								columnNAme = "supplier_key";
								tableNAme = "suppliers";
								key = rs.getLong("supplier_key");
							}
							
							childjson.put("userid", id);
							childjson.put("orderid", rs.getString("orderid"));
							childjson.put("datetime", rs.getString("datetime"));
							childjson.put("status", rs.getString("status"));
							
							//getting cart details by orderid from database
							String shopidArraySQl = "select * from cart where orderid = '"+rs.getString("orderid")+"' group by shopid";
							List shopidArray = new ArrayList();
							ps2 = conn.prepareStatement(shopidArraySQl);
							
							rs2 = ps2.executeQuery();
							while (rs2.next())
							{
								Long shopid = rs2.getLong("shopid");
								
								shopidArray.add(shopid);//adding list of shopid in array for individual customer.
							}
							
							//Iterating shopid and getting purchase details based on orderid and shopid from cart
							JSONObject childjson2 = new JSONObject();
							JSONArray jsonShoparray1 = new JSONArray();
							for(int i = 0; i<shopidArray.size(); i++)
							{
//								
								String companyName = null;
								String shopPhone = null;
								String address1 = null;
								String address2 = null;
								String email = null;
								String shopkeeperName = null;
								
								String ShopDetailSQl = "select * from suppliers where supplier_key = "+shopidArray.get(i)+"";
								ps4 = conn.prepareStatement(ShopDetailSQl);
								
								rs4 = ps4.executeQuery();
								while(rs4.next())
								{
									companyName = rs4.getString("company_name");
									shopPhone = rs4.getString("phone");
									email = rs4.getString("email");
									shopkeeperName = rs4.getString("first_name") + " " + rs4.getString("last_name");
									
									if(rs4.getString("address1") != null)
									{
										address1 = rs4.getString("address1");
									}
									else
									{
										address1 = "";
									}
									
									if(rs4.getString("address2") != null)
									{
										address2 = rs4.getString("address2");
									}
									else
									{
										address2 = "";
									}
								}
								
								
								JSONArray jsonShoparray = new JSONArray();
								String ProdDetailsSQl = "select * from cart where orderid = '"+rs.getString("orderid")+"' and shopid = "+shopidArray.get(i)+"";
								ps3 = conn.prepareStatement(ProdDetailsSQl);
								
								rs3 = ps3.executeQuery();
								while (rs3.next())
								{
									JSONObject childjson1 = new JSONObject();
									
									childjson1.put("productid", rs3.getLong("productid"));
									childjson1.put("productname", rs3.getString("productname"));
									childjson1.put("productimg", rs3.getString("productimg"));
									childjson1.put("productprice", rs3.getFloat("productprice"));
									childjson1.put("total", rs3.getFloat("total"));
									childjson1.put("quantity", rs3.getLong("quantity"));

									childjson1.put("companyName", companyName);
									childjson1.put("address1", address1);
									childjson1.put("address2", address2);
									childjson1.put("email", email);
									childjson1.put("shopPhone", shopPhone);
									childjson1.put("shopkeeperName", shopkeeperName);
									
									grandTotal = grandTotal + rs3.getFloat("total");
									jsonShoparray.add(childjson1);
								}
//								childjson2.put("shop"+i, jsonShoparray);
								jsonShoparray1.add(jsonShoparray);
							}
							childjson.put("shopListByOrderId", jsonShoparray1);//array of shop with purchase details for individual customer.
							
							//Getting user details based on userid.
							String usweDetailsSQl = "select * from "+tableNAme+" where "+columnNAme+" = "+key+"";
							ps1 = conn.prepareStatement(usweDetailsSQl);
							
							rs1 = ps1.executeQuery();
							while (rs1.next())
							{
	//							childjson.put("companyname", rs.getString("company_name"));
								
								if(rs1.getString("address1") != null)
								{
									childjson.put("address1", rs1.getString("address1"));
								}
								else
								{
									childjson.put("address1", "");
								}
								
								if(rs1.getString("address2") != null)
								{
									childjson.put("address2", rs1.getString("address2"));
								}
								else
								{
									childjson.put("address2", "");
								}
								
								childjson.put("name", rs1.getString("first_name")+" "+rs1.getString("last_name"));
								childjson.put("phone", rs1.getString("phone"));
								
								childjson.put("city", rs1.getString("city"));
								childjson.put("state", rs1.getString("state"));
								childjson.put("street", rs1.getString("street"));
								childjson.put("pincode", rs1.getString("postal_code"));
								childjson.put("country", rs1.getString("country"));
								childjson.put("img", rs1.getString("profile_img"));
								
							}
							
							childjson.put("grandTotal", grandTotal);
							jsonarray.add(childjson);
							
						}
						parentjson.put("Order", jsonarray);
						parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2020);
						output = parentjson.toString();
						////System.out.println("1020 Output : "+output);
						return output;
					}
					catch (Exception e)
					{
						e.printStackTrace();
						mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0);
					}
					break;
					
				case 1021:
						try
						{
							JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
		
							String action = (String) object.get("action");
							String data = (String) object.get("userData");
							String[] userData = data.split("#");
							String userId = userData[2];
							String userType = userData[1];
							String orderid = userData[0];
							String sqlQuery = null;
							if(action.equalsIgnoreCase("deleted"))
							{
								sqlQuery = "delete from cart where "+userType+" = "+userId+" and orderid = '"+orderid+"'";
							}
							else
							{
								sqlQuery = "update cart set status = '"+action+"' where "+userType+" = "+userId+" and orderid = '"+orderid+"'";
							}
							
							ps = conn.prepareStatement(sqlQuery);
							result = ps.executeUpdate();
							if(result > 0)
							{
								ps1 = conn.prepareStatement("select productid, quantity from cart where orderid = '"+orderid+"'");
								rs = ps1.executeQuery();
								while(rs.next())
								{
									long prodid = rs.getLong("productid");
									long quantity = rs.getLong("quantity");
									
									ps2 = conn.prepareStatement("select units_in_stock from products where product_key = "+prodid+"");
									rs1 = ps2.executeQuery();
									while(rs1.next())
									{
										long stock = rs1.getLong("units_in_stock");
										long totalstock = stock + quantity;
										ps3 = conn.prepareStatement("update products set units_in_stock = "+totalstock+" where product_key = "+prodid+"");
										result1 = ps3.executeUpdate();
										if(result1 > 0)
										{
											parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2021);// succcess
										}
									}
								}
								
							}
							else
							{
								parentjson = CommonMethodImpl.putFailedJson(parentjson, 1021);// faliure
							}
							
							parentjson.put("statusdesc", "Success");
							output = parentjson.toString();
							return output;
							
						}
						catch(Exception e)
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
							parentjson = CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson, DBData);
							sql = "update customers set active = 1 where email = ?";
							usertypecolumnname = "customer_key"; 
						}
						else if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							parentjson = CommonMethodImpl.getShopkeeperDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson, DBData);
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
											////System.out.println("Login Failed, Incorrect username or password.");
										}
									}
									else // --  Encryption of password failed
									{
										parentjson.put("status", 10);// --  Encryption of password failed
										parentjson.put("statusdesc", "Login Failed,Please try again");
										parentjson.put("command", command);
										////System.out.println("Encryption of password failed,Unregistered user");
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
//							//System.out.println("encryptedPwd : "+encryptedPwd);
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
								//System.out.println("Encryption of password failed,Registered user");
							}
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

				case 1052: // -- Customer/Shopkeeper Registration and Email
							// Verification //
					try
					{
						sm = new SendMessage();
						JSONObject object = (JSONObject) JSONValue.parse(jsonMsg);
						String userType = (String) object.get("userType");
						String emailSignUp = (String) object.get("emailKey");
						String mobileNum = (String) object.get("mobileKey");

						String sqlInsert = "";
						String emailExist = "";
						String tempOtp = "";
						String user = "";
						int checkEmailExist = 0;
						String createTable = "";
						String tableName = "";

						if (userType != null && userType.trim().equalsIgnoreCase("customer"))
						{
							emailExist = "select email from customers";
							sqlInsert = "insert into customers(email,phone,password,profile_img) values(?,?,?,?)";
							user = "customers";
						}

						if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							emailExist = "select email from suppliers";
							sqlInsert = "insert into suppliers(email,phone,password,profile_img) values(?,?,?,?)";
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
								ps.setString(4, "Images/CPImg/350x260.png");
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
									
									if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
									{
										String lastIdQuery = "select LAST_INSERT_ID() as last_id from "+user+"";
										ps3 = conn.prepareStatement(lastIdQuery);
									    rs2 = ps3.executeQuery();
									    if(rs2.next())
									    {
									    	String lastid = rs2.getString("last_id");
											tableName = "`shop"+lastid+"`";
											createTable = "CREATE TABLE IF NOT EXISTS "+tableName+" (`product_key` bigint(20) NOT NULL AUTO_INCREMENT,`product_name` longtext,`category_ref` bigint(20) DEFAULT NULL,`sub_category_ref` bigint(20) DEFAULT NULL,`unite_price` float DEFAULT NULL,`picture` longtext,`sku` bigint(20) DEFAULT NULL,`idsku` bigint(20) DEFAULT NULL,`vendor_product_ref` bigint(20) DEFAULT NULL,`product_description` longtext,`supplier_ref` bigint(20) DEFAULT NULL,`quantity_per_unit` bigint(20) DEFAULT NULL,`msrp` bigint(20) DEFAULT NULL,`available_colors` longtext,`size` bigint(20) DEFAULT NULL,`color` longtext,`discount` float DEFAULT NULL,`unit_weight` float DEFAULT NULL,`units_in_stock` bigint(20) DEFAULT NULL,`units_on_order` bigint(20) DEFAULT NULL,`reorder_level` longtext,`product_available` longtext,`discount_available` longtext,`current_order` longtext,`ranking` longtext,`note` longtext,PRIMARY KEY (`product_key`)) ENGINE=InnoDB AUTO_INCREMENT=271 DEFAULT CHARSET=latin1;";
																					
//											////System.out.println("lastInserted ID : "+createTable);
									    }
									}
									
									tempOtp = RandomStringUtilsTrial.orderNumber();
	
									if (tempOtp != null && !tempOtp.trim().isEmpty())
									{
										boolean verification = EmailUtility.sendEmail(emailSignUp, null, OTP_REGISTER, tempOtp, null);
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
												boolean result = sm.sendMessage("+91"+mobileNum,tempOtp, regsmsTemplet, "registration", null, (float) 0, "");
												parentjson = new JSONObject();
												
												if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
												{
													ps2 = conn.prepareStatement(createTable);
													resultTemp = ps2.executeUpdate();
													
													if (resultTemp > 0)
													{
														parentjson.put("Table --> "+tableName+" --> Created", "YES");
													}
													else
													{
														parentjson.put("Table --> "+tableName+" --> Created", "NO");
													}
												}
												
												
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
								mms.writeLogs("Reason for Registration failed ----> Encrypting password failed",1);
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
						// ////System.out.println("output ::::::::: "+output);
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
				 * //////System.out.println("output ::::::::: "+output); return
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
								parentjson = CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson, DBData);
							
							user = "customers";
						}

						// -- for supplier
						if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							if (email != null && !email.trim().isEmpty())
								parentjson = CommonMethodImpl.getShopkeeperDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson, DBData);
							
							user = "suppliers";
						}
						if (parentjson != null && !parentjson.isEmpty())
						{
							tempOtp = RandomStringUtilsTrial.orderNumber();
							
							if (tempOtp != null && !tempOtp.trim().isEmpty())
							{
								boolean verification = EmailUtility.sendEmail((String) parentjson.get("emailId"), (String) parentjson.get("password"), FORGOT_PASSWORD, tempOtp, null);
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
											mms.writeLogs("OTP as password updation succeeded",1);
										}
										else
										{
											parentjson.put("status", 11);// OTP Updation Failed
											parentjson.put("statusdesc", "OTP as password updation failed");
											parentjson.put("command", command);
											mms.writeLogs("OTP as password updation failed",0);
										}
									}
									else
									{
										parentjson.put("status", 10);// Encryption of password failed
										parentjson.put("statusdesc", "Forgot Password Failed,Please try again");
										parentjson.put("command", command);
										mms.writeLogs("Encryption of password failed,Forgot password",0);
									}
								}
								else
								{
									parentjson.put("status", 12); //Email sending Failed
									parentjson.put("email", email);
									parentjson.put("statusdesc", "Email sending Failed");
									parentjson.put("command", command);
									mms.writeLogs("Email sending failed",0);
								}
							}
							else
							{
								// OTP generation Failed
								parentjson.put("status", 12);// OTP generation failed
								parentjson.put("email", email);
								parentjson.put("statusdesc", "Email sending Failed");
								parentjson.put("command", command);
								mms.writeLogs("OTP generation failed",0);
							}
						}
						else
						{
							parentjson = new JSONObject();
							parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
							parentjson.put("statusdesc", "Email-Id " + email + " does not exist");
						}
						output = parentjson.toString();
						// ////System.out.println("output ::::::::: "+output);
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
							parentjson = CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson, DBData);
						}
						
						else if(userType != null  && key != null && userType.trim().equalsIgnoreCase("supplier"))
						{
							sql += "where supplier_key = ?";
							parentjson = CommonMethodImpl.getShopkeeperDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson, DBData);
						}
						
						if (email != null && !email.trim().isEmpty())
							sql += " and email = ? ";
						mms.writeLogs("Update user address sql : "+sql,1);
						ps = conn.prepareStatement(sql);
						ps.setLong(1, key);
						if (email != null && !email.trim().isEmpty())
							ps.setString(2, email);
						
						result = ps.executeUpdate();

						if (result > 0)
						{
							if(userType != null && key != null && userType.trim().equalsIgnoreCase("customer"))
							{
								parentjson = CommonMethodImpl.getCustDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson, DBData);
							}
							else if(userType != null  && key != null && userType.trim().equalsIgnoreCase("supplier"))
							{
								parentjson = CommonMethodImpl.getShopkeeperDetailsByProperty(CommonMethodImpl.EMAIL_ID, email, parentjson, DBData);
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
						// ////System.out.println("output ::::::::: "+output);
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
									boolean verification = EmailUtility.sendEmail(email, null, CHANGE_PASSWORD, null, null);
									if(verification)
									{
										parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2056);
										mms.writeLogs("Email sending success",1);
									}
									else
									{
										parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
										parentjson.put("statusdesc", "Error occurred during sending email,Please try again");
										mms.writeLogs("Email sending failed",0);
									}
								}
								else
								{
									parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
									parentjson.put("statusdesc", "Error occurred during reset,Please try again");
									mms.writeLogs("Error occurred during update query of reset",0);
								}
							}
							else
							{
								parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
								parentjson.put("statusdesc", "Error occurred,Please try again");
								mms.writeLogs("Error occurred during encryption",0);
							}

						}
						else
						{
							parentjson = CommonMethodImpl.putFailedJson(parentjson, command);
						}

						output = parentjson.toString();
						// ////System.out.println("output ::::::::: "+output);
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
							//System.out.println("Updation failed");
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
					
					
				  case 1058: // -- Update image in db // 
					try
					{
					 mms.writeLogs("json Msg : "+jsonMsg+" command : "+command+" Exception : ",1);
						 
					  String profileImg = "";
					 
					  String[] parts = jsonMsg.split("#");
					  int key = Integer.parseInt(parts[1].trim());
					  profileImg = parts[2].trim();
					  String userType = parts[3].trim();
					  
					  String userTypeColumnName = "";
					  String tableName = "";
						
					if (userType != null && userType.trim().equalsIgnoreCase("customer"))
					{
						userTypeColumnName = "customer_key"; 
						tableName = "customers"; 
					}
					else if (userType != null && userType.trim().equalsIgnoreCase("supplier"))
					{
						userTypeColumnName = "supplier_key";
						tableName = "suppliers";
					}
					  
					  String sql = "update "+tableName+ " set profile_img = ? where "+userTypeColumnName+" = ?";
					  
					  ps = conn.prepareStatement(sql);
					  ps.setString(1, profileImg);
					  ps.setInt(2, key);
					  
					result = ps.executeUpdate();
					
					if (result > 0)
					{
						 parentjson =  CommonMethodImpl.putSuccessJson(parentjson, 2000);
						 parentjson.put("command", 2058); 
					} else
					{ 
						parentjson =  CommonMethodImpl.putFailedJson(parentjson, command);
					}
				  
				  output = parentjson.toString();
				  ////System.out.println("output ::::::::: "+output); 
				  return output;
				  }
				  
				 catch (Exception e) 
				  { 
				  		e.printStackTrace();
				  		mms.writeLogs("ProductInterfaceImpl handleRequestResponse() "+command+" Exception : "+e,0); 
				  } break;
					 

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
			sm = null;
		}

	}

}
