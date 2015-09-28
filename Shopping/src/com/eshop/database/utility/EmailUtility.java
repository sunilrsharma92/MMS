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

public class EmailUtility
{

	public static boolean sendEmail(String email, String password, String propertyValue, String tempOtp) throws AddressException, MessagingException
	{

		// final String user="sunilrsharma92@gmail.com";//change accordingly
		// final String pass="sunils@123";
		final String user = "support@makemyshopy.com";// change accordingly
		final String pass = "madakatti@2015";

		// 1st step) Get the session object
		Properties props = new Properties();
		Session session = null;
		MimeMessage message = null;
		String link = null;
		String msg = null;

		link = "http://localhost:8080/shopping1/indexTemplate.jsp?otp";  //changed accordingly
//		link = "http://www.makemyshopy.com/shopping/indexTemplate.jsp?otp";
		
		String mailTemplet ="<!DOCTYPE html>"+
				"<html style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;font-family: sans-serif;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;font-size: 10px;-webkit-tap-highlight-color: rgba(0,0,0,0);\">"+
				"<head style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;\">"+
				"  <title style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;\"></title>"+
				""+
				"  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;\">"+
				"  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;\">"+
				""+
				"  <style type=\"text/css\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;\">"+
				"    .top{"+
				"      width : 100%; "+
				"      background-color : #1D9688; "+
				"      height : 100px;"+
				"      border : 5px solid #FFF;"+
				"    }"+
				"    .font{"+
				"      color : #FFF;"+
				"    }"+
				"    .middle{"+
				"      width : 100%; "+
				"      /*height: 420px;*/"+
				"      border : 5px solid #FFF;"+
				"      background-color : #225656; "+
				""+
				"    }"+
				"    .bottom{"+
				"      width : 100%; "+
				"      border : 5px solid #FFF;"+
				"      height : 150px;"+
				"      background-color : gray;"+
				"    }"+
				"    .img-circle{"+
				"      width : 100%;"+
				"    }"+
				"    .head{"+
				"      height : 50px;"+
				"    }"+
				"    .well{"+
				"      /*border: 5px solid #225656;*/"+
				"      width : 100%;"+
				"    }"+
				"    .btn{"+
				"      margin : 16px;"+
				"      height : 50px;"+
				"    }"+
				"  </style>"+
				"</head>"+
				"<body style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;margin: 0;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;font-size: 14px;line-height: 1.42857143;color: #333;background-color: #fff;\">"+
				"  <div class=\"container well\" style=\"width: 500px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;min-height: 20px;padding: 19px;margin-bottom: 20px;background-color: #f5f5f5;border: 1px solid #e3e3e3;border-radius: 4px;-webkit-box-shadow: inset 0 1px 3px rgba(0,0,0,.05),0 1px 0 rgba(255,255,255,.1);box-shadow: inset 0 1px 3px rgba(0,0,0,.05),0 1px 0 rgba(255,255,255,.1);background-image: linear-gradient(to bottom,#e8e8e8 0,#f5f5f5 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe8e8e8', endColorstr='#fff5f5f5', GradientType=0);background-repeat: repeat-x;border-color: #dcdcdc;\">"+
				"    <div class=\"container top\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;width: 100%;background-color: #1D9688;height: 100px;border: 5px solid #FFF;\">"+
				"      <div class=\"font\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;color: #FFF;\"><h4 align=\"center\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;font-family: inherit;font-weight: 500;line-height: 1.1;color: inherit;margin-top: 10px;margin-bottom: 10px;font-size: 18px;\">Welcome to</h4> </div>"+
				"      <div class=\"font\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;color: #FFF;\"><h3 align=\"center\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;orphans: 3;widows: 3;page-break-after: avoid;font-family: inherit;font-weight: 500;line-height: 1.1;color: inherit;margin-top: 20px;margin-bottom: 10px;font-size: 24px;\">Make My Shopy</h3> </div>"+
				"    </div><!-- End of Top -->"+
				"    <div class=\"container middle\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;width: 100%;border: 5px solid #FFF;background-color: #225656;\">"+
				"      <div class=\"row\" style=\"margin-top: 10px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;margin-right: -15px;margin-left: -15px;\">"+
				"        <p class=\"font\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;orphans: 3;widows: 3;margin: 0 0 10px;color: #FFF;\">Thanks for registering with us. Keep Shopping. Enjoy Shopping</p>"+
				""+
				"        <div class=\"col-md-4 col-sm-6 col-xs-12\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;position: relative;min-height: 1px;padding-right: 15px;padding-left: 15px;float: left;width: 33.33333333%;\">                   "+
				"          <img src=\"https://lh3.googleusercontent.com/L3TzARKoDt1Q2QvRDTi2O1QzM1GReh3VhAkcCArM7Ny3=s250-no\" class=\"img-circle\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;border: 0;vertical-align: middle;page-break-inside: avoid;border-radius: 50%;width: 100%;max-width: 100%!important;\"> "+
				"          <h4 class=\"font head\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;font-family: inherit;font-weight: 500;line-height: 1.1;color: #FFF;margin-top: 10px;margin-bottom: 10px;font-size: 18px;height: 50px;\">Trusted Seller</h4>"+
				"          <div class=\"col-md-4 well\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;position: relative;min-height: 20px;padding-right: 15px;padding-left: 15px;width: 100%;padding: 19px;margin-bottom: 20px;background-color: #f5f5f5;border: 1px solid #e3e3e3;border-radius: 4px;-webkit-box-shadow: inset 0 1px 3px rgba(0,0,0,.05),0 1px 0 rgba(255,255,255,.1);box-shadow: inset 0 1px 3px rgba(0,0,0,.05),0 1px 0 rgba(255,255,255,.1);background-image: linear-gradient(to bottom,#e8e8e8 0,#f5f5f5 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe8e8e8', endColorstr='#fff5f5f5', GradientType=0);background-repeat: repeat-x;border-color: #dcdcdc;\"> Here will be some data</div>"+
				"        </div>"+
				""+
				"        <div class=\"col-md-4 col-sm-6 col-xs-12\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;position: relative;min-height: 1px;padding-right: 15px;padding-left: 15px;float: left;width: 33.33333333%;\">"+
				"          <img src=\"https://lh3.googleusercontent.com/0rUHD7l--SQNInnHwryU7TJKFhyqK1AO1nIpPhojSHWc=s256-no\" class=\"img-circle\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;border: 0;vertical-align: middle;page-break-inside: avoid;border-radius: 50%;width: 100%;max-width: 100%!important;\"> "+
				"          <h4 class=\"font head\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;font-family: inherit;font-weight: 500;line-height: 1.1;color: #FFF;margin-top: 10px;margin-bottom: 10px;font-size: 18px;height: 50px;\">Free Home Delivery</h4>"+
				"          <div class=\"col-md-4 well\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;position: relative;min-height: 20px;padding-right: 15px;padding-left: 15px;width: 100%;padding: 19px;margin-bottom: 20px;background-color: #f5f5f5;border: 1px solid #e3e3e3;border-radius: 4px;-webkit-box-shadow: inset 0 1px 3px rgba(0,0,0,.05),0 1px 0 rgba(255,255,255,.1);box-shadow: inset 0 1px 3px rgba(0,0,0,.05),0 1px 0 rgba(255,255,255,.1);background-image: linear-gradient(to bottom,#e8e8e8 0,#f5f5f5 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe8e8e8', endColorstr='#fff5f5f5', GradientType=0);background-repeat: repeat-x;border-color: #dcdcdc;\"> Here will be some data</div>"+
				"        </div>"+
				""+
				"        <div class=\"col-md-4 col-sm-6 col-xs-12\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;position: relative;min-height: 1px;padding-right: 15px;padding-left: 15px;float: left;width: 33.33333333%;\">"+
				"          <img src=\"https://lh3.googleusercontent.com/MYT0INb7vB4I3jf0eOD6QUrscwCLulTRS7ReUjTRZbJW=s512-no\" class=\"img-circle\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;border: 0;vertical-align: middle;page-break-inside: avoid;border-radius: 50%;width: 100%;max-width: 100%!important;\"> "+
				"          <h4 class=\"font head\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;font-family: inherit;font-weight: 500;line-height: 1.1;color: #FFF;margin-top: 10px;margin-bottom: 10px;font-size: 18px;height: 50px;\">HASSLE FREE RETURNS</h4>"+
				"          <div class=\"col-md-4 well\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;position: relative;min-height: 20px;padding-right: 15px;padding-left: 15px;width: 100%;padding: 19px;margin-bottom: 20px;background-color: #f5f5f5;border: 1px solid #e3e3e3;border-radius: 4px;-webkit-box-shadow: inset 0 1px 3px rgba(0,0,0,.05),0 1px 0 rgba(255,255,255,.1);box-shadow: inset 0 1px 3px rgba(0,0,0,.05),0 1px 0 rgba(255,255,255,.1);background-image: linear-gradient(to bottom,#e8e8e8 0,#f5f5f5 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe8e8e8', endColorstr='#fff5f5f5', GradientType=0);background-repeat: repeat-x;border-color: #dcdcdc;\"> Here will be some data</div>"+
				"        </div>"+
				""+
				"      </div><!-- end of row -->"+
				"      <div class=\"container\" style=\"width: 100%;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;\">  "+
				"        <a href="+link+" class=\"col-md-5 btn btn-primary\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;background-color: #337ab7;color: #fff;text-decoration: underline;position: relative;min-height: 1px;padding-right: 15px;padding-left: 15px;width: 41.66666667%;display: inline-block;padding: 6px 12px;margin-bottom: 0;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: linear-gradient(to bottom,#337ab7 0,#265a88 100%);border: 1px solid transparent;border-radius: 4px;border-color: #245580;text-shadow: 0 -1px 0 rgba(0,0,0,.2);-webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);background-repeat: repeat-x;margin: 16px;height: 50px;\">Click here to Login</a>"+
				"        <div class=\"col-md-5 btn btn-primary\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;background-color: #337ab7;color: #fff;text-decoration: underline;position: relative;min-height: 1px;padding-right: 15px;padding-left: 15px;width: 41.66666667%;display: inline-block;padding: 6px 12px;margin-bottom: 0;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: linear-gradient(to bottom,#337ab7 0,#265a88 100%);border: 1px solid transparent;border-radius: 4px;border-color: #245580;text-shadow: 0 -1px 0 rgba(0,0,0,.2);-webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);background-repeat: repeat-x;margin: 16px;height: 50px;\"> OTP : "+tempOtp+"</div>"+
				"      </div><!-- End of container -->"+
				"    </div><!-- end of middle -->"+
				""+
				"    <div class=\"container bottom\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;width: 100%;border: 5px solid #FFF;height: 150px;background-color: gray;\">"+
				"      <div style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;\"> <p class=\"font\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;orphans: 3;widows: 3;margin: 0 0 10px;color: #FFF;\">Please visit the site and enjoy shopping from anywhere</p>"+
				"        <p style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;orphans: 3;widows: 3;margin: 0 0 10px;\">Connect Us </p>"+
				"      </div>"+
				"    </div><!-- End of Bottom -->"+
				""+
				"  </div>"+
				""+
				"  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;\"></script>"+
				"  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;\"></script>"+
				""+
				"</body>"+
				"</html>";		
		
			  
		try
		{
			// props.put("mail.smtp.host", "smtp.gmail.com");//change
			// accordingly
			props.put("mail.smtp.host", "mail.makemyshopy.com");// change
																// accordingly
			props.put("mail.smtp.auth", "true");
			props.put("mail.smtp.starttls.enable", "true");
			// props.put("mail.smtp.port", "587");
			props.put("mail.smtp.port", "8025");

			session = Session.getDefaultInstance(props, new javax.mail.Authenticator()
			{
				protected PasswordAuthentication getPasswordAuthentication()
				{
					return new PasswordAuthentication(user, pass);
				}
			});
			// 2nd step)compose message
			try
			{

				message = new MimeMessage(session);
				message.setFrom(new InternetAddress(user));
				message.addRecipient(Message.RecipientType.TO, new InternetAddress(email));

				if (propertyValue != null && propertyValue.equalsIgnoreCase(ProductInterfaceImpl.OTP_REGISTER))
				{
					msg = "Please click the link above and note down this OTP " + tempOtp + " during Registration";
					message.setSubject("Registration Link with OTP");
					message.setContent(mailTemplet, "text/html; charset=utf-8");
				}

				if (propertyValue != null && propertyValue.equalsIgnoreCase(ProductInterfaceImpl.FORGOT_PASSWORD))
				{
					message.setSubject("Confidential");
					message.setText("Your new password is : " + tempOtp + " \nPlease Reset your Password as soon as you Login");
				}
				
				if (propertyValue != null && propertyValue.equalsIgnoreCase(ProductInterfaceImpl.CHANGE_PASSWORD))
				{
					message.setSubject("Information Alert");
					message.setText("Your password has been reset...\nIf it wasn't you,Make Forgot Password from our website to get your updated password");
				}

				if (propertyValue != null && propertyValue.equalsIgnoreCase(ProductInterfaceImpl.CHANGE_PASSWORD))
				{
					message.setSubject("Information Alert");
					message.setText("Your password has been reset...\nIf it wasn't you,Make Forgot Password from our website to get your updated password");
				}
				// 3rd step)send message
				Transport.send(message);

				System.out.println("Done");

			}
			catch (MessagingException e)
			{
				throw new RuntimeException(e);
			}

			return true;
		}
		catch (Exception e)
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
