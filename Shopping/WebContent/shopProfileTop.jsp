<%@ page language = "java" contentType = "text/html; charset = ISO-8859-1"
	pageEncoding = "ISO-8859-1"%>
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<!DOCTYPE html>
<html>
<head>
<meta http-equiv = "Content-Type" content = "text/html; charset = ISO-8859-1">
<title>Insert title here</title>
<link rel = "stylesheet" href = "stylesheet.css">

<link rel="stylesheet" href="jqwidgets/css/jqx.base1.css" type="text/css" />
    <style>

.hideme
{
	display:none;
	margin-top: -129px;
	margin-left: 127px;
}
span.glyphicon.glyphicon-camera {
    font-size: 50px;
    /* color: #FFF; */
}
.profilewrap:hover .hideme{display:block;}

</style>

</head>
<body>

	<!-- start of top -->
	<div class = "container-fluid" style = "background-color: #037DBB; margin-top:-15px; margin-bottom:15px;">
		<div class = "row row1">
			<div class = "col-md-3 col-sm-6 col-xs-12 prof" style="height: 230px;">

				<form enctype="multipart/form-data" id="uploadFile" action="UploadServlet" method="post" style="height:100%">
							
							<div class="overlay">
							<div id="loading-img" style="margin: 37px;"></div>
							</div>
							
							<div class="profilewrap shopprofileimgclick" id="onEnter" style="margin-bottom: 10px; height:100%">
								<img  id="shopprofileimg" src="https://placehold.it/350x260"  class="iim img-responsive icon_click" style="margin-bottom: 10px; height:100%">
								<div class="hideme icon_click"><span class="glyphicon glyphicon-camera"></span></div>
							</div>
							
					     	<input type="file" name="fileName" id="fileName" style="display:none;" class="roleType" class="border"/>  
					     	<input type="submit" value="Save File" id="upldBtn" style="display:none;"/> &nbsp;&nbsp;
						<script type="text/javascript" src="js/jquery.form.js"></script>
						<script type="text/javascript">
						$(document).ready(function (){
							try
							{
								$(".shopprofileimgclick").click(function(){
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
										$("#shopprofileimg").attr("src",msg);
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


				<span class = "pull-left">
				<jsp:include page="searchwithcategory.jsp" />
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
	
<!-- 	<script type="text/javascript" src="jqwidgets/js/jqxdata.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxbuttons.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxscrollbar.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxlistbox.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxdropdownlist.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxmenu.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxgrid.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxgrid.filter.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxgrid.sort.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxgrid.pager.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxgrid.selection.js"></script> -->

<!--     <script type="text/javascript" src="jqwidgets/js/jqxgrid.edit.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxgrid.columnsresize.js"></script> -->

<!--     <script type="text/javascript" src="jqwidgets/js/jqxpanel.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxcalendar.js"></script> -->

<!--     <script type="text/javascript" src="jqwidgets/js/jqxradiobutton.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxdatetimeinput.js"></script> -->

<!--     <script type="text/javascript" src="jqwidgets/js/globalize.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/demos.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/generatedata.js"></script> -->
	<script type="text/javascript" src="js/myjs/customerprofile.js"></script>
	
</body>
</html>