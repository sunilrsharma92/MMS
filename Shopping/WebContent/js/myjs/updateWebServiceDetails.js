$(document).ready(function()
{
	document.getElementById("connection").disabled = true;
	document.getElementById("driver").disabled = true;
	document.getElementById("username").disabled = true;
	document.getElementById("password").disabled = true;
	$(".inputbox_login_page").css("background-color", "#CCC");
	$.ajax(
	{
	url : "Editxmlservlet",
	type : "post",
	data :
	{
		action : "0",
	},
	success : function(data)
	{
		var URL = data.split("#");
		for ( var i in URL)
		{
			$("#primary").val("");
			$("#secondary").val("");
			var connection = URL[0];
			var driver = URL[1];
			var username = URL[2];
			var password = URL[3];
			$("#connection").val(connection);
			$("#driver").val(driver);
			$("#username").val(username);
			$("#password").val(password);
		}
	},
	error : function(data)
	{
	},
	async : true
	});
	$("#Modify").click(function()
	{
		document.getElementById("connection").disabled = false;
		document.getElementById("driver").disabled = false;
		document.getElementById("username").disabled = false;
		document.getElementById("password").disabled = false;
		$(".inputbox_login_page").css("background-color", "");
		$("#Modify").hide();
		$("#Save").show();
	});
});
function updateWebServiceDetails()
{
	try
	{
		$("#validation").css("color", "");
		document.getElementById("validation").innerHTML = "";
		var connection = "connection";
		var drivername = "drivername";
		var username = "username";
		var password = "password";
		var connectionValue = $("#connection").val();
		var drivernameValue = $("#driver").val();
		var usernameValue = $("#username").val();
		var passwordValue = $("#password").val();
		var str = "";
		var strC = "";
		var strD = "";
		var strU = "";
		var strP = "";
		if(connectionValue == "" && drivernameValue == "")
		{
			$("#validation").css("color", "#290606");
			document.getElementById("validation").innerHTML = "Connection and Driver name are required to configure DB connection";
			return false;
		}
		if(connectionValue == "")
		{
			strC = "NaN";
			$("#validation").css("color", "#290606");
			document.getElementById("validation").innerHTML = "Connection URL is required.";
			return false;
		}
		else
		{
			strC = "Connection Name : " + connectionValue;
		}
		if(drivernameValue == "")
		{
			strD = "NaN";
			$("#validation").css("color", "#290606");
			document.getElementById("validation").innerHTML = "Driver name is required.";
			return false;
		}
		else
		{
			strD = "Driver Name : " + drivernameValue;
		}
		if(usernameValue == "")
		{
			strU = "";
		}
		else
		{
			strU = "User Name : " + usernameValue;
		}
		if(passwordValue == "")
		{
			strP = "";
		}
		else
		{
			strP = "Password : " + passwordValue;
		}
		str = strC + " \n " + strD + " \n " + strU + " \n " + strP;
		jConfirm(str, "Alert Message", function(event)
		{
			if(event == true)
			{
				$.ajax(
				{
				url : "Editxmlservlet",
				type : "post",
				data :
				{
				connection : connection,
				drivername : drivername,
				username : username,
				password : password,
				connectionValue : connectionValue,
				drivernameValue : drivernameValue,
				usernameValue : usernameValue,
				passwordValue : passwordValue,
				action : "1"
				},
				success : function(data)
				{
					$("#validation").css("color", "#FFF");
					$("#validation").css("text-align", "center");
					document.getElementById("validation").innerHTML = data;
					document.getElementById("connection").disabled = true;
					document.getElementById("driver").disabled = true;
					document.getElementById("username").disabled = true;
					document.getElementById("password").disabled = true;
					$(".inputbox_login_page").css("background-color", "#CCC");
					$("#Modify").show();
					$("#Save").hide();
				},
				error : function(data)
				{
				},
				async : true
				});
			}
			else
			{
				document.getElementById("validation").innerHTML = "";
			}
		});
	}
	catch (e)
	{
		console.log("Exception : " + e);
	}
}
function ResetFields()
{
	$("#primary").val("");
	$("#secondary").val("");
}