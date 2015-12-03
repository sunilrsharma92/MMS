<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

<link rel = "stylesheet" href = "css/bootstrap.css">
<link rel = "stylesheet" href = "css/style.css">
<link href = "css/bootstrap-editable.css" rel = "stylesheet" />
<link href = "css/style1.css" rel = "stylesheet" />
<link href = "css/bootstrap.min.css" rel = "stylesheet">

<script src = "js/jquery.min.js"></script>
<script type = "text/javascript" src = "js/myjs/handleRequest.js"></script>
<script type = "text/javascript" src = "js/myjs/handleResponse.js"></script>
<script type = "text/javascript" src = "js/myjs/handleMessage.js"></script>
<script type = "text/javascript" src = "js/myjs/callServlet.js"></script>
<script type = "text/javascript" src = "js/myjs/ready.js"></script>
<script src = "js/bootstrap.js"></script>
<!-- <script src = "http://code.jquery.com/jquery-2.0.3.min.js"></script> -->
<script src = "js/bootstrap.min.js"></script>
<!-- x-editable (bootstrap version) -->
<!-- main.js -->
<!--<script src = "js/main.js"></script>-->

<style type = "text/css">
.fade-in {
	opacity: 0.1;
	transition: opacity 600ms;
}

.row1:hover .fade-in {
	opacity: 1;
}

.bbtn {
	background: none;
	border: 0px;
}
</style>



</head>
<body>



	<!-- start of top -->
	<div class = "container" style = "background-color: #037DBB;">
		<div class = "row row1">
		
			<div class = "col-md-3 col-sm-6 col-xs-12 prof">
				<img class = "img-responsive" src = "Images/profileImg.jpg">
			</div><!-- end of col-3 -->
			
			<div class = "col-md-9 col-sm-6 col-xs-12">
				<h3>Shop Dash</h3>
				<button type = "button" id = "editbtn" class = "btn btn-default pull-right" title = "Edit below details">
					<span class = "glyphicon glyphicon-pencil"></span>
				</button>
				<table>
					<tr>
						<td><span>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
						</span></td>
						<!--         <td><a href = "#" id = "name" class = "a" data-type = "text" data-placement = "right" data-title = "Enter username">Rahul Madakatti</a></td>-->
						<td><div id = "name1">
								<label id = "name" class = "labelfont">Rahul Madakatti</label>
							</div></td>
					</tr>
					<tr>
						<td><span>Address &nbsp;&nbsp;: </span></td>
						<!--        <td><a href = "#" id = "address" class = "a" data-type = "textarea" data-rows = "2" data-placement = "right" data-title = "Enter address">Tulsi Aangan Near Ganesh Ghat</a></td>-->
						<td><div id = "address1">
								<label id = "address" class = "labelfont">Tulsi Aangan Near
									Ganesh Ghat</label>
							</div></td>
					</tr>
					<tr>
						<td><span>State&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
						</span></td>
						<!--        <td><a href = "#" id = "state" class = "a" data-type = "text" data-placement = "right" data-title = "Enter state">Maharashtra</a></td>-->
						<td><div id = "state1">
								<label id = "state" class = "labelfont">Maharashtra</label>
							</div></td>
					</tr>
					<tr>
						<td><span>City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
						</span></td>
						<!--        <td><a href = "#" id = "city" class = "a" data-type = "text" data-placement = "right" data-title = "Enter city">Thane</a></td>-->
						<td><div id = "city1">
								<label id = "city" class = "labelfont">Thane</label>
							</div></td>
					</tr>
					<tr>
						<td><span>Pin Code
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </span></td>
						<!--        <td><a href = "#" id = "pin" class = "a" data-type = "text" data-placement = "right" data-title = "Enter pin">421503</a></td>-->
						<td><div id = "pincode1">
								<label id = "pincode" class = "labelfont">421503</label>
							</div></td>
					</tr>
				</table>
				<!-- end of table -->
				</br> 
				<span class = "pull-right">Social Connect:
				<button type="button" class = "btn btn-default"><span class = "glyphicon glyphicon-thumbs-up"></span> facebook</span></button>
				
			</div>

		</div>
		<!-- end of col-9 -->

	</div>
	<!-- end of row-->


	</div>
	<!--end of container top -->
	<!-- end of top -->

	<hr class = "large">
	<!-- start of middle -->
	<div class = "container">
		<div class = "row">
			<div class = "col-md-2" style = "margin-top: 20px;">
				<div class = "list-group side-bar">
					<a href = "profile1.jsp" class = "list-group-item active"><span
						class = "glyphicon glyphicon-home"></span> Dash</a> <a href = "#"
						class = "list-group-item"><span
						class = "glyphicon glyphicon-pencil"></span> Edit Slider</a> <a href = "#"
						class = "list-group-item"><span
						class = "glyphicon glyphicon-pencil"></span> Edit Featured</a> <a
						href = "#" class = "list-group-item"><span
						class = "glyphicon glyphicon-pencil"></span> Edit New item</a>
					<hr class = "large">
					<a href = "table.html" class = "list-group-item"><span
						class = "glyphicon glyphicon-plus"></span> Add Products</a>

				</div>

			</div>
			<!-- end of col-2 -->
			<div class = "col-md-10">

				<!-- Slider -->

				<br>
				<div id = "myCarousel" class = "carousel slide" data-ride = "carousel">
					<!-- Indicators -->
					<ol class = "carousel-indicators">
						<li data-target = "#myCarousel" data-slide-to = "0" class = "active"></li>
						<li data-target = "#myCarousel" data-slide-to = "1"></li>
						<li data-target = "#myCarousel" data-slide-to = "2"></li>

					</ol>

					<!-- Wrapper for slides -->
					<div class = "carousel-inner" role = "listbox">
						<div class = "item active">
							<img src = "Images/11.jpg">
							<h4 class = "font" align = "center">This is header</h4>
							<p class = "font" align = "center">This is paragraph with description</p>
						</div>

						<div class = "item">
							<img src = "Images/22.jpg">
							<h4 class = "font" align = "center">This is header</h4>
							<p class = "font" align = "center">This is paragraph with
								description</p>
						</div>

						<div class = "item">
							<img src = "Images/33.jpg">
							<h4 class = "font" align = "center">This is header</h4>
							<p class = "font" align = "center">This is paragraph with
								description</p>
						</div>


					</div>

					<!-- Left and right controls -->
					<a class = "left carousel-control" href = "#myCarousel" role = "button"
						data-slide = "prev"> <span
						class = "glyphicon glyphicon-chevron-left" aria-hidden = "true"></span>
						<span class = "sr-only">Previous</span>
					</a> <a class = "right carousel-control" href = "#myCarousel" role = "button"
						data-slide = "next"> <span
						class = "glyphicon glyphicon-chevron-right" aria-hidden = "true"></span>
						<span class = "sr-only">Next</span>
					</a>
				</div>

				<!-- End of slider  -->


				<div class = "row">
					<hr class = "small">
					<h3 class = "font" align = "center">Featured Items</h3>
					<hr class = "small">


					<div class = "col-md-2 col-sm-3  col-xs-4 wrap">
						<div class = "portfolio-item">
							<a href = "#"> <img class = "img-portfolio img-responsive"
								src = "Images/tea2.png">
							</a>
						</div>
						<div class = "align-center">
							<div class = "productname font">Product Name:</div>
							<div class = "productprice font">price:120</div>
							<div class = "instock font">Instock:</div>
							<div class = "quantity font">
								Quantity:<input id = "qtytxt" type = "text" name = "quantity">
							</div>
							<div class = "cartbtn font">
								<button type = "button" class = "btn btn-success cartsz ">ADD</button>
							</div>
						</div>
					</div>

					<div class = "col-md-2 col-sm-3  col-xs-4 wrap">
						<div class = "portfolio-item">
							<a href = "#"> <img class = "img-portfolio img-responsive"
								src = "Images/tea2.png">
							</a>
						</div>
						<div class = "align-center">
							<div class = "productname font">Product Name:</div>
							<div class = "productprice font">price:120</div>
							<div class = "instock font">Instock:</div>
							<div class = "quantity font">
								Quantity:<input id = "qtytxt" type = "text" name = "quantity">
							</div>
							<div class = "cartbtn font">
								<button type = "button" class = "btn btn-success cartsz ">ADD</button>
							</div>
						</div>
					</div>
					<div class = "col-md-2 col-sm-3  col-xs-4 wrap">
						<div class = "portfolio-item">
							<a href = "#"> <img class = "img-portfolio img-responsive"
								src = "Images/tea2.png">
							</a>
						</div>
						<div class = "align-center">
							<div class = "productname font">Product Name:</div>
							<div class = "productprice font">price:120</div>
							<div class = "instock font">Instock:</div>
							<div class = "quantity font">
								Quantity:<input id = "qtytxt" type = "text" name = "quantity">
							</div>
							<div class = "cartbtn font">
								<button type = "button" class = "btn btn-success cartsz ">ADD</button>
							</div>
						</div>
					</div>
					<div class = "col-md-2 col-sm-3  col-xs-4 wrap">
						<div class = "portfolio-item">
							<a href = "#"> <img class = "img-portfolio img-responsive"
								src = "Images/tea2.png">
							</a>
						</div>
						<div class = "align-center">
							<div class = "productname font">Product Name:</div>
							<div class = "productprice font">price:120</div>
							<div class = "instock font">Instock:</div>
							<div class = "quantity font">
								Quantity:<input id = "qtytxt" type = "text" name = "quantity">
							</div>
							<div class = "cartbtn font">
								<button type = "button" class = "btn btn-success cartsz ">ADD</button>
							</div>
						</div>
					</div>
					<div class = "col-md-2 col-sm-3  col-xs-4 wrap">
						<div class = "portfolio-item">
							<a href = "#"> <img class = "img-portfolio img-responsive"
								src = "Images/tea2.png">
							</a>
						</div>
						<div class = "align-center">
							<div class = "productname font">Product Name:</div>
							<div class = "productprice font">price:120</div>
							<div class = "instock font">Instock:</div>
							<div class = "quantity font">
								Quantity:<input id = "qtytxt" type = "text" name = "quantity">
							</div>
							<div class = "cartbtn font">
								<button type = "button" class = "btn btn-success cartsz ">ADD</button>
							</div>
						</div>
					</div>
					<div class = "col-md-2 col-sm-3  col-xs-4 wrap">
						<div class = "portfolio-item">
							<a href = "#"> <img class = "img-portfolio img-responsive"
								src = "Images/tea2.png">
							</a>
						</div>
						<div class = "align-center">
							<div class = "productname font">Product Name:</div>
							<div class = "productprice font">price:120</div>
							<div class = "instock font">Instock:</div>
							<div class = "quantity font">
								Quantity:<input id = "qtytxt" type = "text" name = "quantity">
							</div>
							<div class = "cartbtn font">
								<button type = "button" class = "btn btn-success cartsz ">ADD</button>
							</div>
						</div>
					</div>



				</div>
				<!-- End of inner row -->
				<div class = "row">
					<hr class = "small">
					<h3 class = "font" align = "center">Top New Items</h3>
					<hr class = "small">
					<div class = "col-md-2 col-sm-3  col-xs-4 wrap">
						<div class = "portfolio-item">
							<a href = "#"> <img class = "img-portfolio img-responsive"
								src = "Images/tea2.png">
							</a>
						</div>
						<div class = "align-center">
							<div class = "productname font">Product Name:</div>
							<div class = "productprice font">price:120</div>
							<div class = "instock font">Instock:</div>
							<div class = "quantity font">
								Quantity:<input id = "qtytxt" type = "text" name = "quantity">
							</div>
							<div class = "cartbtn font">
								<button type = "button" class = "btn btn-success cartsz ">ADD</button>
							</div>
						</div>
					</div>
					<div class = "col-md-2 col-sm-3  col-xs-4 wrap">
						<div class = "portfolio-item">
							<a href = "#"> <img class = "img-portfolio img-responsive"
								src = "Images/tea2.png">
							</a>
						</div>
						<div class = "align-center">
							<div class = "productname font">Product Name:</div>
							<div class = "productprice font">price:120</div>
							<div class = "instock font">Instock:</div>
							<div class = "quantity font">
								Quantity:<input id = "qtytxt" type = "text" name = "quantity">
							</div>
							<div class = "cartbtn font">
								<button type = "button" class = "btn btn-success cartsz ">ADD</button>
							</div>
						</div>
					</div>
					<div class = "col-md-2 col-sm-3  col-xs-4 wrap">
						<div class = "portfolio-item">
							<a href = "#"> <img class = "img-portfolio img-responsive"
								src = "Images/tea2.png">
							</a>
						</div>
						<div class = "align-center">
							<div class = "productname font">Product Name:</div>
							<div class = "productprice font">price:120</div>
							<div class = "instock font">Instock:</div>
							<div class = "quantity font">
								Quantity:<input id = "qtytxt" type = "text" name = "quantity">
							</div>
							<div class = "cartbtn font">
								<button type = "button" class = "btn btn-success cartsz ">ADD</button>
							</div>
						</div>
					</div>
					<div class = "col-md-2 col-sm-3  col-xs-4 wrap">
						<div class = "portfolio-item">
							<a href = "#"> <img class = "img-portfolio img-responsive"
								src = "Images/tea2.png">
							</a>
						</div>
						<div class = "align-center">
							<div class = "productname font">Product Name:</div>
							<div class = "productprice font">price:120</div>
							<div class = "instock font">Instock:</div>
							<div class = "quantity font">
								Quantity:<input id = "qtytxt" type = "text" name = "quantity">
							</div>
							<div class = "cartbtn font">
								<button type = "button" class = "btn btn-success cartsz ">ADD</button>
							</div>
						</div>
					</div>
					<div class = "col-md-2 col-sm-3  col-xs-4 wrap">
						<div class = "portfolio-item">
							<a href = "#"> <img class = "img-portfolio img-responsive"
								src = "Images/tea2.png">
							</a>
						</div>
						<div class = "align-center">
							<div class = "productname font">Product Name:</div>
							<div class = "productprice font">price:120</div>
							<div class = "instock font">Instock:</div>
							<div class = "quantity font">
								Quantity:<input id = "qtytxt" type = "text" name = "quantity">
							</div>
							<div class = "cartbtn font">
								<button type = "button" class = "btn btn-success cartsz ">ADD</button>
							</div>
						</div>
					</div>
					<div class = "col-md-2 col-sm-3  col-xs-4 wrap">
						<div class = "portfolio-item">
							<a href = "#"> <img class = "img-portfolio img-responsive"
								src = "Images/tea2.png">
							</a>
						</div>
						<div class = "align-center">
							<div class = "productname font">Product Name:</div>
							<div class = "productprice font">price:120</div>
							<div class = "instock font">Instock:</div>
							<div class = "quantity font">
								Quantity:<input id = "qtytxt" type = "text" name = "quantity">
							</div>
							<div class = "cartbtn font">
								<button type = "button" class = "btn btn-success cartsz ">ADD</button>
							</div>
						</div>
					</div>



				</div>
				<!-- End of inner row -->


			</div>
			<!-- end col-10 -->
		</div>
		<!-- end of row -->
	</div>
	<!-- end of container -->
	<!--end of middle  -->

	<hr class = "large">
	<!-- footer -->
	<jsp:include page = "footer.jsp" />

	<!-- end of footer -->
</body>
</html>