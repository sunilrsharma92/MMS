<%@ page language = "java" contentType = "text/html; charset = ISO-8859-1"
	pageEncoding = "ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv = "Content-Type" content = "text/html; charset = ISO-8859-1">
<title>Insert title here</title>
<link rel = "stylesheet" href = "stylesheet.css">
<script type="text/javascript" src="js/myjs/customerprofile.js"></script>
</head>
<body>

	<!-- start of top -->
	<div class = "container" style = "background-color: #3EAFAF;">
		<div class = "row row1">
			<div class = "col-md-3 col-sm-6 col-xs-12 prof">
				<img class = "img-responsive" src = "Images/profileImg.jpg">
			</div>
			<!-- end of col-3 -->
			<div class = "col-md-9 col-sm-6 col-xs-12">
				<h3>Shop Dash</h3>
				<span class = "fade-in">
					<button id = "editbtn" type = "button" class = "btn btn-default pull-right bbtn" data-toggle = "tooltip" data-placement = "right" title = "Edit below details" aria-pressed = "false" autocomplete = "off">
						<span class = "glyphicon glyphicon-pencil"></span>
					</button>
				</span>
				<table>
					<tr>
						<td><span>First	Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </span></td>
						<!--         <td><a href = "#" id = "name" class = "a" data-type = "text" data-placement = "right" data-title = "Enter username">Rahul Madakatti</a></td>-->
						<td><div id = "firstName1"><label id = "firstName" class = "labelfont"></label></div></td>
					</tr>
					<tr>
						<td><span>Last Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </span></td>
						<!--         <td><a href = "#" id = "name" class = "a" data-type = "text" data-placement = "right" data-title = "Enter username">Rahul Madakatti</a></td>-->
						<td><div id = "lastName1"><label id = "lastName" class = "labelfont"></label></div></td>
					</tr>
					<tr>
						<td><span>Address &nbsp;&nbsp;: </span></td>
						<!--        <td><a href = "#" id = "address" class = "a" data-type = "textarea" data-rows = "2" data-placement = "right" data-title = "Enter address">Tulsi Aangan Near Ganesh Ghat</a></td>-->
						<td><div id = "address1"><label id = "address" class = "labelfont"></label></div></td>
					</tr>
					<tr>
						<td><span>State&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span></td>
						<!--        <td><a href = "#" id = "state" class = "a" data-type = "text" data-placement = "right" data-title = "Enter state">Maharashtra</a></td>-->
						<td><div id = "state1"><label id = "state" class = "labelfont"></label></div></td>
					</tr>
					<tr>
						<td><span>City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span></td>
						<!--        <td><a href = "#" id = "city" class = "a" data-type = "text" data-placement = "right" data-title = "Enter city">Thane</a></td>-->
						<td><div id = "city1"><label id = "city" class = "labelfont"></label></div></td>
					</tr>
					<tr>
						<td><span>Pin Code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </span></td>
						<!--        <td><a href = "#" id = "pin" class = "a" data-type = "text" data-placement = "right" data-title = "Enter pin">421503</a></td>-->
						<td><div id = "pincode1"><label id = "pincode" class = "labelfont"></label></div></td>
					</tr>
				</table>
				<!-- end of table -->
				</br>

				<p>
					Rating: 
					<span class = "starRating"> 
						<input id = "rating5" type = "radio" name = "rating" value = "5"> <label for = "rating5">5</label>
						<input id = "rating4" type = "radio" name = "rating" value = "4"> <label for = "rating4">4</label> 
						<input id = "rating3" type = "radio" name = "rating" value = "3"> <label for = "rating3">3</label> 
						<input id = "rating2" type = "radio" name = "rating" value = "2"> <label for = "rating2">2</label> 
						<input id = "rating1" type = "radio" name = "rating" value = "1"> <label for = "rating1">1</label>
					</span>
				</p>


<!-- 				<span>Ratings:*****</span>  -->
				<span class = "pull-right">Social	Connect:
					<button type = "button" class = "btn btn-default">
						<span class = "glyphicon glyphicon-thumbs-up"></span> facebook
					</button>
				</span>
<!-- 				</button> -->
			</div>

		</div>
		<!-- end of col-9 -->

	</div>
	<!-- end of row-->


	</div>
	<!--end of container top -->
	<!-- end of top -->
</body>
</html>