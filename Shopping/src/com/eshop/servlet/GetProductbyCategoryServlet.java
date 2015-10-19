package com.eshop.servlet;

import java.io.IOException;
import java.io.PrintWriter;

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

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public GetProductbyCategoryServlet()
	{
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		PrintWriter out = response.getWriter();
		ProductInterface getResponse = new ProductInterfaceImpl();
		MakemyshopyLogger mms = new MakemyshopyLogger();
		HttpSession session = request.getSession();
		
		try
		{

			String jsonMsg = request.getParameter("jsonMsg");
			int command = Integer.parseInt(request.getParameter("command"));
			
			if(command == 1051 || command == 1011)
			{
				String newjsonMsg =jsonMsg;
				IPAddressUtility ipadd = new IPAddressUtility();
				
				String IPAddress = ipadd.getIpAddress();
				
				JSONObject objjson = new JSONObject();
				JSONParser objjsonparser = new JSONParser();
				Object obj = objjsonparser.parse(newjsonMsg);
				objjson = (JSONObject)obj;
				objjson.put("ipaddress", IPAddress);
				
				jsonMsg = objjson.toJSONString();
				mms.writeLogs("Command : "+command+" JSON Request with IPAddress : "+jsonMsg, 1);
			}
			
	//		mms.writeLogs("Command : "+command+" JSON Request TO SERVLET : "+jsonMsg, 1);
			
			// System.out.println("jsonMsg  :::::::::::: "+jsonMsg+"  Command :::::::::::: "+command);
	
			String strjsonMsgResponse = getResponse.handleRequestResponse(jsonMsg, command);
			
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
			
	//		mms.writeLogs("JSON Response FROM SERVLET : "+strjsonMsgResponse, 1);
			out.println(strjsonMsgResponse);
			
		}
		catch(Exception e)
		{
			mms.writeLogs("GetProductbyCategoryServlet doPost Exception : "+e, 0);
			e.printStackTrace();
		}
	}

}
