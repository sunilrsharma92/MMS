<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

	<link rel="stylesheet" href="jqwidgets/css/jqx.base1.css" type="text/css" />
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
			
<!-- 	<script type="text/javascript" src="js/jqwidgets/jqxcore.js"></script> -->
<!--     <script type="text/javascript" src="jqwidgets/js/jqxdata.js"></script> -->
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
    
	<script type="text/javascript" src="js/myjs/admin.js"></script>
				
</body>
</html>