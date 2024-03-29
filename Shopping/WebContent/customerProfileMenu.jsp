<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style>
.hideme{
	display:none;
	margin-top: -95px;
    margin-left: 50px;
}
span.glyphicon.glyphicon-camera {
    font-size: 50px;
    /* color: #FFF; */
}
.profilewrap:hover .hideme{display:block;}

table td
{
	padding-left: 30px;
	width: 0%;
}

#loadpagecontent input
{
	width: 88%;
}
</style>
</head>
<body>


<div class="customeroverlay" style="margin-top: 18%; margin-left: 27%;">
<div id="loading-img"></div>
</div>


	<!-- Start of container -->
	<div  style="margin-top: 0px; margin-bottom: 0px;">
		<div class="container" style="background-color: #FFF;">
			<!-- Start of row -->
			<div class="row">
				<div class="col-md-3" style="background: rgb(233, 233, 233) none repeat scroll 0% 0%;">
					<div id="custOrderPanel" style="display: none;">
<!-- 						<h3><span class="label label-default"> MY ACCOUNT</span></h3> -->
						<h3><div class="label label-default" style="width: 100%; display: block;"> MY ACCOUNT</div></h3>
						<hr class="large">
						
						<form enctype="multipart/form-data" id="uploadFile" action="UploadServlet" method="post">
							
							<div class="overlay" style="margin-top: 45px;">
								<div id="loading-img"></div>
							</div>
							
							<div class="profilewrap profileimgclick" id="onEnter" style="width: 150px;height: 150px; margin: 0px auto;">
								<img id="profileImg" src="Images/default_profile_pic.png" class="img-circle icon_click" style="width:100%; height:100%; background-color:whitesmoke;">
								<div class="hideme icon_click"><span class="glyphicon glyphicon-camera "></span></div>
							</div>
					     	 <input type="file" name="fileName" id="fileName" style="display:none;" class="roleType" class="border"/>  
					     	 <input type="submit" value="Save File" id="upldBtn" style="display:none;"/> &nbsp;&nbsp;
						<script type="text/javascript" src="js/jquery.form.js"></script>
						<script type="text/javascript">
						$(document).ready(function (){
							try
							{
								$(".profileimgclick").click(function(){
									$("#fileName").trigger("click");

								});

							$("#fileName").change(function()
							{
								$(".overlay").show();
								$("#upldBtn").trigger("click");
							});
							
							$('#uploadFile').ajaxForm({
							success : function (msg)
							{
								$(".overlay").show();
								var count = 0;
								
								var clear = setInterval(function()
									{
									count++;
									console.log("count : "+count+"msg : "+msg);
									
									if(count == 10)
										{
										$("#profileImg").attr("src",msg);
										$(".overlay").show().delay(100).fadeOut();
										clearInterval(clear);
										}
								}, 1000);
								
								var loginData = $.session.get('loginData');
								var sessionData = JSON.parse(loginData);
								sessionData.profileImg = msg;
								$.session.remove("loginData");
								$.session.set("loginData", JSON.stringify(sessionData));
								
// 								alert("JSON.stringify(sessionData) : "+JSON.stringify(sessionData));

							}
						});
							}
							catch (e) 
							{
								console.log("Exception in uploading file on jsp : "+e);
							}
							
							var profileImg = $.session.get("profileimg");
							if(profileImg != "" || profileImg !=null)
								{
									$("#profileImg").attr("src",profileImg);
								}
							
						});
						
						</script>
						
						</form>
						


						<div class="strong list-group"><span class="glyphicon glyphicon-list-alt"></span> Orders</div>
	
						<div class="list-group side-bar">
							<a href="#" id="4" class="list-group-item" onclick="loadProfileMenu(this)">My orders</a>
							<hr class="large">
						</div>
					</div>
					<div class="strong list-group">
						<span class="glyphicon glyphicon-user"></span> Profile
					</div>
					<div class="list-group side-bar">
						<a href="#" id="0" class="list-group-item" onclick="loadProfileMenu(this)">Personal Info</a> 
						<a href="#"	id="1" class="list-group-item" onclick="loadProfileMenu(this)">Addresses</a>
						<a href="#"	id="2" class="list-group-item" onclick="loadProfileMenu(this)" style="border-bottom: 1px solid #CCC;">Change Password</a> 
						<!-- <a href="#" class="list-group-item">Update Email/Mobile</a> -->
<!-- 						<a href="#" id="3" class="list-group-item"	onclick="loadProfileMenu(this)">Deactivate Account</a>  -->
<!-- 						<a href="#" id="" class="list-group-item">Manage Notifications</a> -->
						<hr class="large">
					</div>

				</div>
				<!-- End of col-md-3 -->
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
										<option value="one">Select State</option>
										<option value="one">Andhra Pradesh</option>
										<option value="one">Arunachal Pradesh</option>
										<option value="one">Assam</option>
										<option value="one">Bihar</option>
										<option value="one">Chhattisgarh</option>
										<option value="one">Goa</option>
										<option value="one">Gujarat</option>
										<option value="one">Haryana</option>
										<option value="one">Himachal Pradesh</option>
										<option value="one">Jammu Kashmir</option>
										<option value="one">Jharkhand</option>
										<option value="one">Karnataka</option>
										<option value="one">Kerala</option>
										<option value="one">Madhya Pradesh</option>
										<option value="one">Maharashtra</option>
										<option value="one">Manipur</option>
										<option value="one">Meghalaya</option>
										<option value="one">Mizoram</option>
										<option value="one">Nagaland</option>
										<option value="one">Odisha</option>
										<option value="one">Punjab</option>
										<option value="one">Rajasthan</option>
										<option value="one">Sikkim</option>
										<option value="one">Tamil Nadu</option>
										<option value="one">Tripura</option>
										<option value="one">Uttarkhand</option>
										<option value="one">Uttar Pradesh</option>
										<option value="one">West Bengal</option>
				
				
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
				
				<div id="41" style="margin: 10px auto;">
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
<!-- 						<div id="totalpurchaseOnCheckout" class="totaldiv"></div> -->
<!-- 						<input type="hidden" name="txttotalpurchaseOnCheckoutHidden" -->
<!-- 							id="totalpurchaseOnCheckoutHidden" value=""> -->
<!-- 					</div> -->
					






				</div>
				<!-- End of row -->

			</div>
			<!-- end of div container -->
		</div>
	</div>

</body>
</html>