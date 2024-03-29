<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script>
	$("#minus").click(function()
	{
		var val = parseInt($("#demo1").val());
		if(val > 1)
		{
			var total = val - 1;
			$("#demo1").val(total);
		}

	});

	$("#add").click(function()
	{
		var val = parseInt($("#demo1").val());
		var total = val + 1;
		$("#demo1").val(total);
	});

	$(document).ready(function()
	{
		$(".changeview").click(function()
		{
			$("#menubar").toggle();
			$("#searching").toggle();
			$("#search").val("");
			$("#search").show();
			$("#search").focus();

		});

		$("#userType").jqxSwitchButton(
		{
		height : 27,
		width : 81,
		checked : true
		});

	});
	$(window).scroll(function()
	{
		var scroll = $(window).scrollTop();

		if(scroll >= 1)
		{
			$(".nav-cust").addClass("navbar-fixed-top");
		}
		else
		{
			$(".nav-cust").removeClass("navbar-fixed-top");
		}
	});
</script>

</head>
<body>

	<div class="container-fluid  top-bar">
		<div class="container ">

			<ul class="list-inline">
				<li class="hidden-xs"><span
					class="glyphicon glyphicon-phone-alt" style="margin-right: 5px;"></span>9970181137</li>
				<li class=""><a href="#" id="login" data-toggle="modal"
					data-target="#trackModal" class="whiteLabelLink"> <span
						class="glyphicon glyphicon-map-marker" style="margin-right: 5px;"></span>Track<span
						class="hidden-xs"> your order</span>
				</a></li>

				<!-- ***************************************Modal************************************* -->

				<div class="modal fade" id="trackModal" role="dialog">
					<div class="modal-dialog modal-sm">

						<!-- Modal content-->

						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title ">
									<strong>Track your order</strong>
								</h4>
							</div>
							<div class="modal-body" style="text-align: center;">
								<form class="track-val">
									<input class="font textbox" name="email" type="text"
										placeholder="Enter the email or order id" />
									<button class="btn btn-primary" type="submit">Track</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- ***********************************end of Modal*********************************** -->

				<li class="dropdown pull-right">
					<a data-target="#" id="myAcc" href="page.html" data-toggle="dropdown"
						class="dropdown-toggle whiteLabelLink" style="display:none; padding: 8px;">My Account <b class="caret"></b></a>
					<ul id="myAccList" class="dropdown-menu">
						<li><a href="#" id="profileLink"> <span class="glyphicon glyphicon-user"></span> Profile </a></li>
						<li><a href="#"> <span class="glyphicon glyphicon-list-alt"></span> Recent Orders</a></li>
						<li><a href="#"> <span class="glyphicon glyphicon-heart"></span> Favorite Shop</a></li>
						<li class="divider"></li>
						<li><a href="#" id="logoutLink"> <span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
					</ul>
				</li>

				<a href="#" data-toggle="modal" data-target="#LoginModal" id="loginDialogLink" class="whiteLabelLink pull-right"> 
						<span class="glyphicon glyphicon-log-in" style="margin-right: 4px;"></span>
						<label id="loginlabel"> Login</label>
					</a> <!-- Modal -->
					
					<div class="modal fade" id="LoginModal" role="dialog">
						<div class="modal-dialog modal-md">
							<!-- Modal content-->
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" id="crossClose" class="close"
										data-dismiss="modal">&times;</button>
									<h4 class="modal-title">
										<strong> Login</strong>
										<div id="userType" class="whiteLabelLink pull-right" style="margin-right:15px;"></div>
									</h4>
								</div>
								<div class="modal-body">

									<!-- Loading img -->
									<div class="overlay">
										<div id="loading-img"></div>
									</div>
									<!-- Loading img -->

									<ul class="nav nav-tabs">
										<li class="active"><a id="logintab" class="font" data-toggle="tab" href="#home">Sign in</a></li>
										<li><a class="font" id="signuptab" data-toggle="tab" href="#menu1">Sign up</a></li>
										
										<li><a class="font" data-toggle="tab" href="#menu2">Forgot Password</a></li>
									</ul>

									<div class="tab-content">
										<div id="home" class="tab-pane fade in active">
											<form class="login-val" style="text-align: center;">
												<div style="margin-bottom: 10px;"></div>
												<input class="textbox font" type="text" id="emailLogin"	name="email" placeholder="Enter Email Id"><br>
												 <input	class="textbox font" type="password" id="passLoginTemp"	name="password" placeholder="Enter Password"><br> 
												<input class="textbox font" type="text" id="otpLogin" placeholder="OTP" style="display: none"><br>
												 <input	type="button" onclick="login()" class="btn btn-primary btn_width_93_perc" id="userlogin" value="Login" />
												 <div style="margin-top: 10px; color:red; font-size: 12px;" id="loginalerts"></div>
											</form>
										</div>
										<div id="menu1" class="tab-pane fade">
											<form class="signup-val" style="text-align: center;">
													<div style="margin-bottom: 10px;"></div>
													<input class="textbox font" type="text" name="email" id="emailSignUp" placeholder="Enter Email id"><br> 
													<input class="textbox font" type="text" name="mobile" id="mobile" placeholder="Enter Mobile No"><br> 
													<input class="textbox font" type="password" name="password" id="passSignUp" placeholder="Enter Password"><br> 
													<input class="textbox font" type="password" name="password2" id="repass" placeholder="ReEnter Password"><br><br>
												<div id="warnings" style="display:none;"></div>
												<input type="button" onclick="signUp()" class="btn btn-primary btn_width_93_perc" id="signup" value="Sign Up" />
											     <div style="margin-top: 10px; color:red; font-size: 12px;" id="signupalerts"></div>
											</form>
										</div>
										<div id="menu2" class="tab-pane fade">
											<form class="forgot-val"style="text-align: center;">
												<div style="margin-bottom: 10px;"></div>
												<input class="textbox font" type="text" name="email" id="emailForgotPwd" placeholder="Enter Email id"><br><br>
												<input type="button" onclick="forgotPwd()" value="Submit" class="btn btn-primary btn_width_93_perc"/>
												<div style="margin-top: 10px; color:red; font-size: 12px;" id="forgetpassalerts"></div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> <!-- </div> -->
					



			</ul>
		</div>
	</div>
	
<!-- ********************************************changed menubar************************************************************************************* -->
	<div class="navbar navbar-default nav-cust">
		<div class="container" id="menubar">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle pull-left" id="mobcat" data-toggle="collapse" data-target=".slidemenu">
					<span class="glyphicon glyphicon-option-vertical"></span>	
				</button>
				<a href="#" id="indexBody1" onclick="loadPage(this);" class="navbar-brand" style="width: 86px; height: 42px;"><img src="Images/Logo12.png" class="img-rounded mylogo" alt="Cinque Terre" style=""> </a>

				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle button</span> 
					<span class="icon-bar"></span>
					<span class="icon-bar"></span> 
					<span class="icon-bar"></span>
				</button>
				<button type="button" class="navbar-toggle getCartProduct" data-toggle="modal"	data-target=".cartmodal">
					<span class="glyphicon glyphicon-shopping-cart"></span> 
					
					<span id="rotatespan1" class="badge rotatespanclass"><label	id="productCountOnCart" class="productCountOnCart" style="margin: auto;">0</label></span>
					
				</button>
				<div class="search-box pull-right hidden-lg hidden-md hidden-sm">
					<div class="input-group">
						<button class="btn btn-nobg getFullSearch changeview" id="searchfocus" type="button">
							<span class="glyphicon glyphicon-search"> </span>
						</button>
					</div>

				</div>
			</div>
			<!--/navbar-header-->



			<!-- Modal -->
			<div class="modal fade cartmodal" id="cartmodal" role="dialog">
				<div class="modal-dialog modal-lg">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" id="checkoutClose" data-dismiss="modal">&times;</button>

							<h4 class="modal-title">
								<strong style="color: #FFF;">Cart Details</strong>
							</h4>
						</div>
						<div class="modal-body">
							<div class="container cheight">

								<table class="table table-striped" cellspacing="0" cellpadding="0">
									<thead class="hidden-xs">
										<tr>
											<th class="cimg">Image</th>
											<th class="cname">Name</th>
											<th class="csize">Size</th>
											<th class="cqty">Qty</th>
											<th class="cprice">Price</th>
											<th class="cdelete">Delete</th>
										</tr>
									</thead>
									<tbody id="appendProducttoCart">

									</tbody>
								</table>
							</div>
							<div id="totalpurchase" class="totaldiv">

							</div>
							<div class="totaldiv">
							<input type="hidden" name="txttotalcartAmmounthidden" value="" id="totalcartAmmounthidden">
								<button class="btn btn-primary" id="checkout" onclick="loadPage(this);" type="button">Check Out</button>
								<button class="btn btn-primary" id="continueshopping" type="button">Continue Shopping</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- end of Modal -->



			<ul class="nav navbar-nav navbar-left collapse navbar-collapse">
				<li><a href="" id="indexBody" onclick="loadPage(this);">Home</a></li>
				<li><a href="">Super Markets</a></li> 
 				<li><a href="">Hotels</a></li> 
 				<li><a href="">Solapur Chaddars</a></li>
			</ul>
			<div class="nav navbar-nav navbar-right hidden-xs">
				<div class="dropdown  cartMenu ">
					<button id="getCartProduct" type="button" class="pull-right btn btn-primary getCartProduct" style="border:none;" data-toggle="modal" data-target=".cartmodal" style="margin-right: -11px;">
						<span class="glyphicon glyphicon-shopping-cart"></span> 
						<span class="hidden-xs">CART</span> 
						<span id="rotatespan" class="badge rotatespanclass"><label id="productCountOnCart1" class="productCountOnCart" style="margin: auto;">0</label></span>
					</button>
				</div>
				<div class="search-box">
					<button type="button" class="changeview">
						<span class="glyphicon glyphicon-search"> </span>
					</button>
				</div>
			</div>
		</div>
		<!--/container-->
		<div class="container">
			<div id="searching" style="display: none;">

				<input type="text" id="search" class="whiteLabel" style="text-align: center; outline: 0;" name="search" placeholder="Search the item here">
					<button class="insearch" onclick="searchShop();" type="submit">
						<span class="glyphicon glyphicon-search"></span>
					</button>
				
				<button type="button" class="btn btn-circle btn-danger changeview" id="removesearchbtn">
					<span class=" glyphicon glyphicon-remove"></span>
				</button>
			</div>
		</div>
	</div>
</body>
</html>