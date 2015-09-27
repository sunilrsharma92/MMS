package com.eshop.logger;



public class MakemyshopyLogger implements Constants{
	 final static org.apache.log4j.Logger logger = org.apache.log4j.Logger.getLogger(MakemyshopyLogger.class);

	    public  void writeLogs(String logMsg,int flag)
	    {
	           if(flag == 1)
	           {
	                logger.debug(logMsg+"\n-----------------------------------------------------------------------------------------\n");
//	                System.out.println(""+logMsg);
	           }
	           else 
	           {
	               logger.error(logMsg+"\n\n");
//	               System.out.println(""+logMsg);
	           }
	    }
	    
//	    public static void main(String args[])
//	    {
//	    	makemyshopyLogger mmsL = new makemyshopyLogger();
//	    	mmsL.writeLogs("MakeMyshopy.com",1);
//	    }
	}