/**
 * 
 */

function loadProfileMenu(id)
{
	var idofpage = $(id).attr("id");
	$("#loadpagecontent").load(idofpage+".jsp");
	
	

		if (idofpage == "customerPage" || idofpage == "addresses")
		{
		var loginData = $.session.get('loginData');
//		alert("loginData   "+JSON.stringify(loginData));
		var userType = $.session.get('userType');

		if (loginData != null)
		{
			var sessionData = JSON.parse(loginData);

			if (userType == "customer")
			{
				if (idofpage == "customerPage")
				{
					var custFirstName = sessionData.custFirstName;
					var custLastName = sessionData.custLastName;
					var custMobNo = sessionData.custPhone;
					var custEmail = sessionData.custEmailId;
					
//					alert(custFirstName+"  "+custLastName+"  "+custMobNo+"  "+custEmail);
					
					$("#custFirstName1").val(custFirstName);
					$("#custLastName").val(custLastName);
					$("#custMobNo").val(custMobNo);
					$("#custEmail").val(custEmail);
				}
				else if (idofpage == "addresses")
				{
					var custAddress1 = sessionData.custAddress;
					var custAddress2 = sessionData.custAddress2;
					var streetName = sessionData.street;
					var custState = sessionData.custState;
					var custCity = sessionData.custCity;
					var custPincode = sessionData.custPincode;
					
					$("#custAddress1").val(custAddress1);
					$("#custAddress2").val(custAddress2);
					$("#streetName").val(streetName);
//					document.getElementById("custState").innerHTML = '<option selected>'+custState+'</option>';
					$("#custCity").val(custCity);
					$("#custPincode").val(custPincode);
				}
				
			}

			if (userType == "supplier")
			{
				
			}
		}

	}
}