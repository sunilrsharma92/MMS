package com.eshop.servlet;

import java.awt.Color;
import java.awt.Font;
import java.awt.GradientPaint;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class captchaServlet
 */
@WebServlet("/captchaServlet")
public class captchaServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public captchaServlet() {
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
		try
		{
			PrintWriter out = response.getWriter();
		int width = 150;
	    int height = 50;

	    char data[][] = {
	        { 'z', 'e', 't', 'c', 'o', 'd', 'e' },
	        { 'l', 'i', 'n', 'u', 'x' },
	        { 'f', 'r', 'e', 'e', 'b', 's', 'd' },
	        { 'u', 'b', 'u', 'n', 't', 'u' },
	        { 'j', 'e', 'e' }
	    };


	    BufferedImage bufferedImage = new BufferedImage(width, height, 
	                  BufferedImage.TYPE_INT_RGB);

	    Graphics2D g2d = bufferedImage.createGraphics();

	    Font font = new Font("Georgia", Font.BOLD, 18);
	    g2d.setFont(font);

	    /*RenderingHints rh = new RenderingHints(
	           RenderingHints.KEY_ANTIALIASING,
	           RenderingHints.VALUE_ANTIALIAS_ON);

	    rh.put(RenderingHints.KEY_RENDERING, 
	           RenderingHints.VALUE_RENDER_QUALITY);

	    g2d.setRenderingHints(rh);*/

	    GradientPaint gp = new GradientPaint(0, 0, 
	    Color.red, 0, height/2, Color.black, true);

	    g2d.setPaint(gp);
	    g2d.fillRect(0, 0, width, height);

	    g2d.setColor(new Color(255, 153, 0));

	    Random r = new Random();
	    int index = Math.abs(r.nextInt()) % 5;

	    String captcha = String.copyValueOf(data[index]);
	    request.getSession().setAttribute("captcha", captcha );
	    //System.out.println("Captcha : "+captcha);
	    int x = 0; 
	    int y = 0;

	    for (int i=0; i<data[index].length; i++) {
	        x += 10 + (Math.abs(r.nextInt()) % 15);
	        y = 20 + Math.abs(r.nextInt()) % 20;
	        g2d.drawChars(data[index], i, 1, x, y);
	    }

	    g2d.dispose();

	    ServletContext ctx = getServletContext();
	    String path = getServletContext().getRealPath("/Workspace");
	    //System.out.println("path : "+path);
	    
//	    File file = new File(path+"/Test/WebContent/images/captcha.png");
	    File file = new File("F:/D Drive/My Career/Workspace/Test/WebContent/images/captcha.png");
	    //System.out.println("file : "+file.toString());
	    
	    String mimeType = ctx.getMimeType(file.getAbsolutePath());
	    response.setContentType(mimeType != null? mimeType:"application/octet-stream");
	    
//	    response.setContentType("image/png");
//	    OutputStream os = response.getOutputStream();
	    ImageIO.write(bufferedImage, "png", file);
	    out.print(captcha.toString());
//	    os.close();
	  } 
	catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	}
