function handleRequest()
{
	this.handleCategoryRequest = handleCategoryRequest;
	// this.handleSubCategoryRequest = handleSubCategoryRequest;
//	this.handleShopProfileDetails = handleShopProfileDetails;
	this.handleUserDetailsSave = handleUserDetailsSave;
	this.handleShopProfileDisplay = handleShopProfileDisplay;
	this.handleLogin = handleLogin;
	this.handleRegisteration = handleRegisteration;
	this.handleResetPassword = handleResetPassword;
	// this.handleUsernameAvailCust = handleUsernameAvailCust;
	this.handleForgotPwd = handleForgotPwd;
	this.handledisplaySelectedProduct = handledisplaySelectedProduct;
	this.handledisplayProductinCart = handledisplayProductinCart;
	this.searchProduct = searchProduct;

	// ****** This function is used to get all main product category ******//
	function handleCategoryRequest()
	{
		try
		{
			var strmainCategory = {};
			strmainCategory.command = 1000;

			var strjsonMsgForstrmainCategory = JSON.stringify(strmainCategory);
			// alert("handleRequest handleCategoryRequest
			// strjsonMsgForstrmainCategory : "+strjsonMsgForstrmainCategory);
			console.log("handleRequest     handleCategoryRequest     strjsonMsgForstrmainCategory : " + strjsonMsgForstrmainCategory);
			handleAllListResponse(strjsonMsgForstrmainCategory);

		}
		catch (e)
		{
			console.log("handleRequest     handleCategoryRequest     Exception :: " + e);
		}
	}

	// -- old method,currently not in use
	/*function handleShopProfileDetails(firstName, lastName, address, city, state, pincode)
	{
		try
		{
			var strShopProfile = {};
			strShopProfile.firstName = firstName;
			strShopProfile.lastName = lastName;
			strShopProfile.address = address;
			strShopProfile.city = city;
			strShopProfile.state = state;
			strShopProfile.pincode = parseInt(pincode);
			strShopProfile.command = 1001;

			var strjsonMsgForShopProfile = JSON.stringify(strShopProfile);
			console.log("handleRequest     handleShopProfileDetails     strjsonMsgForstrShopProfile : " + strjsonMsgForShopProfile);
			handleAllListResponse(strjsonMsgForShopProfile);

		}
		catch (e)
		{
			console.log("handleRequest     handleShopProfileDetails     Exception :: " + e);
		}
	}*/

	function handleUserDetailsSave(firstName, lastName, mobileNo, email, address1, address2, state, city, street, pincode, userType, key) {
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
			console.log("handleRequest     handleUserDetailsSave     strUserDetails : "+ strjsonMsgForUserDetails);
			handleAllListResponse(strjsonMsgForUserDetails);

		}
		catch (e)
		{
			console.log("handleRequest     handleCustomerDetailsSave     Exception :: " + e);
		}
	}

	// -- customer/shopKeeper login verification
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
			console.log("handleRequest handleLogin Exception :: " + e)
		}
	}

	// -- Customer/ShopKeeper sign up and email verification

	function handleRegisteration(passSignUp, mobileKey, emailKey, userType)
	{
		try
		{
			var signUp = {};
			signUp.passSignUp = passSignUp;
//			signUp.firstNameSignUp = firstNameSignUp;
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
			console.log("handleRequest handleRegisteration Exception :: " + e)
		}
	}

	function handleResetPassword(password1, userType, email)
	{
		try
		{
			var resetPwd = {};
//			changePwd.oldPwd = oldPwd;
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
			console.log("handleRequest handleForgotPwd Exception :: " + e)
		}

	}
	
	// -- show shop profile for particular supplier
	function handleShopProfileDisplay(supplierKey)
	{
		try
		{
			var strShopProfileDisplay = {};
			strShopProfileDisplay.supplierKey = parseInt(supplierKey);
			strShopProfileDisplay.command = 1010;
			// alert('haha');
			var strJsonMsgForShopProfile = JSON.stringify(strShopProfileDisplay);
			console.log("handleRequest     handleShopProfileDisplay     strJsonMsgForShopProfile : " + strJsonMsgForShopProfile);

			handleAllListResponse(strJsonMsgForShopProfile);
		}
		catch (e)
		{
			console.log("handleRequest handleShopProfileDisplay Exception :: " + e)
		}
	}
	
	function handledisplaySelectedProduct(mainCategoryID, subCategoryID)
	{
		try
		{
			var strSelectedProduct = {};
			strSelectedProduct.mainCategoryID = parseInt(mainCategoryID);
			strSelectedProduct.subCategoryID = parseInt(subCategoryID);
			strSelectedProduct.command = 1003;

			var strjsonMsgForSelectedProduct = JSON.stringify(strSelectedProduct);

			handleAllListResponse(strjsonMsgForSelectedProduct);

		}
		catch (e)
		{
			console.log("handleRequest     handledisplaySelectedProduct     Exception :: " + e);
		}
	}

	function handledisplayProductinCart(productArray)
	{
		try
		{
			var strProductinCart = {};
			strProductinCart.productArray = productArray;
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

	function searchProduct(txt)
	{
		try
		{
			var strSearchProduct = {};
			strSearchProduct.txt = txt;
			strSearchProduct.command = 1006;

			var strjsonMsgForstrSearchProduct = JSON.stringify(strSearchProduct);
			console.log("handleRequest     searchProduct  : " + strjsonMsgForstrSearchProduct);
			handleAllListResponse(strjsonMsgForstrSearchProduct);

		}
		catch (e)
		{
			console.log("handleRequest     handledisplaySelectedProduct     Exception :: " + e);
		}
	}

}
