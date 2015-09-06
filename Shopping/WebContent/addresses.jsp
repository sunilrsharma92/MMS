<!DOCTYPE html>
<html>
<head>
<title></title>
<title></title>
<!-- <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="css/style1.css">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="js/bootstrap.js"></script> -->


</head>
<body>

	<h3 class="bold">Add/Edit Address:</h3>
	<form>
		<table>
			<tr><td>Address 1:</td><td><input type="text" id="address1Save" class="textbox" name="name"></td></tr>
			<tr><td>Address 2:</td><td><input type="text" id="address2Save" class="textbox" name="name"></td></tr>
			<tr><td>Street name:</td><td><input type="text" id="streetSave" class="textbox" name="name"></td></tr>
			<tr><td>State:</td>
				<td>
					<!-- <input type="text" class="textbox" name="name"></td></tr> -->
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
			<tr><td></td><td><button type="button" class="btn btn-primary" onclick="saveUserDetails()">Save Changes</button></td></tr>
		</table>
	</form>


</body>
</html>