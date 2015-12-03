<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>MakeMyShopy, India's First Local Shop Shopping | Buy local grocery goods,Hotels etc.</title>

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="language" content="english">

<meta name="google-site-verification" content="wW9PCAwO4za6cryT7u00KyNxCHglqXbQ9Fym_fSPMxU" />
<meta name="msvalidate.01" content="615AA05A065A4B49A5AC132A2DF25713" />
<meta name="alexaVerifyID" content="I5j3j8RQoHLzw7jPGS0AiJpcA0E"/>

<link rel="icon" type="image/png" href="Images/Modified.ico" alt="makemyshopy">
<meta name="Keywords" content="makemyshopy,Make,my,shopy,Online Shopping, India, Books,Shop,Store,Solapur Chaddars,Chaddars,Solapur">
<meta name="Description" content="makemyshopy.com - India's Local Shopping website to buy wide range of products. CoD and Free Shipping.">
<link rel="canonical" href="http://www.makemyshopy.com/">

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