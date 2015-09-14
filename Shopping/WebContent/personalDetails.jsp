<!DOCTYPE html>
<html>
<head>
<title></title>
<!-- <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="css/style1.css">


<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
<script type="text/javascript" src="js/myjs/customerprofile.js"></script>
 -->
<!-- <style type="text/css">
.list-group-item {
	border: none;
}

.strong {
	font-size: 20px;
}

a:hover {
	font-size: 15px;
	font-weight: bold;
}

.active {
	font-size: 15px;
	font-weight: bold;
}

.textbox {
	margin: 5px;
	width: 250px;
	height: 40px;
}
</style>
 -->
</head>
<body>
	<div class="">
		<h3 class="bold">Personal Information:</h3>
		<form>
			<table>
				<tr><td>First Name:</td><td><input id="firstNameSave" type="text" class="textbox" value=""></td></tr>
				<tr><td>Last Name:</td><td><input id="lastNameSave" type="text" class="textbox" ></td></tr>
				<tr><td>Mobile No:</td><td><input id="mobileNoSave" type="text" class="textbox" ></td></tr>
<!-- 				<tr><td>Email Address:</td><td><input id="emailSave" type="text" class="textbox"></td></tr> -->
				<tr><td></td><td><button type="button" id="saveProfile" class="btn btn-primary" onclick="saveUserDetails()">Save Changes</button></td></tr>
			</table>
		</form>
	</div>
</body>
</html>