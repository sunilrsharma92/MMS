package com.eshop.readwrite.propertiefiles;

/**
*
* @author devendra.b
*/
import java.io.File;
import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import com.eshop.logger.MakemyshopyLogger;

public class ModifyXMLDOM {

//   public static void main(String[] args) {
   public static String strUpdatedConnection = "";
   public static String strUpdatedDriver = "";
   public static String strUpdatedUsername = "";
   public static String strUpdatedPassword = "";
   public static String strUpdatedNode = "";
   MakemyshopyLogger mms = new MakemyshopyLogger();
   
   public String  xmlCurdOperation(String xmlFilePath, String connection, String connectionValue, String drivername, String drivernameValue, String username, String usernameValue, String password, String passwordValue) {

	   String filePath = xmlFilePath;
       File xmlFile = new File(filePath);
       DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
       DocumentBuilder dBuilder;
       try {
           dBuilder = dbFactory.newDocumentBuilder();
           Document doc = dBuilder.parse(xmlFile);
           doc.getDocumentElement().normalize();

           //update attribute value
//           updateAttributeValue(doc);

           //update Element value
           updateElementValue(doc, connection, connectionValue, drivername, drivernameValue, username, usernameValue, password, passwordValue);

           //delete element
//           deleteElement(doc);

           //add new element
//           addElement(doc);

           //write the updated document to file or console
           doc.getDocumentElement().normalize();
           TransformerFactory transformerFactory = TransformerFactory.newInstance();
           Transformer transformer = transformerFactory.newTransformer();
           DOMSource source = new DOMSource(doc);
           StreamResult result = new StreamResult(new File(xmlFilePath));
           transformer.setOutputProperty(OutputKeys.INDENT, "yes");
           transformer.transform(source, result);
           System.out.println("XML file updated successfully");
           
           if(strUpdatedConnection.equalsIgnoreCase(""))
           {
        	   strUpdatedConnection = "";
           }
           
           if(strUpdatedDriver.equalsIgnoreCase(""))
           {
        	   strUpdatedDriver = "";
           }
           
           if(strUpdatedUsername.equalsIgnoreCase(""))
           {
        	   strUpdatedUsername = "";
           }
           
           if(strUpdatedPassword.equalsIgnoreCase(""))
           {
        	   strUpdatedPassword = "";
           }
           
           strUpdatedNode = strUpdatedConnection + " , " + strUpdatedDriver + " , " + strUpdatedUsername + "  " + strUpdatedPassword;
           mms.writeLogs("ModifyXMLDOM --> xmlCurdOperation --> "+strUpdatedNode+" updated successfully", 1);
           return strUpdatedNode+" updated successfully";
//       } catch (SAXException | ParserConfigurationException | IOException | TransformerException e1) {
       } 
       catch (IOException e) 
       {
           e.printStackTrace();
           mms.writeLogs("ModifyXMLDOM --> xmlCurdOperation --> IO Exception : "+e, 0);
           return "URL Updation failed";
       }
       catch (SAXException e1) 
       {
           e1.printStackTrace();
           mms.writeLogs("ModifyXMLDOM --> xmlCurdOperation --> SAX Exception : "+e1, 0);
           return "URL Updation failed";
       }
       catch (ParserConfigurationException e2) 
       {
           e2.printStackTrace();
           mms.writeLogs("ModifyXMLDOM --> xmlCurdOperation --> Parser Configuration Exception : "+e2, 0);
           return "URL Updation failed";
       }
       catch (TransformerException e3) 
       {
           e3.printStackTrace();
           mms.writeLogs("ModifyXMLDOM --> xmlCurdOperation --> Transformer Exception : "+e3, 0);
           return "URL Updation failed";
       }
   }
   
   private static void updateElementValue(Document doc,  String connection, String connectionValue, String drivername, String drivernameValue, String username, String usernameValue, String password, String passwordValue) {
       try
       {
		   NodeList webservicedetails = doc.getElementsByTagName("context-param");
	       Element wsd = null;
	       //loop for each employee
	       for (int i = 0; i < webservicedetails.getLength(); i++) {
	           wsd = (Element) webservicedetails.item(i);
	           String name = wsd.getElementsByTagName("param-name").item(0).getFirstChild().getNodeValue();
	           Node value = wsd.getElementsByTagName("param-value").item(0).getFirstChild();
	           
	           if (name.equalsIgnoreCase(connection)) 
	           {
	               value.setNodeValue(connectionValue);
	               strUpdatedConnection = "Connection URL";
	           } 
	           else if(name.equalsIgnoreCase(drivername))
	           {
	               value.setNodeValue(drivernameValue);
	               strUpdatedDriver = "Driver name";
	           }
	           else if(name.equalsIgnoreCase(username))
	           {
	        	   value.setNodeValue(usernameValue);
	        	   strUpdatedUsername = "Username";
	           }
	           else if(name.equalsIgnoreCase(password))
	           {
	        	   value.setNodeValue(passwordValue);
	        	   strUpdatedPassword = "Password";
	           }
	       }
       }
	   catch(Exception e)
	   {
	      e.printStackTrace();
	   }
       }
       
/*
   private static void addElement(Document doc) {
       NodeList webservicedetails = doc.getElementsByTagName("web-app");
       Element wsd = null;

       //loop for each employee
       for (int i = 0; i < webservicedetails.getLength(); i++) {
           wsd = (Element) webservicedetails.item(i);
           Element cpElement = doc.createElement("context-param");
           wsd.appendChild(cpElement);

           NodeList webservicedetails1 = doc.getElementsByTagName("context-param");
           Element wsd1 = null;
           for (int j = 0; j < webservicedetails1.getLength(); j++) {
               wsd1 = (Element) webservicedetails1.item(j);
               Element pnElement = doc.createElement("param-name");
               Element pvElement = doc.createElement("param-value");

               pnElement.appendChild(doc.createTextNode("PRIMARY1"));
               pvElement.appendChild(doc.createTextNode("10000"));
               wsd1.appendChild(pnElement);
               wsd1.appendChild(pvElement);
           }
       }
   }

   private static void deleteElement(Document doc) {
       NodeList employees = doc.getElementsByTagName("context-param");
       Element emp = null;
       //loop for each employee
       for (int i = 0; i < employees.getLength(); i++) {
           emp = (Element) employees.item(i);
           Node genderNode = emp.getElementsByTagName("gender").item(0);
           emp.removeChild(genderNode);
       }

   }

   private static void updateAttributeValue(Document doc) 
   {
       NodeList webservicedetails = doc.getElementsByTagName("context-param");
       Element wsd = null;
       for (int i = 0; i < webservicedetails.getLength(); i++) 
       {
           wsd = (Element) webservicedetails.item(i);
           String gender = wsd.getElementsByTagName("param-name").item(0).getFirstChild().getNodeValue();
           if (gender.equalsIgnoreCase("PRIMARY")) 
           {
               wsd.setAttribute("id", "primary");
           } else 
           {
               wsd.setAttribute("id", "secondary");
           }
       }
   }
*/
   }