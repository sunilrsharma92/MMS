function handleRequest()
{
	this.handleCategoryRequest = handleCategoryRequest;
	this.handleAllProductForAutoCompleteRequest = handleAllProductForAutoCompleteRequest;
	this.handleUserDetailsSave = handleUserDetailsSave;
	this.handleShopProfileDisplay = handleShopProfileDisplay;
	this.handleLogin = handleLogin;
	this.handleRegisteration = handleRegisteration;
	this.handleResetPassword = handleResetPassword;
	this.handleForgotPwd = handleForgotPwd;
	this.handledisplaySelectedProduct = handledisplaySelectedProduct;
	this.handledisplayProductinCart = handledisplayProductinCart;
	this.searchProduct = searchProduct;
	this.getUserAddressfromShippingaddress = getUserAddressfromShippingaddress;
	this.handleUpdateProfilePic = handleUpdateProfilePic;
	this.aadToCartForLoggedUser = aadToCartForLoggedUser;
	this.removeFromCart = removeFromCart;
	this.conformOder = conformOder;
	this.getOrdersHistory = getOrdersHistory;
	this.emailOrderDetails = emailOrderDetails;
	this.getAllOrders = getAllOrders;
	this.acceptCancleOrder = acceptCancleOrder;
	
	function handleCategoryRequest()
	{
		try
		{
			var strmainCategory = {};
			strmainCategory.command = 1000;
			var strjsonMsgForstrmainCategory = JSON.stringify(strmainCategory);
			console.log("handleRequest     handleCategoryRequest     strjsonMsgForstrmainCategory : " + strjsonMsgForstrmainCategory);
			handleAllListResponse(strjsonMsgForstrmainCategory);
		}
		catch (e)
		{
			console.log("handleRequest     handleCategoryRequest     Exception :: " + e);
		}
	}
	function handleAllProductForAutoCompleteRequest(action)
	{
		try
		{
			var strProduct = {};
			strProduct.action = action;
			strProduct.command = 1002;
			var strjsonMsgForstrstrProduct = JSON.stringify(strProduct);
			console.log("handleRequest     handleCategoryRequest     strjsonMsgForstrstrProduct : " + strjsonMsgForstrstrProduct);
			handleAllListResponse(strjsonMsgForstrstrProduct);
		}
		catch (e)
		{
			console.log("handleRequest     handleCategoryRequest     Exception :: " + e);
		}
	}
	function handleUserDetailsSave(firstName, lastName, mobileNo, email, address1, address2, state, city, street, pincode, userType, key)
	{
		try
		{
			var strUserDetails = {};
			strUserDetails.firstName = firstName;
			strUserDetails.lastName = lastName;
			strUserDetails.mobileNo = mobileNo;
			strUserDetails.email = email;
			strUserDetails.address1 = address1;
			strUserDetails.address2 = address2;
			strUserDetails.state = state;
			strUserDetails.city = city;
			strUserDetails.street = street;
			strUserDetails.pincode = parseInt(pincode);
			strUserDetails.userType = userType;
			strUserDetails.key = +key;
			strUserDetails.command = 1055;
			var strjsonMsgForUserDetails = JSON.stringify(strUserDetails);
			console.log("handleRequest     handleUserDetailsSave     strUserDetails : " + strjsonMsgForUserDetails);
			handleAllListResponse(strjsonMsgForUserDetails);
		}
		catch (e)
		{
			console.log("handleRequest     handleCustomerDetailsSave     Exception :: " + e);
		}
	}
	function handleLogin(emailLogin, passLogin, userType, otpLogin)
	{
		try
		{
			var login = {};
			login.emailLogin = emailLogin;
			login.passLogin = passLogin;
			login.userType = userType;
			login.otpLogin = otpLogin;
			login.command = 1051;
			var strJsonMsgForLogin = JSON.stringify(login);
			console.log("handleRequest     handleLogin     strJsonMsgForLogin : " + strJsonMsgForLogin);
			handleAllListResponse(strJsonMsgForLogin);
		}
		catch (e)
		{
			console.log("handleRequest handleLogin Exception :: " + e);
		}
	}
	function handleRegisteration(passSignUp, mobileKey, emailKey, userType)
	{
		try
		{
			var signUp = {};
			signUp.passSignUp = passSignUp;
			signUp.mobileKey = mobileKey;
			signUp.emailKey = emailKey;
			signUp.userType = userType;
			signUp.command = 1052;
			var strJsonMsgForSignUp = JSON.stringify(signUp);
			console.log("handleRequest     handleRegisteration     strJsonMsgForSignUp : " + strJsonMsgForSignUp);
			handleAllListResponse(strJsonMsgForSignUp);
		}
		catch (e)
		{
			console.log("handleRequest handleRegisteration Exception :: " + e);
		}
	}
	function handleResetPassword(password1, userType, email)
	{
		try
		{
			var resetPwd = {};
			resetPwd.pwd = password1;
			resetPwd.email = email;
			resetPwd.userType = userType;
			resetPwd.command = 1056;
			var strJsonMsgForResetPwd = JSON.stringify(resetPwd);
			handleAllListResponse(strJsonMsgForResetPwd);
			console.log("handleRequest     handleResetPassword     strJsonMsgForResetPwd : " + strJsonMsgForResetPwd);
		}
		catch (e)
		{
			console.log("handleRequest handleResetPassword Exception ::" + e);
		}
	}
	function handleForgotPwd(emailForgotPwd, userType)
	{
		try
		{
			var forgotPwd = {};
			forgotPwd.emailForgotPwd = emailForgotPwd;
			forgotPwd.userType = userType;
			forgotPwd.command = 1054;
			var strJsonMsgForForgotPwd = JSON.stringify(forgotPwd);
			console.log("handleRequest     handleForgotPwd     strJsonMsgForForgotPwd : " + strJsonMsgForForgotPwd);
			handleAllListResponse(strJsonMsgForForgotPwd);
		}
		catch (e)
		{
			console.log("handleRequest handleForgotPwd Exception :: " + e);
		}
	}
	function handleShopProfileDisplay(supplierKey)
	{
		try
		{
			var strShopProfileDisplay = {};
			strShopProfileDisplay.supplierKey = parseInt(supplierKey);
			strShopProfileDisplay.command = 1010;
			var strJsonMsgForShopProfile = JSON.stringify(strShopProfileDisplay);
			console.log("handleRequest     handleShopProfileDisplay     strJsonMsgForShopProfile : " + strJsonMsgForShopProfile);
			handleAllListResponse(strJsonMsgForShopProfile);
		}
		catch (e)
		{
			console.log("handleRequest handleShopProfileDisplay Exception :: " + e);
		}
	}
	function handledisplaySelectedProduct(mainCategoryID, subCategoryID, userid, userType, action)
	{
		try
		{
			var strSelectedProduct = {};
			strSelectedProduct.mainCategoryID = parseInt(mainCategoryID);
			strSelectedProduct.subCategoryID = parseInt(subCategoryID);
			strSelectedProduct.userid = parseInt(userid);
			strSelectedProduct.userType = userType;
			strSelectedProduct.action = action;
			strSelectedProduct.command = 1003;
			var strjsonMsgForSelectedProduct = JSON.stringify(strSelectedProduct);
			handleAllListResponse(strjsonMsgForSelectedProduct);
			console.log("handleRequest     handledisplaySelectedProduct     strjsonMsgForSelectedProduct :: " + strjsonMsgForSelectedProduct);
		}
		catch (e)
		{
			console.log("handleRequest     handledisplaySelectedProduct     Exception :: " + e);
		}
	}
	function handledisplayProductinCart(productArray, action, userid, userType)
	{
		try
		{
			var strProductinCart = {};
			strProductinCart.productArray = productArray;
			strProductinCart.action = action;
			strProductinCart.userid = +userid;
			strProductinCart.userType = userType;
			strProductinCart.command = 1005;
			var strjsonMsgForstrProductinCart = JSON.stringify(strProductinCart);
			console.log("handleRequest     handledisplaySelectedProduct     handledisplayProductinCart : " + strjsonMsgForstrProductinCart);
			handleAllListResponse(strjsonMsgForstrProductinCart);
		}
		catch (e)
		{
			console.log("handleRequest     handledisplaySelectedProduct     Exception :: " + e);
		}
	}
	function searchProduct(txt, action, shopid, userid, userType)
	{
		try
		{
			var strSearchProduct = {};
			strSearchProduct.txt = txt;
			strSearchProduct.action = action;
			strSearchProduct.shopid = +shopid;
			strSearchProduct.userid = +userid;
			strSearchProduct.userType = userType;
			strSearchProduct.command = 1006;
			var strjsonMsgForstrSearchProduct = JSON.stringify(strSearchProduct);
			console.log("handleRequest     searchProduct/Shop  : " + strjsonMsgForstrSearchProduct);
			handleAllListResponse(strjsonMsgForstrSearchProduct);
		}
		catch (e)
		{
			console.log("handleRequest     handledisplaySelectedProduct     Exception :: " + e);
		}
	}
	function getUserAddressfromShippingaddress(key, userType)
	{
		try
		{
			var strSearchAddress = {};
			strSearchAddress.key = +key;
			strSearchAddress.userType = userType;
			strSearchAddress.command = 1007;
			var strjsonMsgForstrSearchAddress = JSON.stringify(strSearchAddress);
			console.log("handleRequest     getUserAddressfromShippingaddress  : " + strjsonMsgForstrSearchAddress);
			handleAllListResponse(strjsonMsgForstrSearchAddress);
		}
		catch (e)
		{
			console.log("handleRequest     handledisplaySelectedProduct     Exception :: " + e);
		}
	}
	function handleUpdateProfilePic(profileImg, key, userType, email)
	{
		try
		{
			var strUpdateProfilePic = {};
			strUpdateProfilePic.key = +key;
			strUpdateProfilePic.userType = userType;
			strUpdateProfilePic.profileImg = profileImg;
			strUpdateProfilePic.email = email;
			strUpdateProfilePic.command = 1057;
			var strjsonMsgForUpdateProfilePic = JSON.stringify(strUpdateProfilePic);
			console.log("handleRequest     getUserAddressfromShippingaddress  : " + strjsonMsgForUpdateProfilePic);
			handleAllListResponse(strjsonMsgForUpdateProfilePic);
		}
		catch (e)
		{
			console.log("handleRequest     handleUpdateProfilePic     Exception :: " + e);
		}
	}
	function aadToCartForLoggedUser(userid, userType, productid, authorisedUser, quantity, action, shopid)
	{
		try
		{
			var straadToCart = {};
			straadToCart.userid = +userid;
			straadToCart.shopid = +shopid;
			straadToCart.userType = userType;
			straadToCart.productid = +productid;
			straadToCart.quantity = parseInt(quantity);
			straadToCart.action = action;
			straadToCart.authoriseduser = authorisedUser;
			straadToCart.command = 1011;
			var strjsonMsgForaadToCart = JSON.stringify(straadToCart);
			console.log("handleRequest     aadToCartForLoggedUser  : " + strjsonMsgForaadToCart);
			handleAllListResponse(strjsonMsgForaadToCart);
		}
		catch (e)
		{
			console.log("handleRequest     aadToCartForLoggedUser     Exception :: " + e);
		}
	}
	function removeFromCart(userid, userType, productid, authorisedUser)
	{
		try
		{
			var strremoveFromCart = {};
			strremoveFromCart.userid = +userid;
			strremoveFromCart.userType = userType;
			strremoveFromCart.productid = +productid;
			strremoveFromCart.authoriseduser = authorisedUser;
			strremoveFromCart.command = 1012;
			var strjsonMsgForremoveFromCart = JSON.stringify(strremoveFromCart);
			console.log("handleRequest     removeFromCartForLoggedUser  : " + strjsonMsgForremoveFromCart);
			handleAllListResponse(strjsonMsgForremoveFromCart);
		}
		catch (e)
		{
			console.log("handleRequest     removeFromCartForLoggedUser     Exception :: " + e);
		}
	}
	function conformOder(userid, userType, newAddress)
	{
		try
		{
			var strconform = {};
			strconform.userid = +userid;
			strconform.userType = userType;
			strconform.newAddress = newAddress;
			strconform.command = 1013;
			var strjsonMsgForstrconform = JSON.stringify(strconform);
			console.log("handleRequest     conformOder  strjsonMsgForstrconform  : " + strjsonMsgForstrconform);
			handleAllListResponse(strjsonMsgForstrconform);
		}
		catch (e)
		{
			console.log("handleRequest     conformOder     Exception :: " + e);
		}
	}
	function getOrdersHistory(userid, userType, command, orderid)
	{
		try
		{
			var strconform = {};
			strconform.userid = +userid;
			strconform.userType = userType;
			strconform.command = +command;
			if(command == 1015)
			{
				strconform.orderid = orderid;
			}
			var strjsonMsgForstrconform = JSON.stringify(strconform);
			console.log("handleRequest     getOrdersHistory  strjsonMsgForstrconform : " + strjsonMsgForstrconform);
			handleAllListResponse(strjsonMsgForstrconform);
		}
		catch (e)
		{
			console.log("handleRequest     getOrdersHistory     Exception :: " + e);
		}
	}
	function getAllOrders()
	{
		try
		{
			var strconform = {};
			strconform.command = 1020;
			var strjsonMsgForstrconform = JSON.stringify(strconform);
			console.log("handleRequest     getAllOrders  command : "+strjsonMsgForstrconform);
			handleAllListResponse(strjsonMsgForstrconform);
		}
		catch (e)
		{
			console.log("handleRequest     getAllOrders     Exception :: " + e);
		}
	}
	function emailOrderDetails(purchaseTemplet, customerEmailid, userType, total, phone, name, orderid)
	{
		try
		{
			var rahul = "9970181137";
			var sunil = "9029813369";
			var deva = "8976605993";
			
			var shopyNumber = rahul+"#"+sunil+"#"+deva;
			
			var stremailOrderDetails = {};
			stremailOrderDetails.purchaseTemplet = purchaseTemplet;
			stremailOrderDetails.userType = userType;
			stremailOrderDetails.email = customerEmailid;
			stremailOrderDetails.total = ""+total;
			stremailOrderDetails.phone = phone;
			stremailOrderDetails.name = name;
			stremailOrderDetails.orderid = orderid;
			stremailOrderDetails.shopyNumber = shopyNumber;
			stremailOrderDetails.command = 1016;
			
			var strjsonMsgForstremailOrderDetails = JSON.stringify(stremailOrderDetails);
			console.log("handleRequest     emailOrderDetails  strjsonMsgForstremailOrderDetails : " + strjsonMsgForstremailOrderDetails);
			handleAllListResponse(strjsonMsgForstremailOrderDetails);
		}
		catch (e)
		{
			console.log("handleRequest     emailOrderDetails     Exception :: " + e);
		}
	}
	function acceptCancleOrder(action, userData)
	{
		try
		{
			var stracceptCancleOrder = {};
			stracceptCancleOrder.command = 1021;
			stracceptCancleOrder.action = action;
			stracceptCancleOrder.userData = userData;
			
			var strjsonMsgForstracceptCancleOrder = JSON.stringify(stracceptCancleOrder);
			console.log("handleRequest     acceptCancleOrder  strjsonMsgForstracceptCancleOrder : " + strjsonMsgForstracceptCancleOrder);
			handleAllListResponse(strjsonMsgForstracceptCancleOrder);
		}
		catch (e)
		{
			console.log("handleRequest     acceptCancleOrder     Exception :: " + e);
		}
	}
}