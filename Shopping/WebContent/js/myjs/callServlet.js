function callServlet(jsonMsg, handleData)
{
	var response = JSON.parse(jsonMsg);
	var commandvalue = response.command;
	writeLogAjax("Command : " + commandvalue + " JSON Request TO SERVLET : " + JSON.stringify(response), 1);
	$.ajax(
	{
	url : "GetProductbyCategoryServlet",
	type : "POST",
	data :
	{
	jsonMsg : jsonMsg,
	command : commandvalue,
	},
	success : function(data)
	{
		handleData(data);
	},
	error : function(data)
	{
		handleData(data);
	},
	async : true
	});
}
function writeLogAjax(logMsg, flag)
{
	$.ajax(
	{
	url : "WriteLogServlet",
	type : "POST",
	data :
	{
	logMsg : logMsg,
	flag : flag,
	},
	success : function(data)
	{
		handleLogWriteSuccessData(data);
	},
	error : function(data)
	{
		handleLogWriteSuccessData(data);
	},
	async : true
	});
}
function handleData(data)
{
	return data;
}
function handleLogWriteSuccessData(data)
{
}
function handlecartData(data)
{
}