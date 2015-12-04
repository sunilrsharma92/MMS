<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <title>My Now Amazing Webpage</title>
  <link rel="stylesheet" type="text/css" href="style1.css"> 
  <link href="http://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
  <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
  
  <style type="text/css">
  	.controllers{
	text-align: right;
}
.controllers span{
	display: inline-block;
	font-size: 30px;
	padding: 2px 8px;
	cursor: pointer;
}
.slider-navigation {
  background: #505050;
  padding: 15px 15px;
  text-align: center;
}

#slider-thumbs .list-inline li {
  width: 25%;
  padding: 0px;
  margin-right: -4px;
  cursor: pointer;
}

#slider-thumbs .list-inline li:first-child { padding-left: 5px; }

.slider-nav-arrow {
  text-align: center;
  margin-bottom: 0px;
  visibility: hidden;
}

.selected .slider-nav-arrow { visibility: visible; }

.selected .slider-navigation { opacity: 0.8;
  background-color: #FFF; 
  color: #000;

 }
 a{
  color: #FFF;
  /*text-decoration: none;*/
 }
img{
  width: 100%;
  
}
.add{
border: 1px solid #D8D5D5;
    margin: 1px;
        background-color: #FFF;
}
  /*.col-md-10{
    background-color: royalblue;
  }*/

/*.slick-prev:before, .slick-next:before {
    color: #3C2B2B;
}*/
body{
  background-color: #f5f5f5;

}
.main-wrap{
  /*background-color: red;*/
  width: 100%;
  /*height: 230px;*/
  /*margin: 5px;*/
  margin-top: 10px;
}
.wrap{
  /*margin: 5px;*/
  border: 5px solid transparent;
}

.shop-now{
  background-color: yellow;
  text-align: center;

}
h3{
  /*margin: 5px;*/
  padding: 5px;
}
.shop-img{
  width: 100%;
/*   height: 100%; */
  overflow: hidden;
}
.back{
  background-color: #FFF;
  margin: 6px;
}

.shop-details{
    position: absolute;
/*     height: 100%; */
    width: 100%;
    background-color: rgba(0,0,0,0.7);
    left:0; bottom: 0;
    color:white;padding:10px;
    display:none;
}

.shop-img{
    position:relative;
    display:inline-block;
}
.col-md-4:hover .shop-details{display:block;}
.col-md-4:hover {
    border: 1px solid black;
}
.responsive{
	height: 316px;
}

  </style>
  
  </head>
  <body>
  <div class="container">
  		<!-- main slider carousel -->
		<div class="row">
			<div class="col-md-9" id="slider">
				<div class="" id="carousel-bounding-box" style="padding: 0px;">
					<div id="myCarousel" class="carousel slide">
						<!-- main slider carousel items -->
						<div class="carousel-inner">
							<div class="active item" data-slide-number="1">
								<img src="Images/slide11.jpg" class="img-responsive">
							</div>
							<div class="item" data-slide-number="2">
								<img src="Images/slide2.png" class="img-responsive">
							</div>
							<div class="item" data-slide-number="3">
								<img src="Images/slide11.jpg" class="img-responsive">
							</div>
							<div class="item" data-slide-number="4">
								<img src="Images/33.jpg" class="img-responsive">
							</div>
						</div>
					</div>
				</div>
				<!-- </div> -->
				<!--/main slider carousel-->
				<!-- thumb navigation carousel -->
				<div class="" id="slider-thumbs">
					<!-- thumb navigation carousel items -->
					<ul class="list-inline">
						<li><a id="carousel-selector-1" class="selected">
								<div class="slider-navigation" style="">
									Some text<br> Some text here
								</div>
						</a></li>
						<li><a id="carousel-selector-2">
								<div class="slider-navigation" style="">
									Some text<br> Some text here
								</div>
						</a></li>
						<li><a id="carousel-selector-3">
								<div class="slider-navigation" style="">
									Some text<br> Some text here
								</div>
						</a></li>
						<li><a id="carousel-selector-4">
								<div class="slider-navigation" style="">
									Some text<br> Some text here
								</div>
						</a></li>
					</ul>
				</div>
			</div>
			<div class="col-md-3 hidden-xs">
				<div class="col-md-12 col-sm-4 col-xs-4 add">
					<img src="Images/androidadd123.jpg" class="img-responsive"
						style="">
				</div>
				<!--/col-md-12-->
				<div class="col-md-12 col-sm-4 col-xs-4 add">
					<img src="Images/Add2.jpg" class="img-responsive"
						style="">
				</div>
				<!--/col-md-12-->
				<div class="col-md-12 col-sm-4 col-xs-4 add">
					<img src="Images/Add3.jpg" class="img-responsive"
						style="">
				</div>
				<!--/col-md-12-->

			</div>
			
</div>
  
    <div class="slider-container">
      
    
      <hr class="small">
        <h3 align="center">
          Top Rated
          <span class="controllers pull-right ">
            <span class="prev"> (<) </span> <span class="next"> (>) </span>
          </span>

        </h3>
        <hr class="small">
    <div class="responsive">
        
        <div class="col-md-4 back">
           <div class="main-wrap">
              <div class="shop-img">
                  <a href="#"> <img class="iim img-responsive" src="Images/shop22.jpg"></a>
                  <div class="shop-details">
                    <p>Name:Rahul Madakatti</p>
                    <p>Address: A-402 Tulsi Aangan</p>
                    <p>City:Badlapur</p>
                    <p>State:Maharashtra</p>
                  </div><!--/shop-details-->
              </div><!--/shop-img-->
              
        
            </div><!--/main-wrap-->
            <div class="shop-now">
              <h2>Shop Now</h2>
            </div><!--/shop-now-->
        </div><!--/col-md-4-->
        <div class="col-md-4 back">
           <div class="main-wrap">
              <div class="shop-img">
                  <a href="#"> <img class="iim img-responsive" src="Images/shop22.jpg"></a>
                  <div class="shop-details">
                    <p>Name:Rahul Madakatti</p>
                    <p>Address: A-402 Tulsi Aangan</p>
                    <p>City:Badlapur</p>
                    <p>State:Maharashtra</p>
                  </div><!--/shop-details-->
              </div><!--/shop-img-->
              
        
            </div><!--/main-wrap-->
            <div class="shop-now">
              <h2>Shop Now</h2>
            </div><!--/shop-now-->
        </div><!--/col-md-4-->
        <div class="col-md-4 back">
           <div class="main-wrap">
              <div class="shop-img">
                  <a href="#"> <img class="iim img-responsive" src="Images/shop22.jpg"></a>
                  <div class="shop-details">
                    <p>Name:Rahul Madakatti</p>
                    <p>Address: A-402 Tulsi Aangan</p>
                    <p>City:Badlapur</p>
                    <p>State:Maharashtra</p>
                  </div><!--/shop-details-->
              </div><!--/shop-img-->
              
        
            </div><!--/main-wrap-->
            <div class="shop-now">
              <h2>Shop Now</h2>
            </div><!--/shop-now-->
        </div><!--/col-md-4-->
        <div class="col-md-4 back">
           <div class="main-wrap">
              <div class="shop-img">
                  <a href="#"> <img class="iim img-responsive" src="Images/shop22.jpg"></a>
                  <div class="shop-details">
                    <p>Name:Rahul Madakatti</p>
                    <p>Address: A-402 Tulsi Aangan</p>
                    <p>City:Badlapur</p>
                    <p>State:Maharashtra</p>
                  </div><!--/shop-details-->
              </div><!--/shop-img-->
              
        
            </div><!--/main-wrap-->
            <div class="shop-now">
              <h2>Shop Now</h2>
            </div><!--/shop-now-->
        </div><!--/col-md-4-->


    </div><!--/responsive-->
    </div><!--/slider-container-->
  </div><!--/col-md-12-->

  <div class="container">
    <div class="slider1-container">
      
    
      <hr class="small">
        <h3 align="center">
          Newly Joined
          <span class="controllers pull-right ">
            <span class="prev"> (<) </span> <span class="next"> (>) </span>
          </span>

        </h3>
        <hr class="small">
    <div class="responsive">
        
        <div class="col-md-4 back">
           <div class="main-wrap">
              <div class="shop-img">
                  <a href="#"> <img class="iim img-responsive" src="Images/shop22.jpg"></a>
                  <div class="shop-details">
                    <p>Name:Rahul Madakatti</p>
                    <p>Address: A-402 Tulsi Aangan</p>
                    <p>City:Badlapur</p>
                    <p>State:Maharashtra</p>
                  </div><!--/shop-details-->
              </div><!--/shop-img-->
              
        
            </div><!--/main-wrap-->
            <div class="shop-now">
              <h2>Shop Now</h2>
            </div><!--/shop-now-->
        </div><!--/col-md-4-->
        <div class="col-md-4 back">
           <div class="main-wrap">
              <div class="shop-img">
                  <a href="#"> <img class="iim img-responsive" src="Images/shop22.jpg"></a>
                  <div class="shop-details">
                    <p>Name:Rahul Madakatti</p>
                    <p>Address: A-402 Tulsi Aangan</p>
                    <p>City:Badlapur</p>
                    <p>State:Maharashtra</p>
                  </div><!--/shop-details-->
              </div><!--/shop-img-->
              
        
            </div><!--/main-wrap-->
            <div class="shop-now">
              <h2>Shop Now</h2>
            </div><!--/shop-now-->
        </div><!--/col-md-4-->
        <div class="col-md-4 back">
           <div class="main-wrap">
              <div class="shop-img">
                  <a href="#"> <img class="iim img-responsive" src="Images/shop22.jpg"></a>
                  <div class="shop-details">
                    <p>Name:Rahul Madakatti</p>
                    <p>Address: A-402 Tulsi Aangan</p>
                    <p>City:Badlapur</p>
                    <p>State:Maharashtra</p>
                  </div><!--/shop-details-->
              </div><!--/shop-img-->
              
        
            </div><!--/main-wrap-->
            <div class="shop-now">
              <h2>Shop Now</h2>
            </div><!--/shop-now-->
        </div><!--/col-md-4-->
        <div class="col-md-4 back">
           <div class="main-wrap">
              <div class="shop-img">
                  <a href="#"> <img class="iim img-responsive" src="Images/shop22.jpg"></a>
                  <div class="shop-details">
                    <p>Name:Rahul Madakatti</p>
                    <p>Address: A-402 Tulsi Aangan</p>
                    <p>City:Badlapur</p>
                    <p>State:Maharashtra</p>
                  </div><!--/shop-details-->
              </div><!--/shop-img-->
              
        
            </div><!--/main-wrap-->
            <div class="shop-now">
              <h2>Shop Now</h2>
            </div><!--/shop-now-->
        </div><!--/col-md-4-->


    </div><!--/responsive-->
    </div><!--/slider-container-->
  </div><!--/col-md-12-->

  <script type="text/javascript" src="slick/slick.min.js"></script>

  <script type="text/javascript">
    $(document).ready(function(){
      $('.responsive').slick({
         prevArrow:'.slider-container .prev',
          nextArrow:'.slider-container .next',

  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
  	 {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    });
  </script>

  </body>
</html>
				