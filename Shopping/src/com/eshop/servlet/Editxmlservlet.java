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

import com.eshop.logger.MakemyshopyLogger;
import com.eshop.readwrite.propertiefiles.ModifyXMLDOM;

@WebServlet("/Editxmlservlet")
public class Editxmlservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Editxmlservlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	MakemyshopyLogger mms = new MakemyshopyLogger();
		PrintWriter out = response.getWriter();
        ServletContext ss = this.getServletContext();
        String connection = ss.getInitParameter("connection");
        String drivername = ss.getInitParameter("drivername");
        String username = ss.getInitParameter("username");
        String password = ss.getInitParameter("password");
        
        if(username.equals("NaN"))
		{
			username = "";
		}
		
		if(password.equals("NaN"))
		{
			password = "";
		}
		
        mms.writeLogs("Editxmlservlet --> DOGET ------> "+connection+" ** "+drivername+" ** "+username+ "**" +password, 1);
        
//        System.out.println("Editxmlservlet --> DOGET ------> "+connection+" ** "+drivername+" ** "+username+ "**" +password);
        String data = connection+"#"+drivername+"#"+username+"#"+password;
        out.println(data.toString());
        
	}

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	MakemyshopyLogger mms = new MakemyshopyLogger();
		PrintWriter out = response.getWriter();
        try
        {
            ModifyXMLDOM mxd = new ModifyXMLDOM();
            String xmlfilepath = "";
            ServletContext ss = this.getServletContext();
//            System.out.println("ss : "+ss);

            String connection = "";
            String drivername = "";
            String username = "";
            String password = "";
            
            String connectionValue = "";
            String drivernameValue = "";
            String usernameValue = "NaN";
            String passwordValue = "NaN";
            
//            xmlfilepath = "F:\\D Drive\\My Career\\Workspace\\XMLWritting\\WebContent\\WEB-INF\\web.xml";
            xmlfilepath = System.getProperty("catalina.base") + "\\webapps\\shopping1\\WEB-INF\\web.xml";
            mms.writeLogs("tomcatPath : "+xmlfilepath, 1);
            
            connection= request.getParameter("connection");
            drivername= request.getParameter("drivername");
            username= request.getParameter("username");
            password= request.getParameter("password");
//            System.out.println("DOPOST ------> connection : "+connection+" drivername : "+drivername+" username : "+username+" password : "+password);
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
//            System.out.println("Editxmlservlet --> DOPOST ------> connection : \n connectionValue : "+connectionValue+" \n drivernameValue : "+drivernameValue+" \n usernameValue : "+usernameValue+" \n passwordValue : "+passwordValue);

            String output = mxd.xmlCurdOperation(xmlfilepath, connection, connectionValue, drivername, drivernameValue, username, usernameValue, password, passwordValue);
            mms.writeLogs("Output : "+output,1);
            out.println(output.toString());
        }
        catch(Exception e)
        {
            e.printStackTrace();
            mms.writeLogs("Exception Occured while updating web service URL in web.xml"+e, 0);
//            System.out.println("Exception Occured while updating web service URL in web.xml"+e);
        }
		
	}

}

