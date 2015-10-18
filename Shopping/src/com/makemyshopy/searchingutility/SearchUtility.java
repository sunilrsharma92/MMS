package com.makemyshopy.searchingutility;

/* LuceneExample.java */


import java.io.File;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriter.MaxFieldLength;
import org.apache.lucene.queryParser.MultiFieldQueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.apache.lucene.store.SimpleFSDirectory;
import org.apache.lucene.util.Version;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.eshop.database.utility.MyConnection;
import com.eshop.logger.MakemyshopyLogger;
import com.shopping.common.CommonMethodImpl;


public class SearchUtility {
 
	MakemyshopyLogger mms = new MakemyshopyLogger();
 public static final File INDEX_DIRECTORY = new File("IndexDirectory");
 
 public void createIndex(String action, String sql) {
  
//  System.out.println("-- Indexing --");
  
  try {
   //JDBC Section
   Class.forName("com.mysql.jdbc.Driver").newInstance();
   //Assuming database bookstore exists
   Connection conn = conn = MyConnection.getConnection();
   Statement stmt = conn.createStatement(); 
   
   ResultSet rs = stmt.executeQuery(sql);
   
   //Lucene Section
   Directory directory = new SimpleFSDirectory(INDEX_DIRECTORY);
   Analyzer analyzer = new StandardAnalyzer(Version.LUCENE_30);
   IndexWriter iWriter = new IndexWriter(directory, analyzer, true,MaxFieldLength.UNLIMITED);
   
   //Looping through resultset and adding to index file
   int count = 0;
   while(rs.next()) {
    Document doc = new Document();
    
    if(action.equals("shop"))
    {
    	doc.add(new Field("shopid", ""+rs.getLong("supplier_key"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("companyname", rs.getString("company_name"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("firstname", rs.getString("first_name"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("lastname", rs.getString("last_name"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("address1", rs.getString("address1"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("address2", rs.getString("address2"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("phone", rs.getString("phone"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("state", rs.getString("state"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("city", rs.getString("city"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("street", rs.getString("street"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("postalcode", ""+rs.getLong("postal_code"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("email", rs.getString("email"), Field.Store.YES, Field.Index.ANALYZED ));
//        doc.add(new Field("shoptype", rs.getString("type_goods"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("images", rs.getString("profile_img"), Field.Store.YES, Field.Index.ANALYZED ));
        
    }
    else if(action.equals("product"))
    {
    	doc.add(new Field("productid", ""+rs.getLong("product_key"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("price", ""+rs.getFloat("unite_price"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("stock", ""+rs.getFloat("units_in_stock"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("prodName", rs.getString("product_name"), Field.Store.YES, Field.Index.ANALYZED ));
        doc.add(new Field("images", rs.getString("picture"), Field.Store.YES, Field.Index.ANALYZED ));
        
    }
    
    
    //Adding doc to iWriter
    iWriter.addDocument(doc);
    count++;
   }
   
//   System.out.println(count+" record indexed");
   
   //Closing iWriter
   iWriter.optimize(); 
   iWriter.commit();
   iWriter.close();
   
   //Closing JDBC connection
   rs.close();
   stmt.close();
   conn.close();
   
  } catch (Exception e) {
   e.printStackTrace();
  }
  
 }
 
 public String search(String keyword, String action, String searchColumnName, int command) 
 {
	 String output = "";
	 JSONArray jsonarray = new JSONArray();
	 JSONObject parentjson = new JSONObject();
	 
//  System.out.println("-- Seaching --");
  
  try {
   
   //Searching
   IndexReader reader = IndexReader.open(FSDirectory.open(INDEX_DIRECTORY), true);
   IndexSearcher searcher = new IndexSearcher(reader);
   Analyzer analyzer = new StandardAnalyzer(Version.LUCENE_30);
   //MultiFieldQueryParser is used to search multiple fields
   String[] filesToSearch = {searchColumnName};
   MultiFieldQueryParser mqp = new MultiFieldQueryParser(Version.LUCENE_30, filesToSearch , analyzer);
   
   Query query = mqp.parse(keyword);//search the given keyword
   
//   System.out.println("query >> " + query);
   
   TopDocs hits = searcher.search(query, 100); // run the query
   
//   System.out.println("Results found >> " + hits.totalHits);
   
   for (int i = 0; i < hits.totalHits; i++) 
   {
    Document doc = searcher.doc(hits.scoreDocs[i].doc);//get the next  document
    
//    System.out.println(doc.get("productid")+" "+doc.get("price")+" "+doc.get("stock")+" "+doc.get("prodName")+" "+doc.get("images"));
    
    
    if(action.equals("shop"))
	   {
	    	Long shopid = Long.parseLong(doc.get("shopid"));
		    String companyname = doc.get("companyname");
		    String firstname = doc.get("firstname");
		    String lastname = doc.get("lastname");
		    String address1 = doc.get("address1");
		    String address2 = doc.get("address2");
		    String phone = doc.get("phone");
		    String state = doc.get("state");
		    String city = doc.get("city");
		    String street = doc.get("street");
		    String postalcode = doc.get("postalcode");
		    String email = doc.get("email");
//		    String shoptype = doc.get("shoptype");
		    String images = doc.get("images");

		    JSONObject childjson = new JSONObject();
			childjson.put("shopid", shopid);
			childjson.put("companyname", companyname);
			childjson.put("firstname", firstname);
			childjson.put("lastname", lastname);
			childjson.put("address1", address1);
			childjson.put("address2", address2);
			childjson.put("phone", phone);
			childjson.put("state", state);
			childjson.put("city", city);
			childjson.put("street", street);
			childjson.put("postalcode", postalcode);
			childjson.put("email", email);
//			childjson.put("shoptype", shoptype);
			childjson.put("images", images);
			
			jsonarray.add(childjson);
	   }
	   else if(action.equals("product"))
	   {
		    Long productid = Long.parseLong(doc.get("productid"));
		    float price = Float.parseFloat(doc.get("price"));
		    float stock = Float.parseFloat(doc.get("stock"));
		    String productname = doc.get("prodName");
		    String images = doc.get("images");
		    
		    JSONObject childjson = new JSONObject();
			childjson.put("productid", productid);
			childjson.put("price", price);
			childjson.put("stock", stock);
			childjson.put("prodName", productname);
			childjson.put("images", images);
			
			jsonarray.add(childjson);
	   }
    
    
    
	
	// //System.out.println("jsonarray : :  : :"+jsonarray);
   }

   parentjson.put("product", jsonarray);
   parentjson = CommonMethodImpl.putSuccessJson(parentjson, command);

   output = parentjson.toString();
	// //System.out.println("output ::::::::: "+output);
   return output;
	
  } catch (Exception e) 
  {
	  e.printStackTrace();
	  mms.writeLogs("SearchUtility search() Exception : "+e,0);
  }
  return null;
  
 }


// public static void main(String[] args)
public String searchProduct(String keyword, String action)  
	 {
try
{
	String searchColumnName = "";
	String sql = "";
	int command = 0;
	 
	   if(action.equals("shop"))
	   {
		   searchColumnName= "companyname";
		   sql = "select * from suppliers";
		   command = 2006;
	   }
	   else if(action.equals("product"))
	   {
		   searchColumnName= "prodName";
		   sql = "select * from products";
		   command = 2003;
	   }
	   
//	System.out.println("keyword : "+keyword);
   SearchUtility obj = new SearchUtility();
  
  //creating index
  obj.createIndex(action, sql);
  
  //searching keyword
  String jsonRecord = obj.search(keyword, action, searchColumnName, command);
//  String jsonRecord = obj.search("lov");

  
  //using wild card serach
//  obj.search("veet*");


  //using logical operator
//  obj.search("veet OR Lovely");
//  obj.search("veet AND Lovely");
  
  return jsonRecord;
  
}
catch(Exception e)
{
	e.printStackTrace();
//	mms.writeLogs("SearchUtility searchProduct() Exception : "+e,0);
	return null;
}
  
 }
}