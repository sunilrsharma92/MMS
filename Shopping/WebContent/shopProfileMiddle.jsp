<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

<!-- start of middle -->
<div class = "container">
  <div class = "row">
   <div class = "col-md-2">
    <div class = "list-group side-bar hidemenu" style="display: none;">
<!--      <a href = "profile1.html" class = "list-group-item active"><span class = "glyphicon glyphicon-home"></span> Dash</a> -->
<!--      <a href = "#" class = "list-group-item"><span class = "glyphicon glyphicon-pencil"></span> Edit Slider</a> -->
<!--      <a href = "#" class = "list-group-item"><span class = "glyphicon glyphicon-pencil"></span> Edit Featured</a> -->
<!--      <a href = "#" class = "list-group-item"><span class = "glyphicon glyphicon-pencil"></span> Edit New item</a> -->
<!--      <hr class = "large"> -->
<!--      <a href = "table.html" class = "list-group-item"><span class = "glyphicon glyphicon-plus"></span> Add Products</a> -->
<!-- 	<hr class = "large"> -->
					<div class="list-group side-bar">
						<a href = "#" class = "list-group-item active"><span class = "glyphicon glyphicon-user"></span> Profile</a>
						<a href="#" id="4" class="list-group-item" onclick="loadProfileMenu(this)">My orders</a>
						<a href="#" id="0" class="list-group-item" onclick="loadProfileMenu(this)">Personal Info</a> 
						<a href="#"	id="1" class="list-group-item" onclick="loadProfileMenu(this)">Addresses</a>
						<a href="#"	id="2" class="list-group-item" onclick="loadProfileMenu(this)">Change Password</a> 
						<!-- <a href="#" class="list-group-item">Update Email/Mobile</a> -->
<!-- 						<a href="#" id="3" class="list-group-item"	onclick="loadProfileMenu(this)">Deactivate Account</a>  -->
						<a href="#" id="" class="list-group-item">Manage Notifications</a>
						<hr class="large">
					</div>
   </div>

	
 </div><!-- end of col-2 -->
 
 <div id="dashboard" class = "col-md-10">
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
        <img src = "Images/11.jpg" >
        <h4 class = "font" align = "center">This is header</h4>
        <p class = "font" align = "center">This is paragraph with description</p>
      </div>

      <div class = "item">
        <img src = "Images/22.jpg">
        <h4 class = "font" align = "center">This is header</h4>
        <p class = "font" align = "center">This is paragraph with description</p>
      </div>

      <div class = "item">
        <img src = "Images/33.jpg">
        <h4 class = "font" align = "center">This is header</h4>
        <p class = "font" align = "center">This is paragraph with description</p>
      </div>

      
    </div>

    <!-- Left and right controls -->
    <a class = "left carousel-control" href = "#myCarousel" role = "button" data-slide = "prev">
      <span class = "glyphicon glyphicon-chevron-left" aria-hidden = "true"></span>
      <span class = "sr-only">Previous</span>
    </a>
    <a class = "right carousel-control" href = "#myCarousel" role = "button" data-slide = "next">
      <span class = "glyphicon glyphicon-chevron-right" aria-hidden = "true"></span>
      <span class = "sr-only">Next</span>
    </a>
  </div>

  <!-- End of slider  -->

<div id="productList" style="display: none;"></div>
<div id="hideadddiv">
				<div class="row">
					<hr class="small">
					<h3 class="font" align="center">Featured Items</h3>
					<hr class="small">


					<%
						for (int i = 1; i <= 6; i++)
						{
							String img = "Images/chadders/" + i + ".jpg";
					%>

						<div class="col-md-2 col-sm-3  col-xs-4 wrap">
							<div class="portfolio-item">
								<div class="inner-wrap">
									<a href="#"> <img class="img-portfolio img-responsive" src="<%=img%>"></a>
								</div>
							</div>
							<div class="align-center">
								<div class="productname ">Active Wheel washing power</div>
								<div class="quantity ">
									<select class="form-control" id="stateSave"	placeholder="select state">
										<option value="one">500gm</option>
										<option value="one">250gm</option>
									</select>
								</div>
								<div class="productprice">
									<span>Rs.120</span><span class="pull-right"><strike>Rs.140</strike></span>
								</div>
								<div class="cartbtn ">
									<button type="button" class="btn btn-success cartsz ">ADD<span class="pull-right glyphicon glyphicon-shopping-cart"></span></button>
								</div>
							</div>
						</div>

						<%
							}
						%>


				</div>
				<!-- End of inner row -->
				<div class="row">
					<hr class="small">
					<h3 class="font" align="center">Top New Items</h3>
					<hr class="small">
					<%
						for (int i = 1; i <= 6; i++)
						{
							String img = "Images/chadders/" + i + ".jpg";
					%>
					
					<div class="col-md-2 col-sm-3  col-xs-4 wrap">
							<div class="portfolio-item">
								<div class="inner-wrap">
									<a href="#"> <img class="img-portfolio img-responsive" src="<%=img%>"></a>
								</div>
							</div>
							<div class="align-center">
								<div class="productname ">Active Wheel washing power</div>
								<div class="quantity ">
									<select class="form-control" id="stateSave"	placeholder="select state">
										<option value="one">500gm</option>
										<option value="one">250gm</option>
									</select>
								</div>
								<div class="productprice">
									<span>Rs.120</span><span class="pull-right"><strike>Rs.140</strike></span>
								</div>
								<div class="cartbtn ">
									<button type="button" class="btn btn-success cartsz ">ADD<span class="pull-right glyphicon glyphicon-shopping-cart"></span></button>
								</div>
							</div>
						</div>
					

					<%
						}
					%>



				</div>
				</div>
				<!-- End of inner row -->
				


			</div><!-- end col-10 -->
<div id="loadpagecontent" class="col-md-9">
				
<!-- 		**************		Personal Information	******************** -->
				<div id="01" class="alignprofDiv" style="display:none;">
					<h3 class="bold" style="padding-left: 30px; text-shadow: 7px 17px 19px;">Personal Information:</h3>
					<form class="alignprof">
						<table class="alignTable">
							<tr><td>First Name:</td><td><input id="firstNameSave" type="text" class="textbox" value=""></td></tr>
							<tr><td>Last Name:</td><td><input id="lastNameSave" type="text" class="textbox" ></td></tr>
							<tr><td>Mobile No:</td><td><input id="mobileNoSave" type="text" class="textbox" ></td></tr>
			<!-- 				<tr><td>Email Address:</td><td><input id="emailSave" type="text" class="textbox"></td></tr> -->
							<tr><td></td><td><button type="button" id="saveProfile" class="btn btn-primary margin_top_bottom" onclick="saveUserDetails('personalInfo')">Save Changes</button></td></tr>
						</table>
					</form>
				</div>
<!-- 		**************		Addresses	******************** -->
				<div id="11" class="alignprofDiv" style="display:none;">
					<h3 class="bold" style="padding-left: 30px; text-shadow: 7px 17px 19px;">Add/Edit Address:</h3>
					<form class="alignprof">
						<table class="alignTable">
							<tr><td>Address 1:</td><td><input type="text" id="address1Save" class="textbox" name="name"></td></tr>
							<tr><td>Address 2:</td><td><input type="text" id="address2Save" class="textbox" name="name"></td></tr>
							<tr><td>Street name:</td><td><input type="text" id="streetSave" class="textbox" name="name"></td></tr>
							<tr><td>State:</td>
								<td>
									<select class="form-control textbox" id="stateSave" placeholder="select state">
										
										<option value="one">Maharashtra</option>
														
								    </select>
								</td>
							</tr>
							<tr><td>City:</td><td><input type="text" id="citySave" class="textbox" name="name"></td></tr>
							<tr><td>Pincode:</td><td><input type="text" id="pincodeSave" class="textbox" name="name"></td></tr>
							<!-- <tr><td>Email Address:</td><td><input type="text" class="textbox" name="name"></td></tr> -->
							<tr><td></td><td><button type="button" class="btn btn-primary margin_top_bottom" onclick="saveUserDetails('address')">Save Changes</button></td></tr>
						</table>
					</form>
				
				</div>
<!-- 		**************		Change Password:	******************** -->	
				<div id="21" class="alignprofDiv" style="display:none;">
					<h3 class="bold" style="padding-left: 30px; text-shadow: 7px 17px 19px;">Change Password:</h3>
					<form class="alignprof">
						<table class="alignTable">
							<tr><td>Old Password:</td><td><input type="text" class="textbox" id="oldPwd" name="name"></td></tr>
							<tr><td>New Password:</td><td><input type="text" class="textbox" name="name" id="password1"></td></tr>
							<tr><td>Retype New Password:</td><td><input type="text" class="textbox" name="name" id="password2"></td></tr>
							<!-- <tr><td>Email Address:</td><td><input type="text" class="textbox" name="name"></td></tr> -->
							<tr><td></td><td><button type="button" class="btn btn-primary margin_top_bottom" onclick="resetPassword()">Save Changes</button></td></tr>
						</table>
					</form>
				</div>
<!-- 		**************		Deactivate Account:	******************** -->		
				<div id="31" style="display:none;">
					<h3 class="bold" style="padding-left: 30px; text-shadow: 7px 17px 19px;">Deactivate Account:</h3>
					<form class="alignprof">
						<table class="alignTable">
						<tr><td>Email Address:</td><td><input type="text" class="textbox" name="name"></td></tr>
						<tr><td>Mobile Number:</td><td><input type="text" class="textbox" name="name"></td></tr>
						<tr><td>Password:</td><td><input type="text" class="textbox" name="name"></td></tr>
						<!-- <tr><td>Email Address:</td><td><input type="text" class="textbox" name="name"></td></tr> -->
						<tr><td></td><td><button type="button" class="btn btn-primary margin_top_bottom">Confirm Deactivation	</button></td></tr>
						</table>
					</form>
				</div>
				
				<div id="41" style="margin: 10px auto; display:none;">
    			</div>




					
					<div id="4111" class="panel-body" style="margin-top: 20px; display: none;">
						<div class="container" style="width: 100%; height: auto;">
							<table class="table table-striped" cellspacing="0" cellpadding="0">
								<thead class="hidden-xs" style="background-color: #2D97D9">
									<tr>
										<th class="cimg">Image</th>
										<th class="cname">Name</th>
										<th class="cqty">Qty</th>
										<th class="cprice">Price</th>
										<th class="cdelete">Total</th>
									</tr>
								</thead>
								<tbody id="appendOrder">

								</tbody>
								<div class="grand_total" id="grandtotal"></div>
							</table>
						</div>
				</div>
				<!-- End of row -->

			</div>
			
</div><!-- end of row -->
</div><!-- end of container -->
<!--end of middle  -->



</body>
</html>