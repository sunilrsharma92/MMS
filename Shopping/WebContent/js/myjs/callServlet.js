/**
 * 
 */


function callServlet(jsonMsg, handleData)
{
    var response = JSON.parse(jsonMsg);
    var commandvalue = response.command;

    $.ajax({
        url: 'GetProductbyCategoryServlet',
        type: 'POST',
        data:
        {
            jsonMsg: jsonMsg,
            command: commandvalue,
        },
        success: function (data)
        {
             handleData(data);
        },
        error: function (data) {
        	handleData(data);
        },
        async: true
    });
}


function handleData(data) 
{
//	alert("handleData : "+data);
    return data;
}


//
//function servletforCartOperation(productid, command)
//{
//	$.ajax({
//		url: 'handleCartServlet',
//		type: 'POST',
//		data:
//		{
//			productid: productid,
//			command: command
//		},
//		success: function (data)
//		{
//			handlecartData(data);
//		},
//		error: function (data) {
//			handlecartData(data);
//		},
//		async: true
//	});
//	
//	
//}
//

function handlecartData(data) 
{
//	alert("handleData : "+data);
//	alert(data);
}

//********************************END********************************//