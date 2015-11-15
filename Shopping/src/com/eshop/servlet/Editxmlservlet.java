package com.eshop.servlet;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.eshop.dao.ConstantValues;
import com.eshop.logger.MakemyshopyLogger;
import com.eshop.readwrite.propertiefiles.ModifyXMLDOM;

@WebServlet("/Editxmlservlet")
public class Editxmlservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Editxmlservlet() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
    {
    	
	}

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
    {
    	MakemyshopyLogger mms = new MakemyshopyLogger();
		PrintWriter out = response.getWriter();
        ModifyXMLDOM mxd = new ModifyXMLDOM();
        ServletContext ss = this.getServletContext();
        
        String xmlfilepath = "";
        String connection = "";
        String drivername = "";
        String username = "";
        String password = "";
        
        String connectionValue = "";
        String drivernameValue = "";
        String usernameValue = "NaN";
        String passwordValue = "NaN";
        
            try
            {
	            String action = request.getParameter("action");
	
	            if(action.equals("0"))
	            {
	            	connection = ss.getInitParameter("connection");
	                drivername = ss.getInitParameter("drivername");
	                username = ss.getInitParameter("username");
	                password = ss.getInitParameter("password");
	                
	                if(username.equals("NaN"))
	        		{
	        			username = "";
	        		}
	        		
	        		if(password.equals("NaN"))
	        		{
	        			password = "";
	        		}
	        		
	                mms.writeLogs("Editxmlservlet --> DOGET ------> "+connection+" ** "+drivername+" ** "+username+ "**" +password, 1);
	                String data = connection+"#"+drivername+"#"+username+"#"+password;
	                out.println(data.toString());
	            }
	            else if(action.equals("1"))
	            {
		            
		            xmlfilepath = ConstantValues.xmlfilepath;
		            mms.writeLogs("tomcatPath : "+xmlfilepath, 1);
		            
		            connection= request.getParameter("connection");
		            drivername= request.getParameter("drivername");
		            username= request.getParameter("username");
		            password= request.getParameter("password");
		            if(request.getParameter("connectionValue") != null && request.getParameter("connectionValue") != "")
		            {
		                connectionValue= request.getParameter("connectionValue");
		            }
		            if(request.getParameter("drivernameValue") != null && request.getParameter("drivernameValue") != "")
		            {
		                drivernameValue= request.getParameter("drivernameValue");
		            }
		            if(request.getParameter("usernameValue") != null && request.getParameter("usernameValue") != "")
		            {
		            	usernameValue= request.getParameter("usernameValue");
		            }
		            if(request.getParameter("passwordValue") != null && request.getParameter("passwordValue") != "")
		            {
		            	passwordValue= request.getParameter("passwordValue");
		            }
		            
		            mms.writeLogs("Editxmlservlet --> DOPOST ------> connection : \n connectionValue : "+connectionValue+" \n drivernameValue : "+drivernameValue+" \n usernameValue : "+usernameValue+" \n passwordValue : "+passwordValue, 1);
		
		            String output = mxd.xmlCurdOperation(xmlfilepath, connection, connectionValue, drivername, drivernameValue, username, usernameValue, password, passwordValue);
		            mms.writeLogs("Output : "+output,1);
		            out.println(output.toString());
	            }
        }
        catch(Exception e)
        {
            e.printStackTrace();
            mms.writeLogs("Exception Occured while updating web service URL in web.xml"+e, 0);
        }
        finally
        {
        	mms = null;
        	mxd = null;
        	out = null;
        	ss = null;
        	xmlfilepath = null;
        	connection = null;
        	drivername = null;
        	username = null;
        	password = null;
        	connectionValue = null;
        	drivernameValue = null;
        	
        }
		
	}

}

