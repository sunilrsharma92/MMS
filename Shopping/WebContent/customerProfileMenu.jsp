<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>

<!-- <script type="text/javascript" src="js/jquery-2.1.3.min.js"></script> -->
</head>
<body>

	<!-- Start of container -->
	<div  style="margin-top: -21px; margin-bottom: 0px;">
		<div class="container" style="background-color: #FFF;">
			<!-- Start of row -->
			<div class="row">
				<div class="col-md-3">
					<div id="custOrderPanel">
						<h3><span class="label label-default"> MY ACCOUNT</span></h3>
						<hr class="large">
						<div class=""  style="margin-bottom:10px"; >
						<img src="https://lh3.googleusercontent.com/riyn5OOpMRzhiuI5Mnz-mCwUoP_dgW-9Vg87sfXzOEXo=s512-no" class="img-circle" style="width:50%; background-color:whitesmoke;"> 
						</div>
						<div class="strong"><span class="glyphicon glyphicon-list-alt"></span> Orders</div>
	
						<div class="list-group side-bar">
							<a href="#" id="orders" class="list-group-item" onclick="loadPage(this)">My orders</a>
							<hr class="large">
						</div>
					</div>
					<div class="strong">
						<span class="glyphicon glyphicon-user"></span> Profile
					</div>
					<div class="list-group side-bar">
						<a href="#" id="personalDetails" class="list-group-item " onclick="loadProfileMenu(this)">Personal Info</a> 
						<a href="#"	id="addresses" class="list-group-item" onclick="loadProfileMenu(this)">Addresses</a>
						<a href="#"	id="resetpassword" class="list-group-item"	onclick="loadProfileMenu(this)">Change Password</a> 
						<!-- <a href="#" class="list-group-item">Update Email/Mobile</a> -->
						<a href="#" id="deactivate" class="list-group-item"	onclick="loadProfileMenu(this)">Deactivate Account</a> 
						<a href="#" id="" class="list-group-item">Manage Notifications</a>
						<hr class="large">
					</div>

				</div>
				<!-- End of col-md-3 -->
				<div id="loadpagecontent" class="col-md-9"></div>
				<!-- End of row -->

			</div>
			<!-- end of div container -->
		</div>
	</div>
	<%-- <jsp:include page="footer.jsp" /> --%>



</body>
</html>