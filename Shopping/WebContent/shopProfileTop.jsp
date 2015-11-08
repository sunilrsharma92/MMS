<%@ page language = "java" contentType = "text/html; charset = ISO-8859-1"
	pageEncoding = "ISO-8859-1"%>
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<!DOCTYPE html>
<html>
<head>
<meta http-equiv = "Content-Type" content = "text/html; charset = ISO-8859-1">
<title>Insert title here</title>
<link rel = "stylesheet" href = "stylesheet.css">
<script type="text/javascript" src="js/myjs/customerprofile.js"></script>
</head>
<body>

	<!-- start of top -->
	<div class = "container-fluid" style = "background-color: #037DBB; margin-top:-15px; margin-bottom:15px;">
		<div class = "row row1">
			<div class = "col-md-3 col-sm-6 col-xs-12 prof">
<!-- 					<img src="Images/CPImg/350x260.png"  class = "img-responsive"   style="margin-bottom: 10px;"> -->

				<form enctype="multipart/form-data" id="uploadFile" action="UploadServlet" method="post">
							
							<div class="overlay">
										<div id="loading-img"></div>
									</div>
							
							<div style="width: 150px;height: 150px; margin: 0px auto;">
							<img  id="profileImg" src="https://placehold.it/350x260"  class = "img-responsive"   style="margin-bottom: 10px;">
<!-- 							<img id="profileImg" src="Images/default_profile_pic.png" class="img-circle" style="width:100%; height:100%; background-color:whitesmoke;"> -->
							</div>
					     	 <input type="file" name="fileName" id="fileName" style="display:none;" class="roleType" class="border"/>  
					     	 <input type="submit" value="Save File" id="upldBtn" style="display:none;"/> &nbsp;&nbsp;
						<script type="text/javascript" src="js/jquery.form.js"></script>
						<script type="text/javascript">
						$(document).ready(function (){
							try
							{
						$('#uploadFile').ajaxForm({
							success : function (msg)
							{
								$(".overlay").show();
								var count = 0;
								
								var clear = setInterval(function()
									{
									count++;
									console.log("count : "+count+"msg : "+msg);
									
									if(count == 7)
										{
										$("#profileImg").attr("src",msg);
										$(".overlay").show().delay(100).fadeOut();
										clearInterval(clear);
										}
								}, 500);
								
								
								$.session.remove("profileimg");
								$.session.set("profileimg", msg);
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
			</div>
			<!-- end of col-3 -->
			<div class = "col-md-9 col-sm-6 col-xs-12">
				<h3>Shop Dash</h3>
				<span class = "fade-in" style="display:none;">
					<button id = "editbtn" type = "button" class = "btn btn-default pull-right bbtn" data-toggle = "tooltip" data-placement = "right" title = "Edit below details" aria-pressed = "false" autocomplete = "off">
						<span class = "glyphicon glyphicon-pencil"></span>
					</button>
				</span>
				<table>
					<tr>
						<td><span>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </span></td>
						<td><label class = "labelfont" for="firstNameDisplay"></label></td>
					</tr>
					<!-- <tr>
						<td><span>Last Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </span></td>
						<td><label class = "labelfont" for="lastNameDisplay"></label></td>
					</tr> -->
					<tr>
						<td><span>Address &nbsp;&nbsp;: </span></td>
						<td><label class = "labelfont" for="addressDisplay"></label></td>
					</tr>
					<tr>
						<td><span>State&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span></td>
						<td><label class = "labelfont" for="stateDisplay"></label></td>
					</tr>
					<tr>
						<td><span>City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span></td>
						<td><label class = "labelfont" for="cityDisplay"></label></td>
					</tr>
					<tr>
						<td><span>Pin Code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </span></td>
						<td><label class = "labelfont" for="pincodeDisplay"></label></td>
					</tr>
					<tr>
						<!--searchProductTxtBox -->
<!-- 						<input type="text" id="searchProductTxtBox" class="whiteLabel" style="text-align: center; outline: 0; color:black;" name="searchProductTxtBox" placeholder="Search the item here"> -->
<!-- 						<button class="insearch" onclick="searchProduct();" type="submit"> -->
<!-- 							<span class="glyphicon glyphicon-search"></span> -->
<!-- 						</button> -->
					</tr>
				</table>
				<!-- end of table -->
				<br>

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
				<span class = "pull-left">
				<jsp:include page="searchwithcategory.jsp" />
<!-- 					<button type = "button" class = "btn btn-default" style="width: 33px;"> -->
<!-- 						<span class = "glyphicon glyphicon-thumbs-up"></span> -->
<!-- 					</button> -->
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