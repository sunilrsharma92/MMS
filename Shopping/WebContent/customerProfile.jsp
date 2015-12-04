<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>My Profile</title>
<meta name="viewport" content="width= device-width, initial-scale= 1, maximum-scale= 1">
<link rel="stylesheet" href="jqwidgets/css/jqx.base1.css" type="text/css" />
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
<!--     <script type="text/javascript" src="jqwidgets/js/jqxgrid.columnsresize.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxcalendar.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxdatetimeinput.js"></script> -->
	<script type="text/javascript" src="js/myjs/customerprofile.js"></script>

</body>
</html>