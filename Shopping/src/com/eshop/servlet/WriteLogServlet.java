package com.eshop.servlet;

import in.smsowl.client.SmsOwl;

import java.io.IOException;
import java.util.HashMap;

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
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try
		{
			SmsOwl client = new SmsOwl("56078e483284c21d24b9a708", "dAdXpTZSJGSSdxCdB9GycKRRzymc5ymKCcFkwZtxytB6RKanQh3");
			
			
			HashMap<String, String> data = new HashMap<String, String>();
			data.put("test", " Viruss");
//			data.put("Ammount", "20000000");
			
	//		client.sendTransactionalSms(senderId, to, templateId, placeholderMap)
			String mobNumber = "";
			for(int i = 0;i < 3;i++)
			{
				if(i == 0)
				{
					mobNumber = "+918976605993";
				}
				else if(i == 1)
				{
					mobNumber = "+919970181137";
				}
				else if(i == 2)
				{
					mobNumber = "+919029813369";
				}
				
				client.sendTransactionalSms("MMSTRA", mobNumber, "a4baf07c1259be39fb3c0ba7", data);
				
			}
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
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
