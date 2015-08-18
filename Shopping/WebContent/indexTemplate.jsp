<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%--     <%@page import="java.util.*" %> --%>
<%--     <%@page import="com.eshop.pojo.Product"%> --%>
    <html>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>MakeMyShopy</title>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/style1.css">
<link rel="stylesheet" href="css/jqx/jqx.base.css">

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/myjs/maintainPageStateUsingCookie/maintainPageState.js"></script>
<script type="text/javascript" src="js/jquery.cookie.js"></script>

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
<script type="text/javascript" src="js/myjs/maintainPageStateUsingCookie/maintainPageState.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
<style>
ul li:hover ul.dropdown-menu {
	display: block; /* Display the dropdown */
}
</style>
</head>
<!-- <body background="Images/background/backgroundimg.jpg"> -->
<!-- <body class="well" > -->
<body>
<jsp:include page="indexMenu.jsp" />

<div id="loadpage">
<jsp:include page="indexBody.jsp" />
</div>

<jsp:include page="footer.jsp" />

</body>
</html>