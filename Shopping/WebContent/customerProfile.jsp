<%@ page language="java" contentType="text/html; charset= ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset= ISO-8859-1">
<title>My Profile</title>
<meta name="viewport" content="width= device-width, initial-scale= 1, maximum-scale= 1">
<!-- <link rel="stylesheet" href="css/bootstrap.css"> -->
<!-- <link rel="stylesheet" href="css/style1.css"> -->
<!-- <link rel="stylesheet" href="css/jqx/jqx.base.css"> -->

<!-- <!-- <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.3.min.js"></script> --> -->
<!-- <script type="text/javascript" src="js/jquery-2.1.4.js"></script> -->
<!-- <script type="text/javascript" src="js/myjs/maintainPageStateUsingCookie/maintainPageState.js"></script> -->
<!-- <script type="text/javascript" src="js/jquery.cookie.js"></script> -->

<!-- <script type="text/javascript" src="js/jqwidgets/jqxcore.js"></script> -->
<!-- <script type="text/javascript" src="js/jqwidgets/jqxcheckbox.js"></script> -->
<!-- <script type="text/javascript" src="js/jqwidgets/jqxswitchbutton.js"></script> -->

<!-- <script type="text/javascript" src="js/json_parse.js"></script> -->
<!-- <script type="text/javascript" src="js/json2.js"></script> -->
<!-- <script type="text/javascript" src="js/myjs/handleRequest.js"></script> -->
<!-- <script type="text/javascript" src="js/myjs/handleResponse.js"></script> -->
<!-- <script type="text/javascript" src="js/myjs/handleMessage.js"></script> -->
<!-- <script type="text/javascript" src="js/myjs/callServlet.js"></script> -->
<!-- <script type="text/javascript" src="js/myjs/ready.js"></script> -->
<!-- <script type="text/javascript" src="js/bootstrap.js"></script> -->
<!-- <script type="text/javascript" src="js/myjs/customerprofile.js"></script> -->

<style type="text/css">
.fade-in {
	opacity: 0.1;
	transition: opacity 600ms;
}

.row1:hover .fade-in {
	opacity: 1;
}

.bbtn {
	background: none;
	border: 0px;
}
</style>

</head>
<body>
	<%-- 	<jsp:include page= "customerProfileTop.jsp" /> --%>
	<jsp:include page="customerProfileMenu.jsp" />
	<%-- <jsp:include page= "footer.jsp" /> --%>

	<input type="hidden" id="action" name="action" value="edit">
</body>
</html>