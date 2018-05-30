$(document).ready(function(){


	$(".styled").focus(function(){
		$(this).css("border-radius", "5px");
	});
	$(".styled").blur(function(){
		$(this).css("border-radius", "");
	});



	$(".styled").focus(function(){
		$(this).css("background", "rgb(249, 249, 209)");
	});
	$(".styled").blur(function(){
		$(this).css("background", "");
	});




	$("textarea").focus(function(){
		$(this).css("border-radius", "8px");
	});
	$("textarea").blur(function(){
		$(this).css("border-radius", "");
	});

	$("textarea").focus(function(){
		$(this).css("background", "rgb(249, 249, 209)");
	});

	$("textarea").blur(function(){
		$(this).css("background", "");
	});


	$("#male-radio").click(function(){
		$("#form-holder").css("background", "linear-gradient(to bottom right,rgb(34, 78, 104), rgb(106, 166, 201))");
	});
	$("#female-radio").click(function(){
		$("#form-holder").css("background", "linear-gradient(to bottom right,rgb(81, 50, 94), rgb(147, 99, 168))");
	});


	$("#female-radio").click(function(){
		$("#flower").css("display", "inline-block");
	});
	$("#male-radio").click(function(){
		$("#flower").css("display", "none");
	});

	$("#reset-button").click(function(){
		$("img").css("display", "none");
		$("#form-holder").css("background", "");
		$("p").text("");
	});

//-------------------------------------VALIDATION----------------------------------
    $("#submit-button").click(function(e){
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
        var username = $("#username").val();
		var password = $("#pass1").val();
		var confpass = $("#pass2").val();
		var phonenum = $("#phone").val();
		var email = $("#email").val();
        

        var name_regex = /^[a-zA-Z]+$/;
        var username_regex = /^[a-zA-Z0-9]+$/;
        var pass_regex = /^[a-zA-Z0-9 ]+$/;
        var phone_regex = /^\+?[0-9]{1,3}([ -()]*[0-9]){6,}$/;
        var email_regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/;


        if(firstName.length==0 && lastName.length == 0 && username.length == 0 && password.length == 0
             && confpass.length==0 && email.length == 0)
        {
            alert("----->FIELDS WITH * ARE MANDATORY<-----");
            e.preventDefault();
            return;
        }

        else
        {
        
                if (firstName.length == 0){
                    alert("----->FIELDS WITH * ARE MANDATORY<-----");
                    $("#first-name").focus();
                    e.preventDefault();
                    return;
                }
                else if (!firstName.match(name_regex)||firstName.length < 2){
                    alert("* THIS IS NOT A NAME");
                    $("#first-name").focus();
                    e.preventDefault();
                    return;
                }
                else if (lastName.length == 0){
                    alert("----->FIELDS WITH * ARE MANDATORY<-----");
                    $("#last-name").focus();
                    e.preventDefault(); 
                    return;
                }
                else if (!lastName.match(name_regex)||lastName.length < 2){
                    alert("* THIS IS NOT A NAME");
                    $("#last-name").focus();
                    e.preventDefault();
                    return;
                }
          


        		if (username.length == 0){
                    $("#p3").text("* This field is REQUIRED!");
                    $("#username").focus();
                    e.preventDefault();
                     return;
                }
                else if (!(username.match(username_regex))||!(username.length>=4 && username.length<=16)){
                    $("#p3").text("* Please use alphabets and digits only.");
                    $("#username").focus();
                    e.preventDefault();
                    return;
                }
                else{$("#p3").text("");}
                



                if (password.length == 0){
                    $("#p4").text("* This field is REQUIRED!");
                    $("#pass1").focus();
                    e.preventDefault();
                    return;  
                }
                else if(password.length<6 || password.length>16){
                    $("#p4").text("* Input password between 6-16 symbols!");
                    $("#pass1").focus();
                    e.preventDefault(); 
                    return; 
                }
                else if (!password.match(pass_regex)){
                    $("#p4").text("* Use alphabets, digits and whitespace only.");
                    $("#pass1").focus();
                    e.preventDefault();
                    check=false;
                    return;
                }
                else{$("#p4").text("");}



        	    if (confpass.length<6 || confpass.length>16){
                    $("#p5").text("* Input password between 6-16 symbols!");
                    $("#pass2").focus();
                    e.preventDefault();
                    check=false;
                    return; 
                }
                else if (confpass != password){
                    $("#p5").text("* Passwords doesn't match each other.");
                    $("#pass2").focus();
                    e.preventDefault();
                    return;
                }
                else{$("#p5").text("");}



                if (phonenum.length == 0 || phonenum.length<13){
                    $("#p6").text("* Phone number must contain 9 digits after(+359)*");
                    $("#phone").focus();
                    e.preventDefault();
                    return; 
                }
                else if (!phonenum.match(phone_regex)){
                    $("#p6").text("* Please use digits only.");
                    $("#phone").focus();
                    e.preventDefault();
                }
                 else{$("#p6").text("");}



                if (email.length == 0){
                    $("#p7").text("* This field is REQUIRED!");
                    $("#email").focus();
                    e.preventDefault();
                    return; 
                }
                else if (!email.match(email_regex)){
                    $("#p7").text("* Invalid email or symbols used!");
                    $("#email").focus();
                    e.preventDefault();
                    return;
                }
                else{$("#p7").text("");}
   
    }
	});
});



