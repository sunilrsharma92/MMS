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
 
 public void createIndex() {
  
  System.out.println("-- Indexing --");
  
  try {
   //JDBC Section
   Class.forName("com.mysql.jdbc.Driver").newInstance();
   //Assuming database bookstore exists
   Connection conn = conn = MyConnection.getConnection();
   Statement stmt = conn.createStatement();   
   String sql = "select * from products";
   ResultSet rs = stmt.executeQuery(sql);
   
   //Lucene Section
   Directory directory = new SimpleFSDirectory(INDEX_DIRECTORY);
   Analyzer analyzer = new StandardAnalyzer(Version.LUCENE_30);
   IndexWriter iWriter = new IndexWriter(directory, analyzer, true,MaxFieldLength.UNLIMITED);
   
   //Looping through resultset and adding to index file
   int count = 0;
   while(rs.next()) {
    Document doc = new Document();
    
    doc.add(new Field("productid", ""+rs.getLong("product_key"), Field.Store.YES, Field.Index.ANALYZED ));
    doc.add(new Field("price", ""+rs.getFloat("unite_price"), Field.Store.YES, Field.Index.ANALYZED ));
    doc.add(new Field("stock", ""+rs.getFloat("units_in_stock"), Field.Store.YES, Field.Index.ANALYZED ));
    doc.add(new Field("prodName", rs.getString("product_name"), Field.Store.YES, Field.Index.ANALYZED ));
    doc.add(new Field("images", rs.getString("picture"), Field.Store.YES, Field.Index.ANALYZED ));
    
    //Adding doc to iWriter
    iWriter.addDocument(doc);
    count++;
   }
   
   System.out.println(count+" record indexed");
   
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
 
 public String search(String keyword) 
 {
	 String output = "";
	 JSONArray jsonarray = new JSONArray();
	 JSONObject parentjson = new JSONObject();
	 
  System.out.println("-- Seaching --");
  
  try {
   
   //Searching
   IndexReader reader = IndexReader.open(FSDirectory.open(INDEX_DIRECTORY), true);
   IndexSearcher searcher = new IndexSearcher(reader);
   Analyzer analyzer = new StandardAnalyzer(Version.LUCENE_30);
   //MultiFieldQueryParser is used to search multiple fields
   String[] filesToSearch = {"prodName"};
   MultiFieldQueryParser mqp = new MultiFieldQueryParser(Version.LUCENE_30, filesToSearch , analyzer);
   
   Query query = mqp.parse(keyword);//search the given keyword
   
   System.out.println("query >> " + query);
   
   TopDocs hits = searcher.search(query, 100); // run the query
   
   System.out.println("Results found >> " + hits.totalHits);
   
   for (int i = 0; i < hits.totalHits; i++) 
   {
    Document doc = searcher.doc(hits.scoreDocs[i].doc);//get the next  document
    
    System.out.println(doc.get("productid")+" "+doc.get("price")+" "+doc.get("stock")+" "+doc.get("prodName")+" "+doc.get("images"));
    
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
	// //System.out.println("jsonarray : :  : :"+jsonarray);

	parentjson.put("product", jsonarray);
	parentjson = CommonMethodImpl.putSuccessJson(parentjson, 2003);

	output = parentjson.toString();
	// //System.out.println("output ::::::::: "+output);
	return output;

   }
   return output;
  } catch (Exception e) 
  {
	  e.printStackTrace();
	  mms.writeLogs("SearchUtility search() Exception : "+e,0);
  }
  return null;
  
 }


// public static void main(String[] args)
public String searchProduct(String keyword)  
	 {
try
{
//	System.out.println("keyword : "+keyword);
   SearchUtility obj = new SearchUtility();
  
  //creating index
  obj.createIndex();
  
  //searching keyword
  String jsonRecord = obj.search(keyword);
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