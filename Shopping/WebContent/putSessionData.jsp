<%@page import="org.json.simple.JSONValue"%>
<%@page import="org.json.simple.JSONObject"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    
<%
try
{
	if(request.getParameter("response1") != null)
	{
        	String loginData = request.getParameter("response1");
        	

        	//	-- Login Successfull,put in session
        	 JSONObject object = (JSONObject) JSONValue.parse(loginData);
        	 String loginSuccess = (String) object.get("loginSuccess");

        	 if (loginSuccess != null && !loginSuccess.trim().isEmpty()) 
        	 {
        		if (loginSuccess.equalsIgnoreCase("customer")) 
        		{
        			object.remove("custPass");
        		}
        		if (loginSuccess.equalsIgnoreCase("supplier"))
        		{
        			object.remove("supplierPass");
        		}

        		loginData = object.toString();
        		System.out.println("loginData :: " + loginData);
        		/* session  = request.getSession();
        		session.removeAttribute("loginData");
        		session.setAttribute("loginData", loginData); */
        		
        		
	        		
        	}
	}
	else
	{
		System.out.println("No Response");
	}
}catch(Exception e)
{
	e.printStackTrace();
}
        %>