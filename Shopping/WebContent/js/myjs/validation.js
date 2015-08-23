$(function(){

	// $.validator.addClassRules()

	$("#login-val").validate({
		rules:{
			email:{
				required: true,
				email: true,
			},
			password:"required",
			password2:{
				required : true,
				equalTo : "#password"
			},
			name:{
				required:true,
				maxlength: 10,
				minlength: 5
			},
			surname:{
				required: true,
				rangelength:[5,10]
			}
		},
		messages:{
			email:{
				required:'Plese enter an email address.',
				email:'Plese enter a <em>valid</em> email address'
			},
			name:{
				required:'Please Enter NAme',
			},
			surname:{
				required:'Please enter Sur',
			}
		}

	});
});