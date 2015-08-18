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
	/**
     * Sends an e-mail message from a SMTP host with a list of attached files.
     *
     */
    

	

	public static String sendEmail(String email ,String password, String propertyValue) throws AddressException,
            MessagingException {

//			final String user="sunilrsharma92@gmail.com";//change accordingly  
//			final String pass="sunils@123";
			final String user="support@makemyshopy.com";//change accordingly  
			final String pass="madakatti@2015";
		
		
			String tempOtp = "";
			  
			//1st step) Get the session object    
			Properties props = new Properties();  
			//props.put("mail.smtp.host", "smtp.gmail.com");//change accordingly 
			props.put("mail.smtp.host", "mail.makemyshopy.com");//change accordingly 
			props.put("mail.smtp.auth", "true");
			props.put("mail.smtp.starttls.enable", "true");
//			props.put("mail.smtp.port", "587");
			props.put("mail.smtp.port", "8025");
			  
			Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() 
			{  
			  protected PasswordAuthentication getPasswordAuthentication() {  
			   return new PasswordAuthentication(user,pass);  
			   }  
			});  
			//2nd step)compose message  
			try {  
			 MimeMessage message = new MimeMessage(session);  
			 message.setFrom(new InternetAddress(user));  
			 message.addRecipient(Message.RecipientType.TO,new InternetAddress(email));  
			 
			 if(propertyValue != null && propertyValue.equalsIgnoreCase(ProductInterfaceImpl.OTP_REGISTER))
			 {
				 tempOtp = RandomStringUtilsTrial.orderNumber();
				 String link = "http://localhost:8080/shopping1/indexTemplate.jsp?otp";
				 String msg = "   Please click the link above and note down this OTP "+tempOtp+" during Registration";
				 message.setSubject("Registration Link with OTP");
				 message.setText(link + msg);
			 }
			 
			 if(propertyValue != null && propertyValue.equalsIgnoreCase(ProductInterfaceImpl.FORGOT_PASSWORD))
			 {
				 message.setSubject("Password");
				 
				 if(password != null && !password.trim().isEmpty())
					 message.setText("Your password is : "+password+ " Please note it down");  
				 else
					 message.setText("Please try once again, Error occurred..."); 
				 
			 }
			   
			 //3rd step)send message  
			 Transport.send(message);  
			  
			 System.out.println("Done"); 
			 
			 } catch (MessagingException e) {  
			    throw new RuntimeException(e);  
			 }
			
			return tempOtp;
			      
			}  
	
 
    }

