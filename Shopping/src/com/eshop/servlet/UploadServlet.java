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
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.eshop.dao.ProductInterface;
import com.eshop.dao.ProductInterfaceImpl;
import com.eshop.logger.MakemyshopyLogger;

/**
 * Servlet implementation class UploadServlet
 */
@WebServlet("/UploadServlet")
public class UploadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private ServletFileUpload uploader = null;
    private String relativePath = "D:\\Git\\Code\\Local Code\\Shopping\\WebContent\\Images\\ProfileImg";
    private String foldername;
    private String PathofFile;
    private int Categoryid;
    MakemyshopyLogger log = new MakemyshopyLogger();
    
    @Override
    public void init() throws ServletException
    {
    	File file = new File(relativePath);
    	System.out.println(relativePath.length());
        foldername = "Images\\ProfileImg";
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
        
//        response.setContentType("text/html");
//        PrintWriter out = response.getWriter();
//        out.write("<html><head></head><body>");
        try {
        	
        	String ajaxUpdateResult = "";
            List fileItemsList = uploader.parseRequest(request);
            Iterator fileItemsIterator = fileItemsList.iterator();
            
            while(fileItemsIterator.hasNext())
            //for(int i=0;i<fileItemsList.size();i++)
            {
            	
                FileItem fileItem = (FileItem) fileItemsIterator.next();
                
                if (fileItem.isFormField()) {

                    ajaxUpdateResult += "Field " + fileItem.getFieldName() + " with value: " + fileItem.getString() + " is successfully read\n\r";
                    log.writeLogs(ajaxUpdateResult, 1);
                }
                else 
                {
                	
	                String filename=(fileItem.getName().substring(fileItem.getName().lastIndexOf("\\")+1,fileItem.getName().length()));
	                
	                File file = null;
	                
	                file = new File(relativePath+File.separator+filename);
	                PathofFile=foldername+"\\"+filename;
	                fileItem.write(file);
	//                InsertRecordInDBInterface in=new InsertRecordInDBInterfaceImpl();
	                
	//                    in.insertRecordInDBOfFile(filename,PathofFile);
	                ProductInterface dao = new ProductInterfaceImpl();
	//                dao.handleRequestResponse(jsonMsg, command);
	//                out.write("File "+fileItem.getName()+ " uploaded successfully.");
	//                out.write("<br>");
                
                }
            }
            
        } 
        
        catch (FileUploadException e) 
        {
//            out.write("Exception in uploading file.");
        	System.out.println("Exception in uploading file.");
        } 
        
        catch (Exception e) 
        {
        	e.printStackTrace();
        	System.out.println("Exception in uploading file.");
        }
        
//        out.write("</body></html>");
    }

}