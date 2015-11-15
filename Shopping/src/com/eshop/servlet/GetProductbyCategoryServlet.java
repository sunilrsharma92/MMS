package com.eshop.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;

import com.eshop.dao.ProductInterface;
import com.eshop.dao.ProductInterfaceImpl;
import com.eshop.database.utility.IPAddressUtility;
import com.eshop.logger.MakemyshopyLogger;

/**
 * Servlet implementation class GetProductbyCategoryServlet
 */
public class GetProductbyCategoryServlet extends HttpServlet
{
	private static final long serialVersionUID = 1L;
	
	private String connection = "";
	private String drivername = "";
	private String username = "";
	private String password = "";
	private String DBData = "";
	
	private String accountid = "";
	private String apikey = "";
	private String Senderid = "";
	private String templateid = "";
	private String templatename = "";
	private String regsmsTemplet = "";
	private String readvalue = "";
	
	MakemyshopyLogger mms = null;
	
	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public GetProductbyCategoryServlet()
	{
		super();
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{

	}

	public void init() throws ServletException
	{
		mms = new MakemyshopyLogger();
		ServletContext ss = this.getServletContext();
		connection = ss.getInitParameter("connection");
	    drivername = ss.getInitParameter("drivername");
	    username = ss.getInitParameter("username");
	    password = ss.getInitParameter("password");
	    
	    DBData = connection+"#"+drivername+"#"+username+"#"+password;
	    mms.writeLogs("GetProductByCategoryServlet --> DOPost ------> "+connection+" ** "+drivername+" ** "+username+ "**" +password, 1);
	    
	    accountid = ss.getInitParameter("otp_accountid");
		apikey = ss.getInitParameter("otp_apikey");
		Senderid = ss.getInitParameter("otp_Senderid");
		templateid = ss.getInitParameter("otp_templateid");
		templatename = ss.getInitParameter("otp_templatename");
		
		regsmsTemplet = accountid+"#"+apikey+"#"+Senderid+"#"+templateid+"#"+templatename;
		readvalue = "accountid : "+accountid+" apikey : "+apikey+" Senderid: "+Senderid+" templatename : "+templatename+" templateid : "+templateid+" accountid : "+accountid+"";
		System.out.println(readvalue);
		
	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		PrintWriter out = response.getWriter();
		ProductInterface getResponse = new ProductInterfaceImpl();
		mms = new MakemyshopyLogger();
		HttpSession session = request.getSession();
		IPAddressUtility ipadd = new IPAddressUtility();
		JSONObject objjson = new JSONObject();
		JSONParser objjsonparser = new JSONParser();
		
		try
		{
	        
			String jsonMsg = request.getParameter("jsonMsg");
			int command = Integer.parseInt(request.getParameter("command"));
			
			if(command == 1051 || command == 1011)
			{
				String newjsonMsg =jsonMsg;
				String IPAddress = ipadd.getIpAddress();
				Object obj = objjsonparser.parse(newjsonMsg);
				
				objjson = (JSONObject)obj;
				objjson.put("ipaddress", IPAddress);
				
				jsonMsg = objjson.toJSONString();
				mms.writeLogs("Command : "+command+" JSON Request with IPAddress : "+jsonMsg, 1);
			}
			
			String strjsonMsgResponse = getResponse.handleRequestResponse(jsonMsg, command, DBData, regsmsTemplet);
			
			JSONObject object = (JSONObject) JSONValue.parse(strjsonMsgResponse);
			int command1 = ((Long) object.get("command")).intValue();
			if(command1 == 2051)
			{
				int key = ((Long) object.get("key")).intValue();
				String userType = (String) object.get("userType");
				
				session.removeAttribute("key");
				session.removeAttribute("userType");
				session.setAttribute("key", key);
				session.setAttribute("userType", userType);
				mms.writeLogs("Command : "+command+" JSON Msg for Login to store in session :  "+jsonMsg, 1);
			}
			
			out.println(strjsonMsgResponse);
			
		}
		catch(Exception e)
		{
			mms.writeLogs("GetProductbyCategoryServlet doPost Exception : "+e, 0);
			e.printStackTrace();
		}
		finally
		{
			out = null;
			getResponse = null;
			mms = null;
			session = null;
			ipadd = null;
			objjson = null;
			objjsonparser = null;
		}
	}

}
