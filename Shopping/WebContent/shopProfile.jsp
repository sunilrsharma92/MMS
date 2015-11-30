<%@ page language= "java" contentType= "text/html; charset= ISO-8859-1"
	pageEncoding= "ISO-8859-1"%>
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<!DOCTYPE html>
<html>
<head>
<meta http-equiv= "Content-Type" content= "text/html; charset= ISO-8859-1">
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