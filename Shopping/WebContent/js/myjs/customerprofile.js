/**
 * 
 */

var sampleFile = "";
var formdata = "";
//******************************************************************************************************
$(document).ready(function()
{
	try
	{
		var contentState = $.session.get('contentState');
		if(contentState != null && contentState != "")
		{
			try
			{
				$("#dashboard").hide();
				$("#loadpagecontent").load(contentState + ".jsp");
			}
			catch (e)
			{
				console.log("Customerptofile.js  contentState Excepion : " + e)
			}
		}

		var userType = $.session.get('userType');
		if(userType == "customer")
		{
			try
			{
				$("#custOrderPanel").show(); // -- not needed for shopkeeper
	
				// console.log("SunkjkjaJ : ", JSON.parse(loginData));
	
				var loginData = $.session.get('loginData');
				var sessionData = JSON.parse(loginData);
				// console.log(" loginData.key : ", loginData.key);
				var profileImg = sessionData.profileImg;
				$("#profileImg").attr("src", profileImg);
				console.log("profileImg : ", profileImg);
				$("#Sunilkey").attr("src", sessionData.key);
				console.log("Sunilkey : ", sessionData.key);
	
				console.log("Sunil : key : ", sessionData.key);
	
				if(profileImg != null)
				{
					$.session.set('profileImage', profileImg);
				}
			}
			catch (e)
			{
				console.log("Customerptofile.js  userType = customer Excepion : " + e)
			}
		}

		if(userType == "supplier")
		{
			try
			{
				// alert("PPP userType : "+userType);
				$("#custOrderPanel").hide(); // -- not needed for shopkeeper
	
				var loginData = $.session.get('loginData');
				var sessionData = JSON.parse(loginData);
				var supplierKey = sessionData.key;
	
				shopProfileDisplay(supplierKey);
			}
			catch (e)
			{
				console.log("Customerptofile.js  userType = supplier Excepion : " + e)
			}
		}

		var shopProfileKey = $.session.get("shopProfileKey");
		if(shopProfileKey != "" || shopProfileKey != null)
		{
			try
			{
				$.session.set("viewshop", "viewshop");
				shopProfileDisplay(shopProfileKey);
				// $(".hidemenu").hide();
			}
			catch (e)
			{
				console.log("Customerptofile.js  shopProfileKey Excepion : " + e)
			}
		}
	
//******************************************************************************************************
	$("#profileImg").click(function(){

		$("#fileName").trigger("click");

	});
//******************************************************************************************************
	$("#fileName").change(function()
	{
		try
		{
		// var img = deva
		$("#upldBtn").trigger("click");
		
			$('#uploadFile').ajaxForm(
			{
				success : function(msg)
				{
					$(".overlay").show();
					var count = 0;

					var clear = setInterval(function()
					{
						count++;
						console.log("count : " + count + "msg : " + msg);

						if(count == 7)
						{
							$("#profileImg").attr("src", msg);
							$(".overlay").show().delay(100).fadeOut();
							clearInterval(clear);
						}
					}, 500);

					$.session.remove("profileimg");
					$.session.set("profileimg", msg);
				}
			});
		}
		catch (e)
		{
			console.log("Exception in uploading file on jsp : " + e);
		}

		var profileImg = $.session.get("profileimg");
		if(profileImg != "" || profileImg != null)
		{
			$("#profileImg").attr("src", profileImg);
		}

	});
//******************************************************************************************************
	/*
	 * $('#upldBtn').click(function() { alert("Sunil");
	 * 
	 * formdata = new FormData(); var sampleText =
	 * document.getElementById("sampleText").value;
	 * 
	 * var userType = $.session.get('userType'); var loginData =
	 * $.session.get('loginData'); var sessionData = JSON.parse(loginData); //
	 * sampleText = sampleText + userType + key + email; //
	 * console.log("sampleText : "+sampleText);
	 * 
	 * var other_data = $('form').serialize();
	 * console.log("other_data"+other_data); if(loginData != null) { var email =
	 * sessionData.emailId; var key = sessionData.key;
	 * 
	 * formdata.append("sampleFile", sampleFile); formdata.append("userType",
	 * userType); // formdata.append("email", email); // formdata.append("key",
	 * key); // formdata.append("ha", "haha"); // formdata.append("sampleText",
	 * sampleText);
	 * 
	 * console.log("SSemail : "+email+" SSkey : "+key);
	 *  // var xhr = new XMLHttpRequest(); // //
	 * xhr.open("POST","/UploadServlet", true); // // xhr.send(formdata);
	 * alert("ssss"); $.ajax({ url: '/UploadServlet'+ other_data, datatype :
	 * 'script', cache: false, contentType: false, processData: false, type:
	 * 'POST', data: formdata, async: false, success: function (data) {
	 * alert(data) }, }); }
	 * 
	 * xhr.onload = function(e) {
	 * 
	 * if (this.status == 200) {
	 * 
	 * alert(this.responseText);
	 *  }
	 *  };
	 * 
	 * $("form#yourform").attr('action', contextPath+servletName);
	 * $("form#yourform").attr('enctype', "multipart/form-data");
	 * $("form#yourform").attr("target", "postiframe");
	 * $("form#yourform").attr("file", $('#file').val());
	 * 
	 * $('yourform').submit(); //upload button $("#postiframe").load(function () {
	 * iframeContents =
	 * $("#postiframe")[0].contentWindow.document.body.innerHTML;
	 * $("#textarea").html(iframeContents); $.ajax({ type: "POST", url:
	 * contextPath+servletName, data: "action=download", async: false, dataType:
	 * "text", success: function(result) { //do something } }); }); }); });
	 */
//******************************************************************************************************
	
		$("#searchProductTxtBox").keyup(function(e)
		{
			try
			{
			// alert("Data Label : "+JSON.stringify(datalabelProd));
			var prodlabel = "";
			//	
			// if(shopAction == "shop")
			// {
			// label = datalabelShop.autoCompleteLabel;
			// }
			// else if(prodAction == "prod")
			// {
			prodlabel = datalabelProd.autoCompleteLabel;
			// }

			// alert("Label : "+JSON.stringify(label));
			$("#searchProductTxtBox").autocomplete(
			{
			source : prodlabel,

			select : function(event, ui)
			{
				var text = ui.item.label;
				// alert("Text : " + text);
				// searchProduct();
				// var pageState = $.session.get('pageState');
				// console.log("Autocomplete pageState : "+pageState);
				// if(pageState == "shopProfile")
				// {
				searchProduct();
				// }
				// else
				// {
				// searchShop();
				// }

			}

			});
			}
			catch (e)
			{
				console.log("customerProfile.js searchProduct Exception : " + e);
			}
		});

//******************************************************************************************************
		
		$("#productSearch").click(function()
		{
			searchProduct();
		});
		
		$("#searchProductTxtBox").keypress(function(e)
		{
			try
			{
			if(e.which == 13)
			{
				// alert("Text : " + $("#search").val());
				// var pageState = $.session.get('pageState');
				// console.log("Keypress pageState : "+pageState);
				// if(pageState == "shopProfile")
				// {
				searchProduct();
				// }
				// else
				// {
				// searchShop();
				// }
				// searchShop();

			}
			}
			catch (e)
			{
				console.log("customerProfile.js searchProduct Exception : " + e);
			}
		});
	}
	catch (e)
	{
		console.log("Customerptofile.js  document.ready Excepion : " + e)
	}
});

//******************************************************************************************************

function loadProfileMenu(id)
{
	try
	{
		var idofpage = $(id).attr("id");
		writeLogAjax("idofpage : " + idofpage, 1);
		// -- id
		for (var i = 0; i <= 3; i++)
		{
			$("#" + i + "1").hide();
		}

		$("#" + idofpage + "1").show();

		// $.session.set('contentState', idofpage);

		$("#dashboard").hide(); // -- hide dashboard after profile click,to
								// avoid mixture of profile and dashboard

		if(idofpage == "0" || idofpage == "1")
		{
			var loginData = $.session.get('loginData');
			// alert("loginData "+JSON.stringify(loginData));
			var userType = $.session.get('userType');

			if(loginData != null)
			{
				var sessionData = JSON.parse(loginData);

				// if (userType == "customer")
				// {
				if(idofpage == "0")
				{
					var firstName = sessionData.firstName;
					var lastName = sessionData.lastName;
					var phone = sessionData.phone;
					var emailId = sessionData.emailId;

					// alert(firstName+" "+lastName+" "+phone+" "+emailId);

					$("#firstNameSave").val(firstName);
					$("#lastNameSave").val(lastName);
					$("#mobileNoSave").val(phone);
					$("#emailSave").val(emailId);
				}
				else if(idofpage == "1")
				{
					var address = sessionData.address1;
					var address2 = sessionData.address2;
					var street = sessionData.street;
					var state = sessionData.state;
					var city = sessionData.city;
					var pincode = sessionData.pinCode;

					$("#address1Save").val(address);
					$("#address2Save").val(address2);
					$("#streetSave").val(street);
					// document.getElementById("custState").innerHTML = '<option
					// selected>'+state+'</option>';
					$("#citySave").val(city);
					$("#pincodeSave").val(pincode);
				}

				// }

			}

		}

	}
	catch (e)
	{
		console.log("Customerptofile.js  loadProfileMenu Excepion : " + e)
	}
}

// *************************************************************************************

// *************************************************************************************

function shopProfileDisplay(supplierKey)
{
	try
	{
		writeLogAjax("supplierKey : " + supplierKey, 1);

		objhandleRequest.handleShopProfileDisplay(supplierKey);
	}
	catch (e)
	{
		console.log("Customerptofile.js  shopProfileDisplay Excepion : " + e)
	}
}

function uploadProfilePic()
{
	try
	{
		var profileImg = "";
		var email = "";
		var key = 1;

		console.log("profileImg : " + profileImg + " key : " + key + " userType :" + userType + " email : " + email);
		objhandleRequest.handleUpdateProfilePic(profileImg, key, userType, email);
	}
	catch (e)
	{
		console.log("Customerptofile.js  uploadProfilePic Excepion : " + e)
	}
}

// *************************************************************************************
