<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	
<title>Make my shopy</title>


<link rel="stylesheet" type="text/css" href="slick/jquerysctipttop.css">
<link rel="stylesheet" type="text/css" href="slick/slick.css" />
<link rel="stylesheet" type="text/css" href="slick/slick-theme.css" />


</head>
<body>

	<div class="container hideslider">
		<!-- main slider carousel -->
		<div class="row">
			<div class="col-md-9" id="slider">
				<div class="" id="carousel-bounding-box" style="padding: 0px;">
					<div id="myCarousel" class="carousel slide">
						<!-- main slider carousel items -->
						<div class="carousel-inner">
							<div class="active item" data-slide-number="1">
								<img src="Images/slide11.jpg" alt="Chaddars" class="img-responsive">
							</div>
							<div class="item" data-slide-number="2">
								<img src="Images/slide2.png" alt="Make My Shopy" class="img-responsive">
							</div>
							<div class="item" data-slide-number="3">
								<img src="Images/slide11.jpg" alt="Chaddars" class="img-responsive">
							</div>
							<div class="item" data-slide-number="4">
								<img src="Images/33.jpg" alt="Fruits" class="img-responsive">
							</div>
						</div>
					</div>
				</div>
				<!-- </div> -->
				<!--/main slider carousel-->
				<!-- thumb navigation carousel -->
				<div class="hidden-xs" id="slider-thumbs">
					<!-- thumb navigation carousel items -->
					<ul class="list-inline">
						<li><a id="carousel-selector-1" class="selected">
								<div class="slider-navigation" style="">
									<h4 class="slide_tit">Solapur Chaddars</h4><br> Starting from Rs.599.
								</div>
						</a></li>
						<li><a id="carousel-selector-2">
								<div class="slider-navigation" style="">
									<h4 class="slide_tit">Just Register</h4><br> Start selling online for free.
								</div>
						</a></li>
						<li><a id="carousel-selector-3">
								<div class="slider-navigation" style="">
									<h4 class="slide_tit">Solapur Chaddars</h4><br> Starting from Rs.599.
								</div>
						</a></li>
						<li><a id="carousel-selector-4">
								<div class="slider-navigation" style="">
									<h4 class="slide_tit">Sell</h4><br> All types of products.
								</div>
						</a></li>
					</ul>
				</div>
			</div>
			<div class="col-md-3 hidden-xs">
				<div class="col-md-12 col-sm-4 col-xs-4 add">
					<img src="Images/androidadd123.jpg" alt="Android and ios app coming soon" class="img-responsive" >
				</div>
				<!--/col-md-12-->
				<div class="col-md-12 col-sm-4 col-xs-4 add">
					<img src="Images/Add2.jpg" alt="trusted seller" class="img-responsive" style="">
				</div>
				<!--/col-md-12-->
				<div class="col-md-12 col-sm-4 col-xs-4 add">
					<img src="Images/Add3.jpg" alt="Save time" class="img-responsive" style="">
				</div>
				<!--/col-md-12-->

			</div>
			<!--/col-md-3-->

		</div>
<div style="display: none;">
		<div class="slider-container">


			<hr class="small">
			<h3 align="center"> Top Rated 
				<span class="controllers pull-right "> <span class="glyphicon glyphicon-circle-arrow-left"></span> <span class="glyphicon glyphicon-circle-arrow-right"></span></span>
			</h3>
			<hr class="small">
			<div class="responsive">

				<%
				for(int j = 0; j<3; j++)
				{
				%>
				<div class="col-md-4 back" style="height: 327px;">
					<div class="main-wrap">
						<div class="shop-img">
							<a href="#"> <img class="iim img-responsive" src="Images/shop22.jpg" alt="shop"></a>
							<div class="shop-details">
								<p>Name:Rahul Madakatti</p>
								<p>Address: A-402 Tulsi Aangan</p>
								<p>City:Badlapur</p>
								<p>State:Maharashtra</p>
							</div>
							<!--/shop-details-->
						</div>
						<!--/shop-img-->
					</div>
					<!--/main-wrap-->
					<div style="height: 68px;">
<!-- 						<h2>Shop Now</h2> -->
						<a href="#" class="button" style="width: 100%; font-size: 20px; color: rgb(0, 170, 153); margin-top: 9px;">Shop Now</a>'
					</div>
					<!--/shop-now-->
				</div>
				<%
				}
				%>
				
				<!--/col-md-4-->


			</div>
			<!--/responsive-->
		</div>
		<!--/slider-container-->
	</div>
	</div>
	<!--/col-md-12-->

	<div class="container">
		<h4 id="searchtitle" style="display: none;">List of shope's in your area...</h4>
		<!--  <div id="productList" style="display: none;"> -->
		<div id="shopList" style="display: none;"></div>

		<div class="slider1-container hideslider">


			<hr class="small">
			<h3 align="center">Newly Joined 
				<span class="controllers pull-right "> <span class="glyphicon glyphicon-circle-arrow-left"></span> <span class="glyphicon glyphicon-circle-arrow-right"></span></span>
			</h3>
			<hr class="small">
			<div class="responsive">

				<%
				for(int i = 0; i<3; i++)
				{
				%>
				<div class="col-md-4 back" style="height: 327px;">
					<div class="main-wrap">
						<div class="shop-img">
							<a href="#"> <img class="iim img-responsive"
								src="Images/shop22.jpg" alt="shop"></a>
							<div class="shop-details">
								<p>Name:Rahul Madakatti</p>
								<p>Address: A-402 Tulsi Aangan</p>
								<p>City:Badlapur</p>
								<p>State:Maharashtra</p>
							</div>
							<!--/shop-details-->
						</div>
						<!--/shop-img-->


					</div>
					<!--/main-wrap-->
					<div style="height: 68px;">
<!-- 						<h2>Shop Now</h2> -->
						<a href="#" class="button" style="width: 100%; font-size: 20px; color: rgb(0, 170, 153); margin-top: 9px;">Shop Now</a>'
					</div>
					<!--/shop-now-->
				</div>
				<%
				}
				%>
		
			</div>
			<!--/responsive-->
		</div>
		
		<!--/slider-container-->
	</div>
	<!--/col-md-12-->
	
	

	
</body>
</html>
