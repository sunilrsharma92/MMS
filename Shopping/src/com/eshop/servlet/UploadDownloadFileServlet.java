package com.eshop.servlet;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;
 
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;



public class UploadDownloadFileServlet extends HttpServlet
{
    private static final long serialVersionUID = 1L;
    private ServletFileUpload uploader = null;
//    private String relativePath = "C:\\Users\\Home\\Desktop\\Projects\\New Think Bigger\\Upload Image to Folder You Want\\MI Assignment Devendrakumar R. Barai\\WebContent\\themes\\images";
    
    private String relativePath = System.getProperty("catalina.base") + "\\webapps\\heenaboutique.com\\ROOT\\WEB-INF\\web.xml";
//    mms.writeLogs("tomcatPath : "+xmlfilepath, 1);
    
    private String foldername;
    private String PathofFile;
    private int Categoryid;
    
    @Override
    public void init() throws ServletException
    {
    	File file = new File(relativePath);
    	System.out.println(relativePath.length());
        foldername=(relativePath.substring(103, 116));
        System.out.println("FolderName "+foldername);
        DiskFileItemFactory fileFactory = new DiskFileItemFactory();
        File filesDir = (File) file;
        fileFactory.setRepository(filesDir);
        this.uploader = new ServletFileUpload(fileFactory);
    }
    
    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
    {
        
    	String fileName = request.getParameter("fileName");
        if(fileName == null || fileName.equals(""))
        {
            throw new ServletException("File Name can't be null or empty");
        }
        
        
        
        File file = new File(relativePath+File.separator+fileName);
        if(!file.exists())
        {
            throw new ServletException("File doesn't exists on server.");
        }
        
        
        
        
        ServletContext ctx = getServletContext();
        InputStream fis = new FileInputStream(file);
        String mimeType = ctx.getMimeType(file.getAbsolutePath());
        response.setContentType(mimeType != null? mimeType:"application/octet-stream");
        response.setContentLength((int) file.length());
        response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");
         
        
        ServletOutputStream os = response.getOutputStream();
        byte[] bufferData = new byte[1024];
        int read=0;
        
        
        while((read = fis.read(bufferData))!= -1)
        {
            os.write(bufferData, 0, read);
        }
        
        
        os.flush();
        os.close();
        fis.close();
        //System.out.println("File downloaded successfully");
    }
 
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
    {
       
    	if(!ServletFileUpload.isMultipartContent(request))
        {
            throw new ServletException("Content type is not multipart/form-data");
        }
         
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.write("<html><head></head><body>");
        try {
        	
            List<FileItem> fileItemsList = uploader.parseRequest(request);
            Iterator<FileItem> fileItemsIterator = fileItemsList.iterator();
            
            
            while(fileItemsIterator.hasNext())
            //for(int i=0;i<fileItemsList.size();i++)
            {
                FileItem fileItem = fileItemsIterator.next();
                
                if (fileItem.isFormField()) 
                {
                    //Plain request parameters will come here.
                	//int Categoryid=Integer.parseInt(request.getParameter("Category"));
                	String name = fileItem.getFieldName();
//                	System.out.println("Name "+name);
                	
                	//Categoryid=Integer.parseInt(name);
                	//System.out.println("Categoryid Name "+Categoryid);
                	
                	String value = fileItem.getString();
                	System.out.println("Value "+value);
                	
                	Categoryid=Integer.parseInt(value);
                	System.out.println("Categoryid "+Categoryid);
                }
                else{
                String filename=(fileItem.getName().substring(fileItem.getName().lastIndexOf("\\")+1,fileItem.getName().length()));
                
                File file = null;
                
                if(Categoryid==1)
                {
                	file = new File(relativePath+File.separator+"Sarees"+File.separator+filename);
                	PathofFile=foldername+"\\Sarees\\"+filename;
                }
                else if(Categoryid==2)
                {
                	file = new File(relativePath+File.separator+"Suits"+File.separator+filename);
                	PathofFile=foldername+"\\Suits\\"+filename;
                }
                else if(Categoryid==3)
                {
                	file = new File(relativePath+File.separator+"Dress Materials"+File.separator+filename);
                	PathofFile=foldername+"\\Dress Materials\\"+filename;
                }
                else if(Categoryid==4)
                {
                	file = new File(relativePath+File.separator+"Lagins"+File.separator+filename);
                	PathofFile=foldername+"\\Lagins\\"+filename;
                }
                else if(Categoryid==5)
                {
                	file = new File(relativePath+File.separator+"carousel"+File.separator+filename);
                	PathofFile=foldername+"\\carousel\\"+filename;
                	System.out.println("File :"+file+" Path :"+PathofFile);
                }
                
                //String fileExtesion = fileItem.getName().substring(fileItem.getName().lastIndexOf("."));
                fileItem.write(file);
//                InsertRecordInDBInterface in=new InsertRecordInDBInterfaceImpl();
                if(Categoryid==5)
                {
//                	in.insertImageInBannerdb(filename,PathofFile,Categoryid);
                }
                else
                {
//                    in.insertRecordInDBOfFile(filename,PathofFile,Categoryid);
                    
                }

                out.write("File "+fileItem.getName()+ " uploaded successfully.");
                out.write("<br>");
                
                }
            }
            if(Categoryid==5)
            {
            	response.sendRedirect("downloadfile1.jsp");
            }
            else
            {
            	response.sendRedirect("downloadfile.jsp");
            }
            
        } 
        
        catch (FileUploadException e) 
        {
            out.write("Exception in uploading file.");
        } 
        
        catch (Exception e) 
        {
        	e.printStackTrace();
            out.write("Exception in uploading file.");
        }
        
        out.write("</body></html>");
    }

}
