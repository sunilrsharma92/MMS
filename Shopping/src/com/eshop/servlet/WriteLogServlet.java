package com.eshop.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.eshop.logger.MakemyshopyLogger;

/**
 * Servlet implementation class WriteLogServlet
 */
@WebServlet("/WriteLogServlet")
public class WriteLogServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public WriteLogServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		MakemyshopyLogger mms = new MakemyshopyLogger();
		try
		{
			String logMsg = "";
			int flag = 0;
			if(request.getParameter("logMsg") != null || !request.getParameter("logMsg").equals(""))
			{
				logMsg = request.getParameter("logMsg");
			}
			
			if(request.getParameter("flag") != null || !request.getParameter("flag").equals(""))
			{
				flag = Integer.parseInt(request.getParameter("flag"));
			}
			
			mms.writeLogs(logMsg, flag);
		}
		catch(Exception e)
		{
			mms.writeLogs("Exception in write log servlet : "+e, 0);
		}
	}

}
