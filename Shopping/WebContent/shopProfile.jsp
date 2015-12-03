<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>My Profile</title>
<meta name= "viewport" content= "width= device-width, initial-scale= 1, maximum-scale= 1">


<style type= "text/css">
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
	<jsp:include page= "shopProfileTop.jsp" />
	<jsp:include page= "shopProfileMiddle.jsp" />

	<input type= "hidden" id= "action" name= "action" value= "edit">
</body>
</html>