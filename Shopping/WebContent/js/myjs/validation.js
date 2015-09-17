$(function(){
//*****************************************************//
	 $.validator.addMethod('strongPassword',function(value,element){
		 return this.optional(element)
		 || value.length>=6
		 && /\d/.test(value)
		 && /[a-z]/i.test(value);
	 },' Your password must be atleast 6 character long and contain atleast one no and char\'.');
	 
	 
//	 *****************************************************email
/*	 $.validator.addMethod('customemail',function(value, element) {
        return /^([a-zA-Z0-9_.-+])+\@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/.test(value);
    }, 'Sorry, I have enabled very strict email validation.');*/
	 
	 
	 
	/* jQuery.validator.addMethod('customemail', function(value, element) {
		  // allow any non-whitespace characters as the host part
		  return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
		}, 'Please enter a valid email address.');*/
	 
	 $.validator.addMethod("customemail", function(value, element) 
			 { 
			 return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value); 
			 }, "Please enter a valid email address.");
	 
	 
	 
	 
	 
//****************************************************//
	$(".login-val").validate({
		rules:{
			email:{
				required: true,
				email: true,
			},
			password:{
				required : true,
			},
			
		},
		messages:{
			email:{
				required:'Plese enter an email address.',
				email:'Plese enter a <em>valid</em> email address'
			},
			password:{
				required:'Enter the password',
			}
			
		}

	});
	
	$(".signup-val").validate({
		rules:{
			/*email:{
				required: true,
				email: true,
			},*/
			email: {
					required:  {
	                        	depends:function(){
	                            $(this).val($.trim($(this).val()));
	                            return true;
	                        	}   
					},
					customemail: true,
				  },
			password:{
				required:true,
				strongPassword:true,
			},
			password2:{
				required : true,
				equalTo : "#passSignUp",
			},
			name:{
				required:true,
				maxlength: 10,
				minlength: 5,
			},
			surname:{
				required: true,
				rangelength:[5,10],
			},
			mobile:{
				required : true,
				number: true,
				maxlength: 10,
				minlength: 10,
			},
			captcha:{
				required : true, 
			}
		},
		messages:{
			email:{
				required:'Plese enter an email address.',
				email:'Plese enter a <em>valid</em> email address',
				customemail:'Plese enter a <em>valid</em> email address',
			},
			name:{
				required:'Please Enter Name',
			},
			surname:{
				required:'Please enter Surname',
			},
			password:{
				required:'Plese enter an password.',
			},
			password2:{
				required:'Plese enter an password.',
			},
			mobile:{
				required:'Please enter mobile no',
				number:'Please enter correct mobile no',
			},
			captcha:{
				required:'Please tick ',
			}
		}

	});
	
	
	$(".forgot-val").validate({
		rules:{
			email:{
				required: true,
				email: true,
			},
		
		},
		messages:{
			email:{
				required:'Plese enter an email address.',
				email:'Plese enter a <em>valid</em> email address',
			},
			
		}

	});
	
	$(".track-val").validate({
		rules:{
			email:{
				required: true,
				email: true,
			},
		
		},
		messages:{
			email:{
				required:'Plese enter an email address.',
				email:'Plese enter a <em>valid</em> email address',
			},
			
		}

	});


});

