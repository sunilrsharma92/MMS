<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

<title>Insert title here</title>
</head>
<body>
	<div class="container" id="suppliersearch">
    <div class="row">    
<!--         <div class="col-xs-8 col-xs-offset-2"> -->
            <div class="col-md-10">
            <div class="input-group">
                <div class="input-group-btn search-panel">
                    <button type="button" class="btn btn-default dropdown-toggle btn-primary" data-toggle="dropdown">
                        <span id="search_concept">All</span> <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Category1</a></li>
                      <li><a href="#">Category2</a></li>
                      <li><a href="#">Category3</a></li>
                      <li><a href="#">Category4</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Category5</a></li>
                    </ul>
                </div>
                <input type="hidden" name="search_param" value="all" id="search_param">         
                <input type="text" class="form-control" id="searchProductTxtBox" name="x" placeholder="Search your products here...">
                <span class="input-group-btn">
                    <button class="btn btn-default btn-primary" id="productSearch" type="button"><span class="glyphicon glyphicon-search"></span></button>
                </span>
            </div>
			</div>
			<button type="button" class="btn btn-default" style="width: 33px;">
					<span class="glyphicon glyphicon-thumbs-up"></span>
				</button>
    </div>
</div>

	<script type="text/javascript">
		$(document).ready(function(e){

    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#","");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
});

	</script>
</body>
</html>