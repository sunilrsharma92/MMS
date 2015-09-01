/**
 * 
 */

function loadProfileMenu(id)
{
	var idofpage = $(id).attr("id");
	$("#loadpagecontent").load(idofpage+".jsp");
	
	

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
					
					$("#custFirstName1").val(firstName);
					$("#custLastName").val(lastName);
					$("#custMobNo").val(phone);
					$("#custEmail").val(emailId);
				}
				else if (idofpage == "addresses")
				{
					var address = sessionData.address;
					var address2 = sessionData.address2;
					var street = sessionData.street;
					var state = sessionData.state;
					var city = sessionData.city;
					var pincode = sessionData.pincode;
					
					$("#custAddress1").val(address);
					$("#custAddress2").val(address2);
					$("#streetName").val(street);
//					document.getElementById("custState").innerHTML = '<option selected>'+state+'</option>';
					$("#custCity").val(city);
					$("#custPincode").val(pincode);
				}
				
			}

			if (userType == "supplier")
			{
				
			}
		}

	}
}