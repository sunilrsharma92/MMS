/**
 * 
 */


function handleAllListResponse(jsonMsg) 
{
	try
	{
        callServlet(jsonMsg, function(strJsonResponse){
        	
        	if(strJsonResponse != null)
        		{
	        		var response = JSON.parse(strJsonResponse);
	            	var command = response.command;
	            	var status =  parseInt(response.status);
	            
	            	listResponseHandler(response,command,status);
        		}
	        	else
	        	{
	        		jAlert("Response is blank", "Message");
	        	}
        	
    		});
	}
	catch (e) {
		console.log("handleAllListResponse(jsonMsg) Exception : "+e);
	}
}


function listResponseHandler(response,command,status)
{
    try {
        switch (status)
        {
        case 3:
        	switch (command)
        	{
			case 2000:
				handleMainCategoryResponse(response);
				break;
				
			case 2001:
				handleShopProfileDetailResponse(response);
				break;
				
			case 2010:
				handleShopProfDispResponse(response);
				break;
				
			case 2003:
				handleProductDisplayResponse(response);
				break;
				
			case 2004:
//						(response);
				break;
				
			case 2005:
				handleProductDisplayinCartResponse(response);
				break;
				
			case 2051:
				handleLoginResponse(response);
				break;
				
			case 2052:
				handleSignUpResponse(response);
				break;
				
			case 2054:
				handleForgetPasswordResponse(response);
				break;
			}
        	break;
        	
        case 1:
        	break;
        	
        	
        case 2:
        	switch (command)
        	{
			case 1005:
					$("#appendProducttoCart").empty();
					$("#productCountOnCart").empty();
					document.getElementById("productCountOnCart").innerHTML="0";
				break;
				
			case 1051:handleLoginCustResponse(response);
				break;
			case 1052:handleSignUpCustResponse(response);
			break;
			case 1054:handleForgetPasswordResponse(response);
			break;
				
			}
        	break;
        	
        	
        case 10:
        	switch (command)
        	{
        	
        	case 1052:
        		alert("10");
        		handleSignUpCustResponse(response);
        		break
        	}
        	break;
        	
        	
        case 11:
        	switch (command)
        	{
        	case 1052:handleSignUpCustResponse(response);
        		break
        	}
        	break;
        	
        	
        case 12:
        	switch (command)
        	{
        	case 1052:handleSignUpCustResponse(response);
        		break
        	}
        	break;
        	
        	
        case 5:
        	break;
        case 6:
        	break;
        case 7:
        	break;
        default :
        	break;
        
        
        }
        
    }
    catch (e) 
	{
    	
    }
        

}