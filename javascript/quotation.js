
$().ready(function(){

  console.log('$.validator', $.validator);
	$.validator.setDefaults({
		submitHandler: function() {
			alert("submitted!");
		}
	});

	$().ready(function() {
		
		$("#quotationForm").validate({
			rules: {
				firstName: 'required',
				lastName: 'required',
				email: {
                    required: true,
					email: true
                },
				subject: 'required',
				text: 'required'
			},
			messages: {
				firstName: 'Please enter your First Name',
				lastName: 'Please enter your Last Name',
				email: {
                    required: "Please enter your email",
                    email: "Please enter a valid email address"
                },
				subject: "Please enter a valid Subject",
				text: "Please enter a description"
			}
		});

	});
	          

});


  
