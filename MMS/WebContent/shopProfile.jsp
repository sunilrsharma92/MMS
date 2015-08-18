<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>My Profile</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<!--  <link rel="stylesheet" href="css/bootstrap.css"> -->

<!--  <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
 <link href="css/style1.css" rel="stylesheet"/>
 <link href="css/bootstrap.min.css" rel="stylesheet">
 <script src="http://code.jquery.com/jquery-2.0.3.min.js"></script> 
 <script type="text/javascript" src="js/jquery.cookie.js"></script> -->

<!-- custom js -->
<!--  <script type="text/javascript" src="js/myjs/handleRequest.js"></script>
 <script type="text/javascript" src="js/myjs/handleResponse.js"></script>
 <script type="text/javascript" src="js/myjs/handleMessage.js"></script>
 <script type="text/javascript" src="js/myjs/callServlet.js"></script> -->
 <script type="text/javascript" src="js/myjs/ready.js"></script> 
<!--  <script src="js/bootstrap.js"></script>
 <script src="js/bootstrap.min.js"></script>  -->

 <style type="text/css">

.fade-in {
     opacity: 0.1;
     transition: opacity 600ms;

 }
.row1:hover .fade-in {
     opacity: 1;
 }
.bbtn{
  background: none;
  border:0px;
}

  </style>

</head>
<body>
<jsp:include page="shopProfileTop.jsp" />
<jsp:include page="shopProfileMiddle.jsp" />
<%-- <jsp:include page="footer.jsp" /> --%>

<input type="hidden" id="action" name="action" value="edit">
</body>
</html>