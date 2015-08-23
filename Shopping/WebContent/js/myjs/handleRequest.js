function handleRequest() {
	this.handleCategoryRequest = handleCategoryRequest;
	// this.handleSubCategoryRequest = handleSubCategoryRequest;
	this.handleShopProfileDetails = handleShopProfileDetails;
	this.handleCustomerDetailsSave = handleCustomerDetailsSave;
	this.handleShopProfileDisplay = handleShopProfileDisplay;
	this.handleLogin = handleLogin;
	this.handleSignUp = handleSignUp;
	// this.handleUsernameAvailCust = handleUsernameAvailCust;
	this.handleForgotPwd = handleForgotPwd;
	this.handledisplaySelectedProduct = handledisplaySelectedProduct;
	this.handledisplayProductinCart = handledisplayProductinCart;
	this.searchProduct = searchProduct;

	// ****** This function is used to get all main product category ******//
	function handleCategoryRequest() {
		try {
			var strmainCategory = {};
			strmainCategory.command = 1000;

			var strjsonMsgForstrmainCategory = JSON.stringify(strmainCategory);
			// alert("handleRequest handleCategoryRequest
			// strjsonMsgForstrmainCategory : "+strjsonMsgForstrmainCategory);
			console
					.log("handleRequest     handleCategoryRequest     strjsonMsgForstrmainCategory : "
							+ strjsonMsgForstrmainCategory);
			handleAllListResponse(strjsonMsgForstrmainCategory);

		} catch (e) {
			console
					.log("handleRequest     handleCategoryRequest     Exception :: "
							+ e);
		}
	}

	// ****** This function is used to get all sub product category ******//
	// function handleSubCategoryRequest()
	// {
	// try
	// {
	// var strsubCategory = {};
	// strsubCategory.command = 1001;
	//
	// var strjsonMsgForstrsubCategory = JSON.stringify(strsubCategory);
	// // alert("handleRequest handleSubCategoryRequest
	// strjsonMsgForstrsubCategory : "+strjsonMsgForstrsubCategory);
	// handleAllListResponse(strjsonMsgForstrsubCategory);
	//            
	// }
	// catch (e)
	// {
	// console.log("handleRequest handleSubCategoryRequest Exception :: "+e);
	// }
	// }

	function handleShopProfileDetails(firstName, lastName, address, city,
			state, pincode) {
		try {
			var strShopProfile = {};
			strShopProfile.firstName = firstName;
			strShopProfile.lastName = lastName;
			strShopProfile.address = address;
			strShopProfile.city = city;
			strShopProfile.state = state;
			strShopProfile.pincode = parseInt(pincode);
			strShopProfile.command = 1001;

			var strjsonMsgForShopProfile = JSON.stringify(strShopProfile);
			// alert("handleRequest handleCategoryRequest
			// strjsonMsgForstrShopProfile : "+strjsonMsgForShopProfile);
			console
					.log("handleRequest     handleShopProfileDetails     strjsonMsgForstrShopProfile : "
							+ strjsonMsgForShopProfile);
			handleAllListResponse(strjsonMsgForShopProfile);

		} catch (e) {
			console
					.log("handleRequest     handleShopProfileDetails     Exception :: "
							+ e);
		}
	}

	function handleCustomerDetailsSave(custFirstName, custLastName, custMobNo,
			custEmail, custAddress1, custAddress2, custState, custCity,
			custPincode) {
		try {
			var strCustDetails = {};
			strCustDetails.custFirstName = custFirstName;
			strCustDetails.custLastName = custLastName;
			strCustDetails.custMobNo = custMobNo;
			strCustDetails.custEmail = custEmail;
			strCustDetails.custAddress1 = custAddress1;
			strCustDetails.custAddress2 = custAddress2;
			strCustDetails.custState = custState;
			strCustDetails.custCity = custCity;
			strCustDetails.custPincode = parseInt(custPincode);
			strCustDetails.command = 1055;

			var strjsonMsgForCustDetails = JSON.stringify(strCustDetails);
			console
					.log("handleRequest     handleCustomerDetailsSave     strCustDetails : "
							+ strjsonMsgForCustDetails);
			handleAllListResponse(strjsonMsgForCustDetails);

		} catch (e) {
			console
					.log("handleRequest     handleCustomerDetailsSave     Exception :: "
							+ e);
		}
	}

	// -- show shop profile for particular supplier
	function handleShopProfileDisplay(supplierKey) {
		try {
			var strShopProfileDisplay = {};
			strShopProfileDisplay.supplierKey = parseInt(supplierKey);
			strShopProfileDisplay.command = 1010;
			// alert('haha');
			var strJsonMsgForShopProfile = JSON
					.stringify(strShopProfileDisplay);
			console
					.log("handleRequest     handleShopProfileDisplay     strJsonMsgForShopProfile : "
							+ strJsonMsgForShopProfile);

			handleAllListResponse(strJsonMsgForShopProfile);
		} catch (e) {
			console.log("handleRequest handleShopProfileDisplay Exception :: "
					+ e)
		}
	}

	// -- customer/shopKeeper login verification
	function handleLogin(emailLogin, passLogin, userType, otpLogin) {
		try {
			var login = {};
			login.emailLogin = emailLogin;
			login.passLogin = passLogin;
			login.userType = userType;
			login.otpLogin = otpLogin;
			login.command = 1051;

			var strJsonMsgForLogin = JSON.stringify(login);
			console
					.log("handleRequest     handleLogin     strJsonMsgForLogin : "
							+ strJsonMsgForLogin);

			handleAllListResponse(strJsonMsgForLogin);
		} catch (e) {
			console.log("handleRequest handleLogin Exception :: " + e)
		}
	}

	// -- Customer/ShopKeeper sign up and email verification
	function handleSignUp(passSignUp, mobileKey, emailKey, userType) {
		try {
			var signUp = {};
			signUp.passSignUp = passSignUp;
			signUp.mobileKey = mobileKey;
			signUp.emailKey = emailKey;
			signUp.userType = userType;
			signUp.command = 1052;

			var strJsonMsgForSignUp = JSON.stringify(signUp);
			console
					.log("handleRequest     handleSignUp     strJsonMsgForSignUp : "
							+ strJsonMsgForSignUp);

			handleAllListResponse(strJsonMsgForSignUp);
		} catch (e) {
			console.log("handleRequest handleSignUp Exception :: " + e)
		}
	}

	/*
	 * function handleUsernameAvailCust(usernameSignUp) { try { var
	 * checkUsernameAvailCust = {}; checkUsernameAvailCust.usernameSignUp =
	 * usernameSignUp; checkUsernameAvailCust.command = 1053;
	 * 
	 * var strJsonMsgForCustUsernameAvail =
	 * JSON.stringify(checkUsernameAvailCust); console.log("handleRequest
	 * handleUsernameAvailCust strJsonMsgForCustUsernameAvail :
	 * "+strJsonMsgForCustUsernameAvail);
	 * 
	 * handleAllListResponse(strJsonMsgForCustUsernameAvail); } catch(e) {
	 * console.log("handleRequest handleUsernameAvailCust Exception :: "+e) } }
	 */

	function handleForgotPwd(emailForgotPwd, userType) {
		try {
			var forgotPwd = {};
			// forgotPwdCust.usernameForgotPwd = usernameForgotPwd;
			forgotPwd.emailForgotPwd = emailForgotPwd;
			forgotPwd.userType = userType;
			forgotPwd.command = 1054;

			var strJsonMsgForForgotPwd = JSON.stringify(forgotPwd);
			console
					.log("handleRequest     handleForgotPwd     strJsonMsgForForgotPwd : "
							+ strJsonMsgForForgotPwd);

			handleAllListResponse(strJsonMsgForForgotPwd);

		} catch (e) {
			console.log("handleRequest handleForgotPwd Exception :: " + e)
		}

	}

	function handledisplaySelectedProduct(mainCategoryID, subCategoryID) {
		try {
			var strSelectedProduct = {};
			strSelectedProduct.mainCategoryID = parseInt(mainCategoryID);
			strSelectedProduct.subCategoryID = parseInt(subCategoryID);
			strSelectedProduct.command = 1003;

			var strjsonMsgForSelectedProduct = JSON
					.stringify(strSelectedProduct);
			// alert("handleRequest handleCategoryRequest
			// strjsonMsgForstrSelectedProduct :
			// "+strjsonMsgForSelectedProduct);
			// console.log("handleRequest handledisplaySelectedProduct
			// strjsonMsgForstrSelectedProduct :
			// "+strjsonMsgForSelectedProduct);
			handleAllListResponse(strjsonMsgForSelectedProduct);

		} catch (e) {
			console
					.log("handleRequest     handledisplaySelectedProduct     Exception :: "
							+ e);
		}
	}

	function handledisplayProductinCart(productArray) {
		// console.log("productArray : "+JSON.stringify(productArray));
		//    			   
		try {
			var strProductinCart = {};
			strProductinCart.productArray = productArray;
			strProductinCart.command = 1005;
			//    		   
			var strjsonMsgForstrProductinCart = JSON
					.stringify(strProductinCart);
			// // alert("handleRequest handledisplayProductinCart :
			// "+strjsonMsgForstrProductinCart);
			console
					.log("handleRequest     handledisplaySelectedProduct     handledisplayProductinCart : "
							+ strjsonMsgForstrProductinCart);
			handleAllListResponse(strjsonMsgForstrProductinCart);

		} catch (e) {
			console
					.log("handleRequest     handledisplaySelectedProduct     Exception :: "
							+ e);
		}
	}

	function searchProduct(txt) {
		// console.log("productArray : "+JSON.stringify(productArray));
		//    			   
		try {
			var strSearchProduct = {};
			strSearchProduct.txt = txt;
			strSearchProduct.command = 1006;
			//    		   
			var strjsonMsgForstrSearchProduct = JSON
					.stringify(strSearchProduct);
			console.log("handleRequest     searchProduct  : "
					+ strjsonMsgForstrSearchProduct);
			handleAllListResponse(strjsonMsgForstrSearchProduct);

		} catch (e) {
			console
					.log("handleRequest     handledisplaySelectedProduct     Exception :: "
							+ e);
		}
	}

	

}
