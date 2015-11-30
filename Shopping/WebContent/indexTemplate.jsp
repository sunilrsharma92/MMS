<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<title>MakeMyShopy, India's First Local Shop Shopping | Buy local grocery goods,Hotels etc</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="icon" type="image/png" href="Images/Modified.ico">
<meta name="Keywords" content="Online Shopping, India, Books, Store, makemyshopy">
<meta name="Description" content="makemyshopy.com - India's Local Shopping website to buy wide range of products. CoD and Free Shipping.">

<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="js/autoComplete/css/jquery-ui.css">
<link rel="stylesheet" href="css/style1.css">


<link rel="stylesheet" href="css/jqx/jqx.base.css">
<link rel="stylesheet" href="js/jqueryConfirm/jquery-confirm.css">

<script type="text/javascript" src="js/jquery-2.1.4.js"></script>
<script type="text/javascript" src="js/jqueryConfirm/jquery-confirm.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>

<script type="text/javascript" src='js/jquery.elevatezoom.js'></script>
<script type="text/javascript" src="js/autoComplete/js/jquery-ui.js"></script><!-- //autocomplete -->
<script type="text/javascript" src="js/myjs/maintainPageStateUsingCookie/maintainPageState.js"></script>
<script type="text/javascript" src="js/jquery.cookie.js"></script>
<script type="text/javascript" src="js/jquery.session.js"></script>

<script type="text/javascript" src="js/jqwidgets/jqxcore.js"></script>
<script type="text/javascript" src="js/jqwidgets/jqxcheckbox.js"></script>
<script type="text/javascript" src="js/jqwidgets/jqxswitchbutton.js"></script>

<script type="text/javascript" src="js/json_parse.js"></script>
<script type="text/javascript" src="js/json2.js"></script>

<script type="text/javascript" src="slick/slick.min.js"></script>

<script type="text/javascript" src="js/myjs/handleRequest.js"></script>
<script type="text/javascript" src="js/myjs/handleResponse.js"></script>
<script type="text/javascript" src="js/myjs/handleMessage.js"></script>
<script type="text/javascript" src="js/myjs/callServlet.js"></script>
<script type="text/javascript" src="js/myjs/ready.js"></script>

<style>
.error{
		color: red;
	}
ul li:hover ul.dropdown-menu {
	display: block; /* Display the dropdown */
}
</style>

</head>
<body>

<%-- <jsp:include page="indexMenu.jsp" />

<div id="loadpage" >
<jsp:include page="indexBody.jsp" />
</div>

<div style="margin-bottom: 0px;">
<jsp:include page="footer.jsp" />
</div> --%>


<div id="wrapper">
		
		<div id="header">
			<jsp:include page="indexMenu.jsp" />
<!-- 			<div id="indexMenuPage"></div> -->
		</div><!-- #header -->
		
		<div class="indexoverlay" style="margin-top: 17%;">
		<div id="loading-img"></div>
		</div>
		
		<div id="content">
					<div id="loadpage">
<%-- 			<jsp:include page="indexBody.jsp" /> --%>
			</div>
		</div><!-- #content -->
		
		<div id="footer">
			<jsp:include page="footer.jsp" />
		</div><!-- #footer -->
		
	</div><!-- #wrapper -->

</body>
</html>