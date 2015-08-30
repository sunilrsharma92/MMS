package com.eshop.database.utility;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.eshop.dao.ProductInterfaceImpl;



public class EmailUtility {
	
	public static boolean sendEmail(String email ,String password, String propertyValue, String tempOtp) throws AddressException,MessagingException {

//			final String user="sunilrsharma92@gmail.com";//change accordingly  
//			final String pass="sunils@123";
			final String user="support@makemyshopy.com";//change accordingly  
			final String pass="madakatti@2015";
			
			//1st step) Get the session object
		Properties props = new Properties();
		Session session = null;
		MimeMessage message = null;
		String link = null;
		String msg = null;

		String mailTemplet = "<html>"
				+ "<head>"
				+ "<title></title>"
				+ "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'>"

				+ "	<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css'>"
				+ "<style type='text/css'>"
				+ ".top{"
				+ "width:100%; "
				+ "background-color:#1D9688; "
				+ "height:100px;"
				+ "border: 5px solid #FFF;"
				+ "}"
				+ ".font{"
				+ "color : #FFF;"
				+ "}"
				+ ".middle{"
				+ "width:100%; "
				+ "border: 5px solid #FFF;"
				+ "background-color: #225656; "

				+ "}"
				+ ".bottom{"
				+ "	width:100%; "
				+ "border: 5px solid #FFF;"
				+ "height: 150px;"
				+ "background-color: gray;"

				+ "}"
				+ ".img-circle{"
				+ "width:100%;"
				+ "}"
				+ "</style>"

				+ "</head>"
				+ "<body>"

				+ "<div class='container well' style='width:500px; height:650px;'>"
				+ "<div class='container top' >"

				+ "<div class='center font'><h4 align='center'>Welcome to</h4> </div>"
				+ "<div class='center font'><h3 align='center'>Make My Shopy</h3> </div>"

				+ "		</div>"

				+ "	<div class='container middle' >"
				+ "<div class='row' style='margin-top:10px;'>"
				+ "<p class='font'>Thanks for registering with us. Keep Shopping. Enjoy Shopping</p>"
				+ "<div class='col-md-4 col-sm-6 col-xs-12'>"

				+ "<img src='https://lh3.googleusercontent.com/-APeu4_sEoKg/AAAAAAAAAAI/AAAAAAAAABo/OJtC5fCmPGM/photo.jpg' class='img-circle' alt='Cinque Terre' > "
				+ "	<h4 class='font'>Trusted Seller</h4>"

				+ "	</div>"
				+ "	<div class='col-md-4 col-sm-6 col-xs-12'>"

				+ "		<img src='http://www.iconsdb.com/icons/preview/caribbean-blue/free-shipping-xxl.png' class='img-circle' alt='Cinque Terre' > "
				+ "		<h4 class='font'>Free Home Delivery</h4>"

				+ "	</div>"
				+ "<div class='col-md-4 col-sm-6 col-xs-12'>"

				+ "<img src='https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Sync_reload_refresh_arrow_update_w_b_tabs.png' class='img-circle' alt='Cinque Terre' >"
				+ "	<h4 class='font'>HASSLE FREE RETURNS</h4>"

				+ "</div>"
				+ "</div>"
				+ "	<div class='container' style='width:100%;'>"
				+ "	<div class='col-md-4 well' style='border: 5px solid #225656;'> Here will be some data</div>"
				+ "	<div class='col-md-4 well' style='border: 5px solid #225656;'> Here will be some data</div>"
				+ "	<div class='col-md-4 well' style='border: 5px solid #225656;'>  Here will be some data</div>"

				+ "<a href='http://localhost:8080/shopping1/indexTemplate.jsp?otp' class='col-md-5 btn btn-primary' style='margin:2px; height:50px;'>Click Here to login</a>"
				+ "	<a href='#' class='col-md-5 btn btn-primary' style='margin:2px; height:50px;'>OTP :- "+tempOtp+"</a>"

				+ "	</div>"
				+ "</div><!-- end of middle -->"
				+ "<div class='container bottom' >"
				+ "<div> <p class='font'>Please visit the site and enjoy shopping from anywhere</p>"
				+ "	<p>Connect Us </p>"

				+ "	</div>"

				+ "</div>"

				+ "</div>"

				+ "<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js'></script>"
				+ "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'></script>"
				+ "</body>" 
				+ "</html>";
		
		
		
		
		
		
		
		
			    
			  
			try{
			//props.put("mail.smtp.host", "smtp.gmail.com");//change accordingly 
			props.put("mail.smtp.host", "mail.makemyshopy.com");//change accordingly 
			props.put("mail.smtp.auth", "true");
			props.put("mail.smtp.starttls.enable", "true");
//			props.put("mail.smtp.port", "587");
			props.put("mail.smtp.port", "8025");
			  
			session = Session.getDefaultInstance(props, new javax.mail.Authenticator() 
			{  
			  protected PasswordAuthentication getPasswordAuthentication() {  
			  return new PasswordAuthentication(user,pass);  
			}  
			});  
			//2nd step)compose message  
			try {  
				
			 message = new MimeMessage(session);  
			 message.setFrom(new InternetAddress(user));  
			 message.addRecipient(Message.RecipientType.TO,new InternetAddress(email));  
			 
			 
			 if(propertyValue != null && propertyValue.equalsIgnoreCase(ProductInterfaceImpl.OTP_REGISTER))
			 {
				 link = "http://localhost:8080/shopping1/indexTemplate.jsp?otp";
				 msg = "Please click the link above and note down this OTP "+tempOtp+" during Registration";
				 message.setSubject("Registration Link with OTP");
				 message.setContent(mailTemplet, "text/html; charset=utf-8");
			 }
			 
			 if(propertyValue != null && propertyValue.equalsIgnoreCase(ProductInterfaceImpl.FORGOT_PASSWORD))
			 {
				 message.setSubject("Confidential");
			     message.setText("Your password is : "+password+ " Please keep it confidential");  
			 }
			   
			 //3rd step)send message  
			 Transport.send(message);  
			  
			 System.out.println("Done"); 
			 
			 } catch (MessagingException e) {  
			    throw new RuntimeException(e);  
			 }
			
			return true;
	}
	catch(Exception e)
	{
		e.printStackTrace();
	}
		finally
		{
			 props = null;
			 session = null;
			 message = null;
			 link = null;
			 msg = null;
			 tempOtp = null;
			 mailTemplet = null;
		}
		return false;
			}  
    }

