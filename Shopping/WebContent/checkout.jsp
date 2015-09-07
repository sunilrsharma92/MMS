<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Checkout</title>
<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> -->
<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css"> -->
<!-- <link rel="stylesheet" type="text/css" href="css/style1.css"> -->
<!-- <link rel="stylesheet" type="text/css" href="css/bootstrap.css"> -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> -->
<!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> -->

<style type="text/css">
	.bs-example {
		margin: 20px;
	}
</style>
</head>
<body>
	<div class="container">
		<h4>Checking out</h4>
		<div class="panel-group" id="accordion">

			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
						<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">1. Before You place your order!! Sign In</a>
					</h4>
				</div>
				<div id="collapseOne" class="panel-collapse collapse in">
					<div class="panel-body">
						<button class="btn btn-primary" type="button" id="acordionsignin">Sign In</button>
						<button class="btn btn-primary" type="button" id="acordionsignup">Sign Up</button>
						<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" class="btn btn-primary pull-right">Next</a>
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
								<label><input type="radio" id="oldadd" value="one" checked="checked" name="optradio">Same as my Account Address<a href=""> view</a></label>
								<div class="pull-right sameadd " style="display: block;">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" class="btn btn-primary " id="ckaddcont">Pre</a>
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" class="btn btn-primary " id="ckaddcont">Next</a>
								</div>
							</div>
							<div class="radio">
								<label><input type="radio" id="newadd" value="two" name="optradio">New Address</label>
								<div class="pull-right data" style="display: none;">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" class="btn btn-primary " id="ckaddcont">Pre</a>
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" class="btn btn-primary " id="ckaddcont">Next</a>
								</div>
								<table class="data" style="display: none;">
									<tr><td>Address 1:</td><td><input type="text" class="textbox" name="name"></td></tr>
									<tr><td>Address 2:</td><td><input type="text" class="textbox" name="name"></td></tr>
									<tr><td>Street name:</td><td><input type="text" class="textbox" name="name"></td></tr>
									<tr><td>State:</td>										<td>
											<!-- <input type="text" class="textbox" name="name"></td></tr> -->
											<select class="form-control textbox" placeholder="select state">
												<option value="one">Select State</option>
												<option value="one">Andhra Pradesh</option>
												<option value="one">Arunachal Pradesh</option>
												<option value="one">Assam</option>
												<option value="one">Bihar</option>
												<option value="one">Chhattisgarh</option>
												<option value="one">Goa</option>
												<option value="one">Gujarat</option>
												<option value="one">Haryana</option>
												<option value="one">Himachal Pradesh</option>
												<option value="one">Jammu & Kashmir</option>
												<option value="one">Jharkhand</option>
												<option value="one">Karnataka</option>
												<option value="one">Kerala</option>
												<option value="one">Madhya Pradesh</option>
												<option value="one">Maharashtra</option>
												<option value="one">Manipur</option>
												<option value="one">Meghalaya</option>
												<option value="one">Mizoram</option>
												<option value="one">Nagaland</option>
												<option value="one">Odisha</option>
												<option value="one">Punjab</option>
												<option value="one">Rajasthan</option>
												<option value="one">Sikkim</option>
												<option value="one">Tamil Nadu</option>
												<option value="one">Tripura</option>
												<option value="one">Uttarkhand</option>
												<option value="one">Uttar Pradesh</option>
												<option value="one">West Bengal</option>


										</select>
										</td></tr>
									<tr><td>City:</td><td><input type="text" class="textbox" name="name"></td></tr>
									<tr><td>Pincode:</td><td><input type="text" class="textbox" name="name"></td></tr>
									<!-- <tr><td>Email Address:</td><td><input type="text" class="textbox" name="name"></td></tr> -->
									<tr><td></td><td>
											<!-- <button type="button" class="btn btn-primary" id="ckaddcont"> -->
											<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" class="btn btn-primary" id="ckaddcont">Save</a>
										</td>
									</tr>

								</table>

							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">3. Order Summary 1 items Total: Rs.700</h4>
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
								<tbody>
									<tr>
										<td class="cimg">1</td>
										<td class="cname">name</td>
										<td class="csize">10 kg</td>
										<td class="cqty">5</td>
										<td class="cprice">30</td>
										<td align="center"><button type="button" class="btn btn-danger btn-xs">
											<span id="cdel" class="glyphicon glyphicon-remove"></span></button>
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>name</td>
										<td>10 kg</td>
										<td>5</td>
										<td>30</td>
										<td align="center"><button type="button" class="btn btn-danger btn-xs">
												<span id="cdel" class="glyphicon glyphicon-remove"></span></button>
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>name</td>
										<td>10 kg</td>
										<td>5</td>
										<td>30</td>
										<td align="center"><button type="button" class="btn btn-danger btn-xs">
												<span id="cdel" class="glyphicon glyphicon-remove"></span></button>
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>name</td>
										<td>10 kg</td>
										<td>5</td>
										<td>30</td>
										<td align="center"><button type="button" class="btn btn-danger btn-xs">
												<span id="cdel" class="glyphicon glyphicon-remove"></span></button>
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>name</td>
										<td>10 kg</td>
										<td>5</td>
										<td>30</td>
										<td align="center"><button type="button" class="btn btn-danger btn-xs">
												<span id="cdel" class="glyphicon glyphicon-remove"></span></button>
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>name</td>
										<td>10 kg</td>
										<td>5</td>
										<td>30</td>
										<td align="center"><button type="button" class="btn btn-danger btn-xs">
												<span id="cdel" class="glyphicon glyphicon-remove"></span></button>
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>name</td>
										<td>10 kg</td>
										<td>5</td>
										<td>30</td>
										<td align="center"><button type="button" class="btn btn-danger btn-xs">
												<span id="cdel" class="glyphicon glyphicon-remove"></span></button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="totaldiv">
							<span class="tlbprce">Total Price :</span> 
							<span class="totalprize"><strong> Rs 0</strong> </span> 
							<span class="usave">You save :</span> 
							<span class="rups"><strong>	Rs 0</strong> </span>
						</div>
						<div class="pull-right">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" class="btn btn-primary " id="ckaddcont">Pre</a>
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" class="btn btn-primary " id="ckaddcont">Next</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<script type="text/javascript">
		$(document).ready(function() {
			$("input[type='radio']").click(function() {
				var radioValue = $("input[name='optradio']:checked").val();
				// alert("radio selected"  +radioValue);
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
