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

import com.eshop.dao.ProductInterface;
import com.eshop.dao.ProductInterfaceImpl;

/**
 * Servlet implementation class GetProductbyCategoryServlet
 */
public class GetProductbyCategoryServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetProductbyCategoryServlet() {
        super();
        // TODO Auto-generated constructor stub
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
		
		PrintWriter out=response.getWriter();
		ProductInterface getResponse=new ProductInterfaceImpl();
		HttpSession session=request.getSession();
		
		
		String jsonMsg=request.getParameter("jsonMsg");
		int command=Integer.parseInt(request.getParameter("command"));
		
//		System.out.println("jsonMsg  :::::::::::: "+jsonMsg+"  Command :::::::::::: "+command);
		
		String strjsonMsgResponse= getResponse.handleRequestResponse(jsonMsg,command);
		
		System.out.println("Response :::::::::::: "+strjsonMsgResponse);
		
		out.println(strjsonMsgResponse);
		
		
		
	}

}
