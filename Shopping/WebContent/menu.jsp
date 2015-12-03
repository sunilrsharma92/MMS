<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<div class="container-fluid  top-bar">
    <div class="container ">

      <ul class="list-inline">
        <li class="hidden-xs"><span class="glyphicon glyphicon-phone-alt"style="
            margin-right: 5px;"></span> 9970181137</li>
        <li class=""><a href="#"id="login" data-toggle="modal" data-target="#trackModal"><span class="glyphicon glyphicon-map-marker"style="
            margin-right: 5px;"></span>Track your order</a></li>
        <!-- Modal -->
        <div class="modal fade" id="trackModal" role="dialog">
          <div class="modal-dialog modal-sm">

            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title"><strong>Track your order</strong></h4>
              </div>
              <div class="modal-body">
                <input class="font" type="text" placeholder="Enter the email or order id"/>
                <button class="btn btn-primary" type="button">Track</button>
              </div>       
            </div>      
          </div>
        </div>  
        <!-- end of Modal -->
        <li class="pull-right">
          <!-- Trigger the modal with a button -->
          <a href="#" data-toggle="modal" data-target="#LoginModal" id="login" ><span class="glyphicon glyphicon-user"style="
            margin-right: 5px;"></span>Login</a>
            <!-- Modal -->
            <div class="modal fade" id="LoginModal" role="dialog">
              <div class="modal-dialog">      
                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title"><strong> Login</strong></h4>
                  </div>
                  <div class="modal-body">
                    <ul class="nav nav-tabs">
                      <li class="active"><a class="font" data-toggle="tab" href="#home">Login</a></li>
                      <li><a class="font" data-toggle="tab" href="#menu1">Sign up</a></li>
                      <li><a class="font" data-toggle="tab" href="#menu2">Forgot password</a></li>
                    </ul>

                    <div class="tab-content">
                      <div id="home" class="tab-pane fade in active">
                        <h3 class="font">Login:</h3>
                        <input class="textbox" type="text" name="user"  placeholder="Username"><br>
                        <input class="textbox" type="password" name="pass" placeholder="Password"><br>
                        <!-- <a href="#" id="forgot">forgot password?</a><br> -->
                        <button class="btn btn-primary" type="button">Login</button>
                      </div>
                      <div id="menu1" class="tab-pane fade">
                        <h3 class="font">Sign up</h3>
                        <input class="textbox"  type="text" name="user" placeholder="Enter Email id"><br>
                        <input class="textbox"  type="text" name="user" placeholder="Enter Username"><br>
                        <input class="textbox"  type="text" name="user" placeholder="Enter Mobile No"><br>
                        <input class="textbox" type="password" name="user" placeholder="Enter Password"><br>
                        <input class="textbox" type="password" name="user" placeholder="ReEnter Password"><br>
                        <button class="btn btn-primary" type="button">Sign Up</button> 
                      </div>
                      <div id="menu2" class="tab-pane fade">
                        <h3 class="font">Forgot Password:</h3>
                        <input class="textbox" type="text" name="user" placeholder="Enter Username/Email id">
                        <button class="btn btn-primary" type="button">Submit</button>     
                      </div>
                    </div>
                  </div>
                </div>      
              </div>
            </div>        
            <!-- </div> -->
          </li>
        </ul>
      </div>
    </div>

    <div class="container-fluid mid-bar ">
      <div class="container ">

        <div class="col-md-8 col-sm-8 col-xs-9">
          <div class="input-group list-inline" style="
          margin-left: -16px;">
          <input type="text" class="form-control" placeholder="Search your Shop/Product here">
          <span class="input-group-btn">
            <button class="btn " type="button"><img src="Images/search.png" width="20px" height="18px" ></button>
          </span>

        </div><!-- /input-group -->
      </div><!-- /.col-lg-6 -->
      <div class="col-md-4 col-sm-4 col-xs-3">

        <button id="getCartProduct" type="button" class=" pull-right btn btn-primary" data-toggle="modal" data-target="#cartmodal" style="
        margin-right: -11px;"><span class="glyphicon glyphicon-shopping-cart"></span> 
        <span class="hidden-xs">CART</span> <span class="badge" ><label id="productCountOnCart">0</label></span></button>

        <!--  -->
        <!-- <a href="#"id="login" data-toggle="modal" data-target="#trackModal">Track your order</a></li> -->
        <!-- Modal -->
        <div class="modal fade" id="cartmodal" role="dialog">
          <div class="modal-dialog modal-lg">

            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title"><strong style="color: #FFF;">Cart Details</strong></h4>
              </div>
              <div class="modal-body">
                <div class="container cheight">

                  <table class="table table-striped" cellspacing="0" cellpadding="0">
                    <thead>
                      <tr>
                        <th class="cimg">Image</th>
                        <th class="cname">Name</th>
                        <th class="csize">Size</th>
                        <th class="cqty">Qty</th>
                        <th class="cprice">Price</th>
                        <th class="cdelete">Delete</th>
                      </tr>
                    </thead>
                    <tbody id="appendProducttoCart">

                 </tbody>
               </table>
             </div>
             <div class="totaldiv">
              <span class="tlbprce">Total Price :</span>
              <span class="totalprize"><strong> Rs 0</strong> </span> 
              <span class="usave">You save :</span> 
              <span class="rups"><strong> Rs 0</strong> </span>
              
            </div>
            <div class="totaldiv">
              <button class="btn btn-primary" type="button">Check Out</button>  <button class="btn btn-primary" type="button">Continue Shopping</button>
            </div>
          </div>       
        </div>      
      </div>
    </div>  
    <!-- end of Modal -->
    <!--  -->

  </div>
</div><!-- /.row -->

     
        </div> 
      

      

      <nav class="navbar navbar-default middle-bar ">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Logo</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Menu1 <span class="sr-only">(current)</span></a></li>
              <li><a href="#">Menu2</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Megamenu <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <div class="container container-1">

                    <div class="col-md-2 col-line" >
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                    </div>  
                    <div class="col-md-2 col-line" >
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                    </div>  
                    <div class="col-md-2 col-line" >
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                    </div>  
                    <div class="col-md-2 col-line prd-disp" >

                      <div class="image"><img src="Images/tea.jpg"  alt="Tea" width="100px" height="100px"></div>
                      <div class="productname">Product Name:</div>
                      <div class="productprice">Product price:</div>
                      <div class="instock">Instock:</div>
                      <div class="quantity">Quantity:<input id="qtytxt" type="text" name="quantity"></div>
                      <div class="cartbtn"><button type="button" class="btn btn-success">ADD TO CART</button></div>
                    </div>                 
                  </div><!-- div container-1 -->
                </ul><!-- end of dropdownmenu -->
              </li><!--end fo dropdown  -->
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Megamenu <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <div class="container container-1">

                    <div class="col-md-2 col-line" >
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                    </div>  
                    <div class="col-md-2 col-line" >
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                    </div>  
                    <div class="col-md-2 col-line" >
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                      <div class="row"> hhjhhjhfd</div>
                    </div>  
                    <div class="col-md-2 col-line " >

                      <div class="image"><img src="Images/tea.jpg"  alt="Tea" width="100px" height="150px"></div>

                    </div>                 
                  </div><!-- div container-1 -->
                </ul><!-- end of dropdownmenu -->
              </li><!--end fo dropdown  -->
            </ul><!--  end of nav-->

            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">Menu4</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>


</body>
</html>