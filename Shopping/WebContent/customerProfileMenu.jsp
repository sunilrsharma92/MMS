<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>

</head>
<body>

	<!-- Start of container -->
	<div  style="margin-top: -21px; margin-bottom: 0px;">
		<div class="container" style="background-color: #FFF;">
			<!-- Start of row -->
			<div class="row">
				<div class="col-md-3">
					<h3><span class="label label-default"> MY ACCOUNT</span></h3>
					<hr class="large">
					<div class="strong"><span class="glyphicon glyphicon-list-alt"></span> Orders</div>

					<div class="list-group side-bar">
						<a href="#" id="orders" class="list-group-item" onclick="loadPage(this)">My orders</a>
						<hr class="large">
					</div>
					<div class="strong">
						<span class="glyphicon glyphicon-user"></span> Profile
					</div>
					<div class="list-group side-bar">
						<a href="#" id="customerPage" class="list-group-item " onclick="loadPage(this)">Personal Info</a> 
						<a href="#"	id="addresses" class="list-group-item" onclick="loadPage(this)">Addresses</a>
						<a href="#"	id="changepassword" class="list-group-item"	onclick="loadPage(this)">Change Password</a> 
						<!-- <a href="#" class="list-group-item">Update Email/Mobile</a> -->
						<a href="#" id="deactivate" class="list-group-item"	onclick="loadPage(this)">Deactivate Account</a> 
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
	<jsp:include page="footer.jsp" />



</body>
</html>