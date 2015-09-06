<%@ page language = "java" contentType = "text/html; charset = ISO-8859-1"
    pageEncoding = "ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv = "Content-Type" content = "text/html; charset = ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<!-- start of middle -->
<div class = "container">
  <div class = "row">
   <div class = "col-md-2">
    <div class = "list-group side-bar">
     <a href = "profile1.html" class = "list-group-item active"><span class = "glyphicon glyphicon-home"></span> Dash</a>
     <a href = "#" class = "list-group-item"><span class = "glyphicon glyphicon-pencil"></span> Edit Slider</a>
     <a href = "#" class = "list-group-item"><span class = "glyphicon glyphicon-pencil"></span> Edit Featured</a>
     <a href = "#" class = "list-group-item"><span class = "glyphicon glyphicon-pencil"></span> Edit New item</a>
     <hr class = "large">
     <jsp:include page="customerProfileMenu.jsp" />
     <a href = "table.html" class = "list-group-item"><span class = "glyphicon glyphicon-plus"></span> Add Products</a>

   </div>

 </div><!-- end of col-2 -->
 <div class = "col-md-10">

   <!-- Slider -->

   <br>
   <div id = "myCarousel" class = "carousel slide" data-ride = "carousel">
    <!-- Indicators -->
    <ol class = "carousel-indicators">
      <li data-target = "#myCarousel" data-slide-to = "0" class = "active"></li>
      <li data-target = "#myCarousel" data-slide-to = "1"></li>
      <li data-target = "#myCarousel" data-slide-to = "2"></li>

    </ol>

    <!-- Wrapper for slides -->
    <div class = "carousel-inner" role = "listbox">
      <div class = "item active">
        <img src = "Images/11.jpg" >
        <h4 class = "font" align = "center">This is header</h4>
        <p class = "font" align = "center">This is paragraph with description</p>
      </div>

      <div class = "item">
        <img src = "Images/22.jpg">
        <h4 class = "font" align = "center">This is header</h4>
        <p class = "font" align = "center">This is paragraph with description</p>
      </div>

      <div class = "item">
        <img src = "Images/33.jpg">
        <h4 class = "font" align = "center">This is header</h4>
        <p class = "font" align = "center">This is paragraph with description</p>
      </div>

      
    </div>

    <!-- Left and right controls -->
    <a class = "left carousel-control" href = "#myCarousel" role = "button" data-slide = "prev">
      <span class = "glyphicon glyphicon-chevron-left" aria-hidden = "true"></span>
      <span class = "sr-only">Previous</span>
    </a>
    <a class = "right carousel-control" href = "#myCarousel" role = "button" data-slide = "next">
      <span class = "glyphicon glyphicon-chevron-right" aria-hidden = "true"></span>
      <span class = "sr-only">Next</span>
    </a>
  </div>

  <!-- End of slider  -->


  <div class = "row">
   <hr class = "small">
   <h3 class = "font" align = "center">Featured Items</h3>
   <hr class = "small">

   
   <div class = "col-md-2 col-sm-3  col-xs-4 wrap">
    <div class = "portfolio-item">
    <div class = "inner-wrap">
      <a href = "#">
        <img class = "img-portfolio img-responsive" src = "Images/tea2.png">
      </a>
    </div>
    </div>
    <div class = "align-center">
      <div class = "productname font">Product Name:</div>
      <div class = "productprice font">price:120</div>
      <div class = "instock font">Instock:</div>
      <div class = "quantity font">Quantity:<input id = "qtytxt" type = "text" name = "quantity"></div>
      <div class = "cartbtn font"><button type = "button" class = "btn btn-success cartsz ">ADD</button></div>
    </div>
  </div>

  <div class = "col-md-2 col-sm-3  col-xs-4 wrap">
    <div class = "portfolio-item">
    <div class = "inner-wrap">
      <a href = "#">
        <img class = "img-portfolio img-responsive" src = "Images/tea2.png">
      </a>
    </div>
    </div>
    <div class = "align-center">
      <div class = "productname font">Product Name:</div>
      <div class = "productprice font">price:120</div>
      <div class = "instock font">Instock:</div>
      <div class = "quantity font">Quantity:<input id = "qtytxt" type = "text" name = "quantity"></div>
      <div class = "cartbtn font"><button type = "button" class = "btn btn-success cartsz ">ADD</button></div>
    </div>
  </div>
  <div class = "col-md-2 col-sm-3  col-xs-4 wrap">
    <div class = "portfolio-item">
    <div class = "inner-wrap">
      <a href = "#">
        <img class = "img-portfolio img-responsive" src = "Images/tea2.png">
      </a>
    </div>
    </div>
    <div class = "align-center">
      <div class = "productname font">Product Name:</div>
      <div class = "productprice font">price:120</div>
      <div class = "instock font">Instock:</div>
      <div class = "quantity font">Quantity:<input id = "qtytxt" type = "text" name = "quantity"></div>
      <div class = "cartbtn font"><button type = "button" class = "btn btn-success cartsz ">ADD</button></div>
    </div>
  </div>
  <div class = "col-md-2 col-sm-3  col-xs-4 wrap">
    <div class = "portfolio-item">
    <div class = "inner-wrap">
      <a href = "#">
        <img class = "img-portfolio img-responsive" src = "Images/tea2.png">
      </a>
    </div>
    </div>
    <div class = "align-center">
      <div class = "productname font">Product Name:</div>
      <div class = "productprice font">price:120</div>
      <div class = "instock font">Instock:</div>
      <div class = "quantity font">Quantity:<input id = "qtytxt" type = "text" name = "quantity"></div>
      <div class = "cartbtn font"><button type = "button" class = "btn btn-success cartsz ">ADD</button></div>
    </div>
  </div>
  <div class = "col-md-2 col-sm-3  col-xs-4 wrap">
    <div class = "portfolio-item">
    <div class = "inner-wrap">
      <a href = "#">
        <img class = "img-portfolio img-responsive" src = "Images/tea2.png">
      </a>
    </div>
    </div>
    <div class = "align-center">
      <div class = "productname font">Product Name:</div>
      <div class = "productprice font">price:120</div>
      <div class = "instock font">Instock:</div>
      <div class = "quantity font">Quantity:<input id = "qtytxt" type = "text" name = "quantity"></div>
      <div class = "cartbtn font"><button type = "button" class = "btn btn-success cartsz ">ADD</button></div>
    </div>
  </div>
  <div class = "col-md-2 col-sm-3  col-xs-4 wrap">
    <div class = "portfolio-item">
    <div class = "inner-wrap">
      <a href = "#">
        <img class = "img-portfolio img-responsive" src = "Images/tea2.png">
      </a>
    </div>
    </div>
    <div class = "align-center">
      <div class = "productname font">Product Name:</div>
      <div class = "productprice font">price:120</div>
      <div class = "instock font">Instock:</div>
      <div class = "quantity font">Quantity:<input id = "qtytxt" type = "text" name = "quantity"></div>
      <div class = "cartbtn font"><button type = "button" class = "btn btn-success cartsz ">ADD</button></div>
    </div>
  </div>



</div><!-- End of inner row -->
<div class = "row">
   <hr class = "small">
   <h3 class = "font" align = "center">Top New Items</h3>
   <hr class = "small">
   <div class = "col-md-2 col-sm-3  col-xs-4 wrap">
    <div class = "portfolio-item">
    <div class = "inner-wrap">
      <a href = "#">
        <img class = "img-portfolio img-responsive" src = "Images/tea2.png">
      </a>
    </div>
    </div>
    <div class = "align-center">
      <div class = "productname font">Product Name:</div>
      <div class = "productprice font">price:120</div>
      <div class = "instock font">Instock:</div>
      <div class = "quantity font">Quantity:<input id = "qtytxt" type = "text" name = "quantity"></div>
      <div class = "cartbtn font"><button type = "button" class = "btn btn-success cartsz ">ADD</button></div>
    </div>
  </div>
  <div class = "col-md-2 col-sm-3  col-xs-4 wrap">
    <div class = "portfolio-item">
    <div class = "inner-wrap">
      <a href = "#">
        <img class = "img-portfolio img-responsive" src = "Images/tea2.png">
      </a>
    </div>
    </div>
    <div class = "align-center">
      <div class = "productname font">Product Name:</div>
      <div class = "productprice font">price:120</div>
      <div class = "instock font">Instock:</div>
      <div class = "quantity font">Quantity:<input id = "qtytxt" type = "text" name = "quantity"></div>
      <div class = "cartbtn font"><button type = "button" class = "btn btn-success cartsz ">ADD</button></div>
    </div>
  </div>
  <div class = "col-md-2 col-sm-3  col-xs-4 wrap">
    <div class = "portfolio-item">
    <div class = "inner-wrap">
      <a href = "#">
        <img class = "img-portfolio img-responsive" src = "Images/tea2.png">
      </a>
    </div>
    </div>
    <div class = "align-center">
      <div class = "productname font">Product Name:</div>
      <div class = "productprice font">price:120</div>
      <div class = "instock font">Instock:</div>
      <div class = "quantity font">Quantity:<input id = "qtytxt" type = "text" name = "quantity"></div>
      <div class = "cartbtn font"><button type = "button" class = "btn btn-success cartsz ">ADD</button></div>
    </div>
  </div>
  <div class = "col-md-2 col-sm-3  col-xs-4 wrap">
    <div class = "portfolio-item">
    <div class = "inner-wrap">
      <a href = "#">
        <img class = "img-portfolio img-responsive" src = "Images/tea2.png">
      </a>
    </div>
    </div>
    <div class = "align-center">
      <div class = "productname font">Product Name:</div>
      <div class = "productprice font">price:120</div>
      <div class = "instock font">Instock:</div>
      <div class = "quantity font">Quantity:<input id = "qtytxt" type = "text" name = "quantity"></div>
      <div class = "cartbtn font"><button type = "button" class = "btn btn-success cartsz ">ADD</button></div>
    </div>
  </div>
  <div class = "col-md-2 col-sm-3  col-xs-4 wrap">
    <div class = "portfolio-item">
    <div class = "inner-wrap">
      <a href = "#">
        <img class = "img-portfolio img-responsive" src = "Images/tea2.png">
      </a>
    </div>
    </div>
    <div class = "align-center">
      <div class = "productname font">Product Name:</div>
      <div class = "productprice font">price:120</div>
      <div class = "instock font">Instock:</div>
      <div class = "quantity font">Quantity:<input id = "qtytxt" type = "text" name = "quantity"></div>
      <div class = "cartbtn font"><button type = "button" class = "btn btn-success cartsz ">ADD</button></div>
    </div>
  </div>
  <div class = "col-md-2 col-sm-3  col-xs-4 wrap">
    <div class = "portfolio-item">
    <div class = "inner-wrap">
      <a href = "#">
        <img class = "img-portfolio img-responsive" src = "Images/tea2.png">
      </a>
    </div>
    </div>
    <div class = "align-center">
      <div class = "productname font">Product Name:</div>
      <div class = "productprice font">price:120</div>
      <div class = "instock font">Instock:</div>
      <div class = "quantity font">Quantity:<input id = "qtytxt" type = "text" name = "quantity"></div>
      <div class = "cartbtn font"><button type = "button" class = "btn btn-success cartsz ">ADD</button></div>
    </div>
  </div>



</div><!-- End of inner row -->


</div><!-- end col-10 -->
</div><!-- end of row -->
</div><!-- end of container -->
<!--end of middle  -->

</body>
</html>