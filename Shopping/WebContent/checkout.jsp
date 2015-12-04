<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Checkout</title>

<style type="text/css">
	.bs-example {
		margin: 20px;
	}
	
	.space
	{
		height: 10px;
	}
	
	.divSection
	{
		width: 30%;
		float: left;
	}
	
	.mainDivSection
	{
		padding-left: 10px;
		width: 100%;
	}
	
	.alignleft
	{
		width: 100%;
		float: left;
		margin-top: 20px;
		position: relative;
		display: block;
		margin-bottom: 10px;
	}
</style>

</head>
<body>
	<div class="container">
	<!-- Loading img -->
									<div class="overlay1">
										<div id="loading-img"></div>
									</div>
									<!-- Loading img -->
									
		<h4>Checking out</h4>
		<div class="panel-group" id="accordion">

			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
						<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">1. Before You place your order!! Sign In</a>
					</h4>
				</div>
				<div id="collapseOne" class="panel-collapse collapse in">
					<div class="panel-body" id="panelbody">
						<button class="btn btn-primary" type="button" id="acordionsignin">Sign In</button>
						<button class="btn btn-primary" type="button" id="acordionsignup">Sign Up</button>
						<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" id="nextAccordion" onclick="proceed('login');" class="btn btn-primary pull-right">Next</a>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">2. Delivery Address</h4>
				</div>
				<div id="collapseTwo" class="panel-collapse collapse">
					<div class="panel-body">
						<div class="container" style="width: 100%;">
							<div class="radio">
								<label><input type="radio" id="oldadd" value="one" style="margin-top: 0px;" checked="checked" name="optradio">Same as my Account Address</label>
								<div class="pull-right sameadd " style="display: block;">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" class="btn btn-primary 2nd_previous" id="ckaddcont">Pre</a>
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" onclick="proceed('address');" class="btn btn-primary 2nd_next" id="nextAccordion1">Next</a>
								</div>
								
								<div>
								<div class="mainDivSection" id="displayExistAddress">
								</div>
								</div>
							</div>
							
							<div class="alignleft">
								<label id="newaddlabel"><input type="radio" id="newadd" value="two" name="optradio"> New Address</label>
								<div class="pull-right data" style="display: none;">
<!-- 									<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" class="btn btn-primary " id="ckaddcont">Pre</a> -->
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" onclick="proceed('newaddress');" class="btn btn-primary" id="newaddressnbtn">Next</a>
								</div>
								<div class="space"></div>
								<div id="newaddtextarea" style="padding-left: 10px;display: none;"><textarea id="newatxtddress" rows="7" cols="100"></textarea></div>

							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">3. Order Summary <label id="prodCount">0</label> items Total: Rs.<label id="monylabel">0.0</label></h4>
				</div>
				<div id="collapseThree" class="panel-collapse collapse">
					<div class="panel-body">
						<div class="container cheight" style="width: 100%;">
							<table class="table table-striped" cellspacing="0" cellpadding="0">
								<thead class="hidden-xs">
									<tr>
										<th class="cimg">Image</th>
										<th class="cname">Name</th>
										<th class="csize">Size</th>
										<th class="cqty">Qty</th>
										<th class="cprice">Price</th>
										<th class="cdelete">Delete</th>
									</tr>
								</thead>
								<tbody id="appendProducttoCheckoutCart">

							    </tbody>
							</table>
						</div>
						<div id="totalpurchaseOnCheckout" class="totaldiv">
								
							</div>
							<input type="hidden" name="txttotalpurchaseOnCheckoutHidden" id="totalpurchaseOnCheckoutHidden" value="">
						<div class="pull-right">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" class="btn btn-primary" id="ckaddcont">Pre</a>
							<a data-toggle="" data-parent="#accordion" href="#collapseThree" class="btn btn-primary" onclick="conformOrder();" id="conformOrder">Conform Order</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<script type="text/javascript" src="js/myjs/checkout.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$("input[type='radio']").click(function() {
				var radioValue = $("input[name='optradio']:checked").val();
				if (radioValue == "one") {
					$(".data").hide();
					$(".sameadd").show();
				} else {
					$(".sameadd").hide();
					$(".data").show();

				}
			});
		});
	</script>
</body>
</html>
