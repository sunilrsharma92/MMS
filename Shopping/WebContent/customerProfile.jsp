<%@ page language="java" contentType="text/html; charset= ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset= ISO-8859-1">
<title>My Profile</title>
<meta name="viewport" content="width= device-width, initial-scale= 1, maximum-scale= 1">
<link rel="stylesheet" href="jqwidgets/css/jqx.base1.css" type="text/css" />
    <script type="text/javascript" src="jqwidgets/js/jqxdata.js"></script>
    <script type="text/javascript" src="jqwidgets/js/jqxbuttons.js"></script>
    <script type="text/javascript" src="jqwidgets/js/jqxscrollbar.js"></script>
    <script type="text/javascript" src="jqwidgets/js/jqxlistbox.js"></script>
    <script type="text/javascript" src="jqwidgets/js/jqxdropdownlist.js"></script>
    <script type="text/javascript" src="jqwidgets/js/jqxmenu.js"></script>
    <script type="text/javascript" src="jqwidgets/js/jqxgrid.js"></script>
    <script type="text/javascript" src="jqwidgets/js/jqxgrid.filter.js"></script>
    <script type="text/javascript" src="jqwidgets/js/jqxgrid.sort.js"></script>
    <script type="text/javascript" src="jqwidgets/js/jqxgrid.pager.js"></script>
    <script type="text/javascript" src="jqwidgets/js/jqxgrid.selection.js"></script>
    <script type="text/javascript" src="jqwidgets/js/jqxgrid.columnsresize.js"></script>
    <script type="text/javascript" src="jqwidgets/js/jqxcalendar.js"></script>
    <script type="text/javascript" src="jqwidgets/js/jqxdatetimeinput.js"></script>
    
<script type="text/javascript" src="js/myjs/customerprofile.js"></script>

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