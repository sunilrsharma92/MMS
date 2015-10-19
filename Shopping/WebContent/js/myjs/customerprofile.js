/**
 * 
 */

var sampleFile = "";
var formdata = "";
$(document).ready(function(){
	
	
	var viewshop = $.session.get("viewshop");
	alert("viewshop : "+viewshop);
	if(viewshop == "viewshop")
		{
		try
		{
		var response1 = $.session.get("loadShopPage");
		var shopList = response1.product;
		alert("shopList : "+response1);
		$("#loadpage").load("shopProfile.jsp");
		
		for ( var i in shopList)
		{
			
			var shopid = shopList[i].shopid;
			if(shopid == id)
			{
				var companyname = shopList[i].companyname;
				var address1 = shopList[i].address1;
				var address2 = shopList[i].address2;
				var state = shopList[i].state;
				var city = shopList[i].city;
				var street = shopList[i].street;
				var postalcode = shopList[i].postalcode;
				var images = shopList[i].images;
				
				$("label[for='firstNameDisplay']").html(companyname);
				$("label[for='stateDisplay']").html(state);
				$("label[for='addressDisplay']").html(address1);
				$("label[for='cityDisplay']").html(city);
				$("label[for='pincodeDisplay']").html(postalcode);
			}
		}
		
	}
	catch(e)
	{
		console.log("ready.js loadShopProfilePage Exception : "+e)
	}
		}
	
	
	
	
	
	
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
			
//			console.log("SunkjkjaJ : ", JSON.parse(loginData));
			 
			
			var loginData = $.session.get('loginData');
			var sessionData = JSON.parse(loginData);
//			console.log(" loginData.key : ", loginData.key);
			var profileImg = sessionData.profileImg;
			$("#profileImg").attr("src",profileImg);
			console.log("profileImg : ", profileImg);
			$("#Sunilkey").attr("src",sessionData.key);
			console.log("Sunilkey : ", sessionData.key);
			
			console.log("Sunil : key : ", sessionData.key);
			
			if(profileImg != null)
			{
				$.session.set('profileImage', profileImg);
			}
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
	
	
	$("#profileImg").click(function(){
		
		$( "#fileName").trigger( "click" );
		
	});
		$("#fileName").change(function(){
		/* //submit the form here
		sampleFile = document.getElementById("fileName").files[0];
		alert("sampleFile : " +sampleFile);*/
//		var img = deva
		$( "#upldBtn" ).trigger( "click" );
		/*$( "#upldBtn" ).submit();*/
		
		try
		{
	$('#uploadFile').ajaxForm({
		success : function (msg)
		{
			$(".overlay").show();
			var count = 0;
			
			var clear = setInterval(function()
				{
				count++;
				console.log("count : "+count+"msg : "+msg);
				
				if(count == 7)
					{
					$("#profileImg").attr("src",msg);
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
			console.log("Exception in uploading file on jsp : "+e);
		}
		
		var profileImg = $.session.get("profileimg");
		if(profileImg != "" || profileImg !=null)
			{
				$("#profileImg").attr("src",profileImg);
			}
		
});
	
	
	
	/*$('#upldBtn').click(function() {
		alert("Sunil");

	    formdata = new FormData();
	    var sampleText = document.getElementById("sampleText").value;
	    
	    var userType = $.session.get('userType');
	    var loginData = $.session.get('loginData');
	    var sessionData = JSON.parse(loginData);
//	    sampleText = sampleText + userType + key + email;
//	    console.log("sampleText :  "+sampleText);
	    
	    var other_data = $('form').serialize();
	    console.log("other_data"+other_data);
	    if(loginData != null)
	    {
		    var email = sessionData.emailId;
			var key = sessionData.key;
		    
		    formdata.append("sampleFile", sampleFile);
		    formdata.append("userType", userType);
//		    formdata.append("email", email);
//		    formdata.append("key", key);
//		    formdata.append("ha", "haha");
//		    formdata.append("sampleText", sampleText);
		    
		    console.log("SSemail : "+email+" SSkey : "+key);
	
	//	    var xhr = new XMLHttpRequest();       
	//
	//	    xhr.open("POST","/UploadServlet", true);
	//
	//	    xhr.send(formdata);
		    alert("ssss");
		    $.ajax({
		        url: '/UploadServlet'+ other_data,
		        datatype : 'script',
		        cache: false,
		        contentType: false,
		        processData: false,
		        type: 'POST',
		        data: formdata,
		        async: false,
		        success: function (data) {
		            alert(data)
		        },
		    });
	    }

	    xhr.onload = function(e) {

	        if (this.status == 200) {

	           alert(this.responseText);

	        }

	    };                    

         $("form#yourform").attr('action', contextPath+servletName);
         $("form#yourform").attr('enctype', "multipart/form-data");
         $("form#yourform").attr("target", "postiframe");
         $("form#yourform").attr("file", $('#file').val());

        $('yourform').submit(); //upload button 
             $("#postiframe").load(function () {
                    iframeContents = $("#postiframe")[0].contentWindow.document.body.innerHTML;
                    $("#textarea").html(iframeContents);
                            $.ajax({
                                    type: "POST",
                                    url: contextPath+servletName,
                                    data: "action=download",
                                    async: false,
                                    dataType: "text",
                                    success: function(result) {
                                        //do something
                                    }
                                });
                 });
            });
	});*/
	
	

});

// *************************************************************************************

function loadProfileMenu(id)
{
	var idofpage = $(id).attr("id");
	writeLogAjax("idofpage : "+idofpage,1);
	// -- id 
	for(var i=0; i<=3 ; i++)
		{
			$("#"+i+"1").hide();
		}
	
	$("#"+idofpage+"1").show();
	
//	$.session.set('contentState', idofpage);
	
	$("#dashboard").hide(); // -- hide dashboard after profile click,to avoid mixture of profile and dashboard 
	
	if (idofpage == "0" || idofpage == "1")
	{
		var loginData = $.session.get('loginData');
//			alert("loginData   "+JSON.stringify(loginData));
		var userType = $.session.get('userType');
	
		if (loginData != null)
		{
			var sessionData = JSON.parse(loginData);
			
//			if (userType == "customer")
//			{
				if (idofpage == "0")
				{
					var firstName = sessionData.firstName;
					var lastName = sessionData.lastName;
					var phone = sessionData.phone;
					var emailId = sessionData.emailId;
					
//					alert(firstName+"  "+lastName+"  "+phone+"  "+emailId);
					
					$("#firstNameSave").val(firstName);
					$("#lastNameSave").val(lastName);
					$("#mobileNoSave").val(phone);
					$("#emailSave").val(emailId);
				}
				else if (idofpage == "1")
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
	//					document.getElementById("custState").innerHTML = '<option selected>'+state+'</option>';
					$("#citySave").val(city);
					$("#pincodeSave").val(pincode);
				}
				
//			}
	
		}

}
}

//*************************************************************************************


//*************************************************************************************

function shopProfileDisplay(supplierKey)
{
	writeLogAjax("supplierKey : " + supplierKey,1);
	
	objhandleRequest.handleShopProfileDisplay(supplierKey);
}

function uploadProfilePic()
{
	var profileImg = "";
	var email = "";
	var key = 1;
	
	console.log("profileImg : " + profileImg +" key : " +key + " userType :" + userType + " email : " + email);
	objhandleRequest.handleUpdateProfilePic(profileImg, key, userType, email);
}


//*************************************************************************************