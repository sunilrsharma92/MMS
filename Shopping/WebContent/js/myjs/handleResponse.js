/**
 * 
 */


function handleAllListResponse(jsonMsg) 
{
        callServlet(jsonMsg, function(strJsonResponse){
        	
        	var response = JSON.parse(strJsonResponse);
//        	alert("response : "+JSON.stringify(response));
        	var command = response.command;
        	var status =  parseInt(response.status);
        
        	listResponseHandler(response,command,status);
    		});
}


function listResponseHandler(response,command,status)
{
//	alert("command : "+command+" status : "+status);
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
				handleLoginCustResponse(response);
				break;
				
			case 2052:
				handleSignUpCustResponse(response);
				break;
				


			default:
				break;
			}
        	
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

			default:
				break;
			}
        	break;
        case 3:
        	break;
        case 4:
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
        
        
        
//        case 3:
//            switch (command)
//		{
//            		case 0000://Language List
//                        	handleuserAlive(response);
//                        	break;
//           
//            		case 0001:// Mapping Extentions to TPM
//          	                
//                        	break;
//        	}
//        break;

//        case "deva":
//        	alert("Case : Deva");
//        	handleuserAlive("Message Handling js");
//        break;
//    
//    default :
//        break;
//    }
//    }
    
}