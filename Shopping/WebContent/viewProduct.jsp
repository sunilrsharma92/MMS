<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Make My Shopy</title>
	
	<style type="text/css">
	/*set a border on the images to prevent shifting*/
 #gallery_01 img
 {
 	border:2px solid white;
 }
 
 /*Change the colour*/
 .active img
 {
 	border:2px solid #333 !important;
 }
 
 .heightWidth
 {
 	height: 12%;
	width: 15%;
 }
 
	</style>
	<script type="text/javascript" src='js/jquery.elevatezoom.js'></script>
	<script type="text/javascript" src="js/myjs/viewProduct.js"></script>
</head>
<body>
<div class="container">
	<div class="row">
		<div class="col-md-6" id="viewProductdiv">
				
		</div><!--/col-md-6-->
		<div class="col-md-6" id="productdisc">
			<!-- <div class="row" style="width:100%; margin-top:20px;margin-left:20px;">
					<label><h2>Name of product<h2>	</label>
				</div>/row
				<div class="row" style="width:100%;margin-top:20px;margin-left:20px;">
					<label><h3>Product Describtion</h3></label>
					<p>Cotton Blanket Also Known As Solapuri Chaddar Is Very Attractive And Durable. Cotton Blanket Is Made On Jacquard Design To Give Adorable Centre Design Like Galicha.</p>
				</div>/row
				<div class="row" style="width:100%;margin-top:20px;margin-left:20px;">
				<button type="button">Add to cart	</button>
					
				</div>/row -->
			
		</div><!--/col-md-6-->
	</div><!--/row-->
	
</div><!--/container-->

<script type="text/javascript">
//initiate the plugin and pass the id of the div containing gallery images
$("#img_01").elevateZoom({gallery:'gallery_01', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'}); 

//pass the images to Fancybox
$("#img_01").bind("click", function(e) {  
  var ez =   $('#img_01').data('elevateZoom').css('width:550px; height:350px;');	
	$.fancybox(ez.getGalleryList());
  return false;
});
</script>

</body>
</html>