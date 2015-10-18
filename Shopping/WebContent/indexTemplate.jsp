<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<html>
<head>
<title>MakeMyShopy</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/style1.css">

<!-- <link rel="stylesheet" href="js/autoComplete/css/autoCompleteStyle.css"> -->
<link rel="stylesheet" href="js/autoComplete/css/jquery-ui.css">

<link rel="stylesheet" href="css/jqx/jqx.base.css">
<link rel="stylesheet" href="js/jAlert/css/jquery.alerts.css">


<script type="text/javascript" src="js/jAlert/js/jquery.js"></script>
<script type="text/javascript" src="js/jAlert/js/jquery.ui.draggable.js"></script>
<script type="text/javascript" src="js/jAlert/js/jquery.alerts.js"></script>

<script type="text/javascript" src="js/jquery-2.1.4.js"></script>
<script type="text/javascript" src="js/jquery.form.js"></script>

<script type="text/javascript" src='js/jquery.elevatezoom.js'></script>

<!-- <script type="text/javascript" src="js/jquery.validate.min.js"></script> -->
<!-- <script type="text/javascript" src="js/myjs/validation.js"></script> -->

<script type="text/javascript" src="js/autoComplete/js/jquery-ui.js"></script><!-- //autocomplete -->
<script type="text/javascript" src="js/myjs/maintainPageStateUsingCookie/maintainPageState.js"></script>
<script type="text/javascript" src="js/jquery.cookie.js"></script>
<script type="text/javascript" src="js/jquery.session.js"></script>

<script type="text/javascript" src="js/jqwidgets/jqxcore.js"></script>
<script type="text/javascript" src="js/jqwidgets/jqxcheckbox.js"></script>
<script type="text/javascript" src="js/jqwidgets/jqxswitchbutton.js"></script>

<script type="text/javascript" src="js/json_parse.js"></script>
<script type="text/javascript" src="js/json2.js"></script>
<script type="text/javascript" src="js/myjs/handleRequest.js"></script>
<script type="text/javascript" src="js/myjs/handleResponse.js"></script>
<script type="text/javascript" src="js/myjs/handleMessage.js"></script>
<script type="text/javascript" src="js/myjs/callServlet.js"></script>
<script type="text/javascript" src="js/myjs/ready.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
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
<jsp:include page="indexMenu.jsp" />

<div id="loadpage">
<jsp:include page="indexBody.jsp" />
</div>

<div style="margin-bottom: 0px;">
<jsp:include page="footer.jsp" />
</div>
</body>
</html>