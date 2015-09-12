/**
 * 
 */


$(document).ready(function(){
	
	var contentState = $.session.get('contentState');
	if(contentState !=null && contentState !="")
		{
			$("#dashboard").hide();
			$("#loadpagecontent").load(contentState+".jsp");
		}
	
	
	var userType = $.session.get('userType');
	if(userType == "customer")
		{
			$("#custOrderPanel").show(); // -- not needed for shopkeeper
		}
	
	if(userType == "supplier")
		{
//			alert("PPP userType : "+userType);
			$("#custOrderPanel").hide(); // -- not needed for shopkeeper
			
			var loginData = $.session.get('loginData');
			var sessionData = JSON.parse(loginData);
			var supplierKey = sessionData.key;
			
			shopProfileDisplay(supplierKey);
		}
	
});

// *************************************************************************************

function loadProfileMenu(id)
{
	var idofpage = $(id).attr("id");
	$("#loadpagecontent").load(idofpage+".jsp");
	$.session.set('contentState', idofpage);
	
	$("#dashboard").hide(); // -- hide dashboard after profile click,to avoid mixture of profile and dashboard 
	
	if (idofpage == "personalDetails" || idofpage == "addresses")
	{
		var loginData = $.session.get('loginData');
	//		alert("loginData   "+JSON.stringify(loginData));
		var userType = $.session.get('userType');
	
		if (loginData != null)
		{
			var sessionData = JSON.parse(loginData);
	
			if (userType == "customer")
			{
				if (idofpage == "personalDetails")
				{
					var firstName = sessionData.firstName;
					var lastName = sessionData.lastName;
					var phone = sessionData.phone;
					var emailId = sessionData.emailId;
					
					alert(firstName+"  "+lastName+"  "+phone+"  "+emailId);
					
					$("#firstNameSave").val(firstName);
					$("#lastNameSave").val(lastName);
					$("#mobileNoSave").val(phone);
					$("#emailSave").val(emailId);
				}
				else if (idofpage == "addresses")
				{
					var address = sessionData.address;
					var address2 = sessionData.address2;
					var street = sessionData.street;
					var state = sessionData.state;
					var city = sessionData.city;
					var pincode = sessionData.pincode;
					
					$("#address1Save").val(address);
					$("#address2Save").val(address2);
					$("#streetSave").val(street);
	//					document.getElementById("custState").innerHTML = '<option selected>'+state+'</option>';
					$("#citySave").val(city);
					$("#pincodeSave").val(pincode);
				}
				
			}
	
		}

}
}

//*************************************************************************************


//*************************************************************************************

function shopProfileDisplay(supplierKey)
{
	console.log("supplierKey : " + supplierKey);
	
	objhandleRequest.handleShopProfileDisplay(supplierKey);
}


//*************************************************************************************