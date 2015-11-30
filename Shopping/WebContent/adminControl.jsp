<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>

	<link rel="stylesheet" href="jqwidgets/css/jqx.base1.css" type="text/css" />
	<script type="text/javascript" src="js/jqwidgets/jqxcore.js"></script>
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
    
	<script type="text/javascript" src="js/myjs/admin.js"></script>

</head>
<body>

<div class="adminoverlay" style="margin-top: 45px;">
<div id="loading-img"></div>
</div>
							
<div id="admingrid" style="margin: 100px auto"></div>

			     <div id="viewOrderToConform" class="panel-body" style="margin-top: 20px; display: none;">
						<div class="container" style="width: 100%; height: auto;">
							<table class="table table-striped" cellspacing="0" cellpadding="0">
								<thead class="hidden-xs" style="background-color: #2D97D9">
									<tr>
										<th class="cimg">Image</th>
										<th class="cname">Name</th>
										<th class="cqty">Qty</th>
										<th class="cprice">Price</th>
										<th class="cdelete">Total</th>
									</tr>
								</thead>
								<tbody id="appendOrderToVarify">

								</tbody>
								<div class="grand_total" id="grandtotal"></div>
							</table>
						</div>
				</div>
				
</body>
</html>