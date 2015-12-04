<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
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
	
</head>
<body>
<div class="container">
	<div class="row">
		<div class="col-md-6" id="viewProductdiv">
				
		</div><!--/col-md-6-->
		<div class="col-md-6" id="productdisc">
			
		</div><!--/col-md-6-->
	</div><!--/row-->
	
</div><!--/container-->

<script type="text/javascript" src='js/jquery.elevatezoom.js'></script>
<script type="text/javascript" src="js/myjs/viewProduct.js"></script>
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