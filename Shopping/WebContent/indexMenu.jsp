<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
	<script>
	$("#minus").click(function()
	{
		alert();
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

	$(document).ready(function(){
	    $(".changeview").click(function(){
//	         $("#searching").toggle();
//	         $("#menubar").toggle();
	        $("#menubar").toggle();
	        $("#searching").toggle();
	        
	    });
//	     $("#removesearch").click(function(){
	// //      $("#searching").toggle();
	// //      $("#menubar").toggle();
//	      $("#menubar").toggle();
//	      $("#searching").toggle();
	     
	//  });
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
				<li class="pull-right"><a href="#" class="whiteLabelLink"><span
						class="glyphicon glyphicon-home" style="margin-right: 5px;"></span>Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<!-- Trigger the modal with a button --> <!-- 					<a href="#"	data-toggle="modal" data-target="#LoginModal" id="login" class="whiteLabelLink"> -->
					<a href="#" data-toggle="modal" data-target="#LoginModal"
					id="myAccount" class="whiteLabelLink"> <span
						class="glyphicon glyphicon-user" style="margin-right: 5px;"></span><label
						id="loginlabel">Login</label>
				</a> <!-- Modal -->
					<div class="modal fade" id="LoginModal" role="dialog">
						<div class="modal-dialog">
							<!-- Modal content-->
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" id="crossClose" class="close"
										data-dismiss="modal">&times;</button>
									<h4 class="modal-title">
										<strong> Login</strong>
									</h4>
								</div>
								<div class="modal-body">

									<!-- Loading img -->
									<div class="overlay">
										<div id="loading-img"></div>
									</div>
									<!-- Loading img -->

									<ul class="nav nav-tabs">
										<li class="active"><a class="font" data-toggle="tab"
											href="#home">Login</a></li>
										<li><a class="font" data-toggle="tab" href="#menu1">Sign up</a></li>
										<div id="userType" class="whiteLabelLink" style="float: left;"></div>
										<li><a class="font" data-toggle="tab" href="#menu2">Forgot password</a></li>
									</ul>

									<div class="tab-content">
										<div id="home" class="tab-pane fade in active">
											<h3 class="font">Login:</h3>
											<form class="login-val">
												<input class="textbox font" type="text" id="emailLogin"
													name="email" placeholder="Enter Email Id"></br> <input
													class="textbox font" type="password" id="passLoginTemp"
													name="password" placeholder="Enter Password"></br> <input
													class="textbox font" type="text" id="otpLogin"
													placeholder="OTP" style="display: none"></br> <input
													type="button" class="btn btn-primary" id="userlogin"
													value="Login" />
												<!-- 												<button onclick="login()" class="btn btn-primary" type="button">Login</button> -->
											</form>
										</div>
										<div id="menu1" class="tab-pane fade">
											<h3 class="font">Sign Up:</h3>
											<!--                         <label class="pull-left font"><h4>Customer</h4></label>  -->

											<!-- 						<label for="cmn-toggle-1"></label> <label class="font" style="float: left;"><h4>Shoper</h4></label> -->
											<!-- 						</br> -->
											<form class="signup-val">
												
												<input class="textbox font" type="text" name="firstName" id="firstNameSignUp" placeholder="Enter First Name"></br> 
													<input class="textbox font" type="text" name="email" id="emailSignUp" placeholder="Enter Email id"></br> 
													<input class="textbox font" type="text" name="mobile" id="mobile" placeholder="Enter Mobile No"></br> 
													<input class="textbox font" type="password" name="password" id="passSignUp" placeholder="Enter Password"></br> 
													<input class="textbox font" type="password" name="password2" id="repass" placeholder="ReEnter Password"></br>
												<div class="g-recaptcha" name="captcha" data-sitekey="6LfaxwsTAAAAAEB5RYVVeSFM3AyHzAHb3YvgtGvx"></div>
												<div id="warnings"></div>
												<input type="button" class="btn btn-primary" id="signup"
													value="Sign Up" />
											</form>
										</div>
										<div id="menu2" class="tab-pane fade">
											<h3 class="font">Forgot Password:</h3>
											<form class="forgot-val">
												<input class="textbox font" type="text" name="email"
													id="emailForgotPwd" placeholder="Enter Email id"></br>
												<button onclick="forgotPwd()" class="btn btn-primary"
													type="button">Submit</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> <!-- </div> --></li>



			</ul>
		</div>
	</div>
	
<!-- ********************************************changed menubar************************************************************************************* -->
	<div class="navbar navbar-default nav-cust">
		<div class="container" id="menubar">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle pull-left" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="glyphicon glyphicon-option-vertical"></span>	
				</button>
				<a href="#" class="navbar-brand"> Logo </a>


				<!-- <button type="button" class="pull-right"> btn</button> -->
				

				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle button</span> 
					<span class="icon-bar"></span>
					<span class="icon-bar"></span> 
					<span class="icon-bar"></span>
				</button>
				<button type="button" class="navbar-toggle" data-toggle="modal"	data-target=".cartmodal">
					<span class="hidden-xs">CART</span> 
					<span class="badge"><label	id="productCountOnCart" style="margin: auto;">0</label></span>
				</button>
				<div class="search-box pull-right hidden-lg hidden-md hidden-sm">
					<div class="input-group">
						<button class="btn btn-nobg getFullSearch changeview" type="button">
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
<!-- 									data-dismiss="modal">&times;</button> -->
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
								<!--               <span class="tlbprce">Total Price :</span> -->
								<!--               <span class="totalprize"><strong> Rs 0</strong> </span>  -->
								<!--               <span class="usave">You save :</span>  -->
								<!--               <span class="rups"><strong> Rs 0</strong> </span> -->

							</div>
							<div class="totaldiv">
								<button class="btn btn-primary" id="checkout" onclick="loadPage(this);" type="button">Check Out</button>
								<button class="btn btn-primary" type="button">Continue Shopping</button>
									<button class="btn btn-primary" type="button">Continue
										Shopping</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- end of Modal -->



			<ul class="nav navbar-nav navbar-left collapse navbar-collapse">
				<li><a href="">Page1</a></li>
				<li><a href="">Page2</a></li>
				<li><a href="">Page3</a></li>
				<li><a href="">Page4</a></li>
			</ul>
			<div class="nav navbar-nav navbar-right hidden-xs">
				<div class="dropdown  cartMenu ">
					<button id="getCartProduct" type="button" class=" pull-right btn btn-primary" style="border:none;" data-toggle="modal" data-target=".cartmodal" style="margin-right: -11px;">
						<span class="glyphicon glyphicon-shopping-cart"></span> 
						<span class="hidden-xs">CART</span> 
						<span class="badge"><label id="productCountOnCart" style="margin: auto;">0</label></span>
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

				<input type="text" id="search" onkeyup="searchProduct()" class="whiteLabel" name="search" placeholder="Search the item here">
				<button class="insearch" type="submit">
					<span class="glyphicon glyphicon-search"></span>
				</button>
				</input>
				<button type="button" class="btn btn-circle btn-danger changeview" id="removesearchbtn">
					<span class=" glyphicon glyphicon-remove"></span>
				</button>
			</div>
		</div>
	</div>
	<!--/navbar navbar-inverse-->


	<!-- ********************************************End changed menubar************************************************************************************* -->
<!-- 	<div class="container-fluid mid-bar "> -->
<!-- 		<div class="container "> -->

<!-- 			<div class="col-md-8 col-sm-8 col-xs-9"> -->
<!-- 				<div class="input-group list-inline" style="margin-left: -16px;"> -->
<!-- 					<input type="text" id="search" onkeyup="searchProduct()" class="form-control" placeholder="Search your Shop/Product here"> -->
<!-- 					<span class="input-group-btn"> -->
<!-- 						<button class="btn " type="button"> -->
<!-- 							<img src="Images/search.png" width="20px" height="18px"> -->
<!-- 						</button> -->
<!-- 					</span> -->

<!-- 				</div> -->
<!-- 				/input-group -->
<!-- 			</div> -->
			<!-- /.col-lg-6 -->
<!-- 			<div class="col-md-4 col-sm-4 col-xs-3"> -->

<!-- 					<button id="getCartProduct" type="button" class=" pull-right btn btn-primary" data-toggle="modal"data-target="#cartmodal" style="margin-right: -11px;"> -->
<!-- 						<span class="glyphicon glyphicon-shopping-cart"></span>  -->
<!-- 						<span class="hidden-xs">CART</span> -->
<!-- 						<span class="badge"><label id="productCountOnCart" style="margin: auto;">0</label></span> -->
<!-- 					</button> -->

<!-- 				 -->
<!-- 				<a href="#"id="login" data-toggle="modal" data-target="#trackModal">Track your order</a></li> -->
<!-- 				Modal -->
<!-- 				<div class="modal fade" id="cartmodal" role="dialog"> -->
<!-- 					<div class="modal-dialog modal-lg"> -->

<!-- 						Modal content -->
<!-- 						<div class="modal-content"> -->
<!-- 							<div class="modal-header"> -->
<!-- 								<button type="button" class="close" id="checkoutClose" data-dismiss="modal">&times;</button> -->
<!-- 								<h4 class="modal-title"> -->
<!-- 									<strong style="color: #FFF;">Cart Details</strong> -->
<!-- 								</h4> -->
<!-- 							</div> -->
<!-- 							<div class="modal-body"> -->
<!-- 								<div class="container cheight"> -->

<!-- 									<table class="table table-striped" cellspacing="0" -->
<!-- 										cellpadding="0"> -->
<!-- 										<thead class="hidden-xs"> -->
<!-- 											<tr> -->
<!-- 												<th class="cimg">Image</th> -->
<!-- 												<th class="cname">Name</th> -->
<!-- 												<th class="csize">Size</th> -->
<!-- 												<th class="cqty">Qty</th> -->
<!-- 												<th class="cprice">Price</th> -->
<!-- 												<th class="cdelete">Delete</th> -->
<!-- 											</tr> -->
<!-- 										</thead> -->
<!-- 										<tbody id="appendProducttoCart"> -->

<!-- 										</tbody> -->
<!-- 									</table> -->
<!-- 								</div> -->
<!-- 								<div id="totalpurchase" class="totaldiv"> -->
<!-- 									              <span class="tlbprce">Total Price :</span> -->
<!-- 									              <span class="totalprize"><strong> Rs 0</strong> </span>  -->
<!-- 									              <span class="usave">You save :</span>  -->
<!-- 									              <span class="rups"><strong> Rs 0</strong> </span> -->

<!-- 								</div> -->
<!-- 								<div class="totaldiv"> -->
<!-- 									<button class="btn btn-primary" id="checkout" onclick="loadPage(this);" type="button">Check Out</button> -->
<!-- 									<button class="btn btn-primary" type="button">Continue Shopping</button> -->
<!-- 								</div> -->
<!-- 							</div> -->
<!-- 						</div> -->
<!-- 					</div> -->
<!-- 				</div> -->
<!-- 				end of Modal -->
<!-- 				 -->

<!-- 			</div> -->
<!-- 		</div> -->
		<!-- /.row -->
<!-- </div> -->
	</div>

	<!-- Meganav -->
	<!-- end of mega nav -->

<!-- 	<nav class="navbar navbar-default middle-bar "> -->
<!-- 		<div class="container-fluid"> -->
			<!-- Brand and toggle get grouped for better mobile display -->
<!-- 			<div class="navbar-header"> -->
<!-- 				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"aria-expanded="false"> -->
<!-- 					<span class="sr-only">Toggle navigation</span>  -->
<!-- 					<span class="icon-bar"></span>  -->
<!-- 					<span class="icon-bar"></span>  -->
<!-- 					<span class="icon-bar"></span> -->
<!-- 				</button> -->
<!-- 				<a class="navbar-brand" href="#">Logo</a> -->
<!-- 			</div> -->

			<!-- Collect the nav links, forms, and other content for toggling -->
<!-- 			<div class="collapse navbar-collapse" -->
<!-- 				id="bs-example-navbar-collapse-1"> -->
<!-- 				<ul class="nav navbar-nav"> -->
<!-- 					<li class="active"><a href="#">Menu1 <span class="sr-only">(current)</span></a></li> -->
<!-- 					<li><a href="#">Menu2</a></li> -->
<!-- 					<li class="dropdown"> -->
<!-- 						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Megamenu <span class="caret"></span></a> -->
<!-- 							<ul class="dropdown-menu"> -->
<!-- 								<div class="container container-1"> -->

									
<!-- 							</div> -->
<!-- 											height="100px"> -->
<!-- 									</div> -->
<!-- 									<div class="cartbtn"> -->
<!-- 										<button type="button" class="btn btn-success">ADD TO -->
<!-- 											CART</button> -->
<!-- 									</div> -->
<!-- 							div container-1 -->
<!-- 						</ul> -->
<!-- 						end of dropdownmenu</li> -->
<!-- 					end fo dropdown  -->
<!-- 					<li class="dropdown"> -->
<!-- 						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Megamenu <span class="caret"></span></a> -->
<!-- 						<ul class="dropdown-menu"> -->
<!-- 							<div class="container container-1"> -->
<!-- 											height="150px"> -->

<!-- 															</div> -->
<!-- 							div container-1 -->
<!-- 						</ul> -->
<!-- 						end of dropdownmenu</li> -->
<!-- 					end fo dropdown  -->
<!-- 				</ul> -->
<!-- 				 end of nav -->

<!-- 				<ul class="nav navbar-nav navbar-right"> -->
<!-- 					<li><a id="indexBody" href="#" onclick="loadPage(this);">Home</a></li> -->
<!-- 					<li><a id="shopProfile" href="#" onclick="loadPage(this);">Profile</a></li> -->
<!-- 					<li class="dropdown"> -->
<!-- 						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a> -->
<!-- 						<ul class="dropdown-menu"> -->
<!-- 							<li><a href="#">Action</a></li> -->
<!-- 							<li><a href="#">Another action</a></li> -->
<!-- 							<li><a href="#">Something else here</a></li> -->
<!-- 							<li role="separator" class="divider"></li> -->
<!-- 							<li><a href="#">Separated link</a></li> -->
<!-- 						</ul> -->
<!-- 					</li> -->
<!-- 				</ul> -->
<!-- 			</div> -->
			<!-- /.navbar-collapse -->
<!-- 		</div> -->
		<!-- /.container-fluid -->
<!-- 	</nav> -->

</body>
</html>