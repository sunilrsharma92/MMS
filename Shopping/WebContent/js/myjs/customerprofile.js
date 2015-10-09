/**
 * 
 */

var sampleFile = "";
var formdata = "";
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
	alert("232");
	$("#fileName").change(function(){
        //submit the form here
		sampleFile = document.getElementById("fileName").files[0];
		alert("sampleFile : " +sampleFile);
		$( "#upldBtn" ).trigger( "click" );
		$( "#upldBtn" ).submit();
		
});
	
	
	
	$('#upldBtn').click(function() {
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

	   /* xhr.onload = function(e) {

	        if (this.status == 200) {

	           alert(this.responseText);

	        }

	    };  */                  /*

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
            });*/
	});
	
	

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