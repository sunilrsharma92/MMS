<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Home</title>
<!-- <script type="text/javascript" src="js/myjs/ready.js"></script> -->
</head>
<body>
	<!-- Main Page -->
	<div class="container main-1">
		<div class="row row-1">
			<div class="col-md-2 hidden-xs col-cat ">
				<!-- <div class="container"> -->
				<div id="categorybox" class="list-group side-bar" style="width: 223px; margin-left: -69px; margin-top: 20px;">

				</div>
			</div>
			<!-- </div>     -->

			<div class="col-md-10 col-sm-9 ">
				<!-- Slider -->

				<br>
				<div id="myCarousel" class="carousel slide" data-ride="carousel">
					<!-- Indicators -->
					<ol class="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>

					</ol>

					<!-- Wrapper for slides -->
					<div class="carousel-inner" role="listbox">
						<div class="item active">
							<img src="Images/11.jpg">
							<h4 align="center">This is header</h4>
							<p align="center">This is paragraph with description</p>
						</div>

						<div class="item">
							<img src="Images/22.jpg">
							<h4 align="center">This is header</h4>
							<p align="center">This is paragraph with description</p>
						</div>

						<div class="item">
							<img src="Images/33.jpg">
							<h4 align="center">This is header</h4>
							<p align="center">This is paragraph with description</p>
						</div>


					</div>

					<!-- Left and right controls -->
					<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"> 
						<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a> 
					<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"> 
						<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>

				<!-- End of slider  -->

				<!--      //###################################################################################### -->

				<div class="row">
					<hr class="small">
					<h3 align="center" id="categoryName"></h3>
					<hr class="small">
					<div id="productList"></div>
				</div>

				<!--      //###################################################################################### -->








				<!-- Row for items -->
				<div class="row">
					<hr class="small">
					<h3 align="center">Featured Items</h3>
					<hr class="small">

					<%
						for (int i = 0; i < 6; i++) {
					%>

					<div class="col-md-2 col-sm-3  col-xs-4 wrap">
						<div class="portfolio-item">
							<div class="inner-wrap">
								<a href="#"> <img class="img-portfolio img-responsive" src="Images/tea1.png">
								</a>
							</div>
						</div>
						<div class="align-center">
							<div class="productname ">Product Name:</div>
							<div class="productprice">price:120</div>
							<div class="instock ">Instock:</div>
							<div class="quantity ">Quantity:<input id="qtytxt" type="text" name="quantity"></div>
							<div class="cartbtn "><button type="button" class="btn btn-success cartsz ">ADD</button></div>
						</div>
					</div>

					<%
						}
					%>
				</div>
				<!-- End of inner row -->


				<div class="row">
					<hr class="small">
					<h3 align="center">Top Selling Items</h3>
					<hr class="small">

					<%
						for (int i = 0; i < 6; i++) {
					%>
					<div class="col-md-2 col-sm-3  col-xs-4 wrap">
						<div class="portfolio-item">
							<div class="inner-wrap">
								<a href="#"> <img class="img-portfolio img-responsive" src="Images/tea1.png"></a>
							</div>
						</div>
						<div class="align-center">
							<div class="productname ">Product Name:</div>
							<div class="productprice">price:120</div>
							<div class="instock ">Instock:</div>
							<div class="quantity ">Quantity:<input id="qtytxt" type="text" name="quantity"></div>
							<div class="cartbtn "><button type="button" class="btn btn-success cartsz ">ADD</button></div>
						</div>
					</div>

					<%
						}
					%>
				</div>
				<!-- End of inner row -->



				<!-- Start of Pagination -->

				<hr class="small">
				<div class="text-center">
					<nav>

					<ul class="pagination">
						<li class="enabled">
							<a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
						</li>
						<li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
						<li class=""><a href="#">2 <span class="sr-only">2</span></a></li>
						<li class=""><a href="#">3 <span class="sr-only">3</span></a></li>
						<li class=""><a href="#">4 <span class="sr-only">4</span></a></li>
						<li class=""><a href="#">5 <span class="sr-only">5</span></a></li>
						<li class=""><a href="#">6 <span class="sr-only">5</span></a></li>
						<li class="enabled">
							<a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>
						</li>
					</ul>




					</nav>
				</div>
				<!--End  of Pagination -->




			</div>







		</div>
	</div>


	<!-- End of main page -->
</body>
</html>