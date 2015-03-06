$( document ).ready(function() {

	loadLocal();

	//Statement Character Count
	var text_max = 800;
    $('#statement_remaining').html(text_max);

    $('#personal_statement_input').keyup(function() {
        var text_length = $('#personal_statement_input').val().length;
        var text_remaining = text_max - text_length;

        $('#statement_remaining').html(text_remaining);
    });



	if (localStorage.dataSavedName) {
	    $("#intro_reset").show();
		$("#intro_begin").html("Continue Editing <i class='ion-arrow-right-c'></i>");
	}


});


//Reset local storage if it exists.
$("#intro_reset").click(function(){
	localStorage.clear();
	location.reload();
})


//Branding link
$("#branding").click(function(){
	window.open("http://mitchs.co");
})



//Detect Enter on some inputs
$('#personal_name_input, #personal_email_input, #personal_phone_input, #personal_location_input, #personal_link_input, #skillsinput ').bind('keyup', function(e) {
    if ( e.keyCode === 13 ) { // 13 is enter key
	    $("#next_button").click();
    }
});


//Arrow key function
$(document).keydown(function(e){
    if (e.keyCode == 37){
    	if(navCounter>0){
	    	saveFields();
	    	$("aside > ul > li").removeClass("activated");
			$(".hideall, #intro_box, #body_wrap, #work, #schooling, #skills, #statement, #settings, #finished").hide();
			$("#intro_box").toggleClass("pulse, pulse2");
			$("#body_wrap").toggleClass("pulse, pulse2");
	    	navCounter--;
	    	checkNavPos();
	    }
    }
    if (e.keyCode == 39){
    	if(navCounter<10){
	    	saveFields();
	    	$("aside > ul > li").removeClass("activated");
			$(".hideall, #intro_box, #body_wrap, #work, #schooling, #skills, #statement, #settings, #finished").hide();
			$("#intro_box").toggleClass("pulse, pulse2");
			$("#body_wrap").toggleClass("pulse, pulse2");
	    	navCounter++;
	    	checkNavPos();
	    }
    }
});


//Create empty variables
user_job_location = ""; user_job_time = ""; user_emp_desc = ""; user_job_title = ""; user_job_desc = ""; user_employer2 = ""; user_job_location2 = ""; user_job_time2 = ""; user_emp_desc2 = ""; user_job_title2 = "";user_job_desc2 = ""; user_employer3 = ""; user_job_location3 = ""; user_job_time3 = ""; user_emp_desc3 = ""; user_job_title3 = "";user_job_desc3 = ""; user_degree = ""; user_school = ""; user_school_location = ""; user_school_grad = ""; user_degree2 = ""; user_school2 = ""; user_school_location2 = ""; user_school_grad2 = ""; user_degree3 = ""; user_school3 = ""; user_school_location3 = ""; user_school_grad3 = "";


//Nav tab control
$("#tab_intro").click(function(){navCounter=0;})
$("#tab_1").click(function(){navCounter=1;})
$("#tab_2").click(function(){navCounter=6;})
$("#tab_3").click(function(){navCounter=7;})
$("#tab_4").click(function(){navCounter=8;})
$("#tab_5").click(function(){navCounter=9;})
$("#tab_6").click(function(){navCounter=10;})
$("aside > ul > li").click(function(){
	saveFields();
	$("section").toggleClass("pulse, pulse2");
	$("aside > ul > li").removeClass("activated");
	$(".hideall, #intro_box, #body_wrap, #work, #schooling, #skills, #statement, #settings, #finished").hide();
	checkNavPos();
})

// New nav controller shit
navCounter = 0;
$("#intro_begin").click(function(){
	navCounter++;
	checkNavPos();
	$("aside > ul > li").removeClass("activated");
	$("#tab_1").addClass("activated");
})

$("#next_button").click(function(){
	navCounter++;
	$("aside > ul > li").removeClass("activated");
	$(".hideall, #intro_box, #body_wrap, #work, #schooling, #skills, #statement, #settings, #finished").hide();
	$("#intro_box").toggleClass("pulse, pulse2");
	$("#body_wrap").toggleClass("pulse, pulse2");
	checkNavPos();
	saveFields();
})

function checkNavPos(){
	if(10>navCounter>0){
		$("#body_wrap").show();
	}
	if(navCounter==0){
		$(".hideall, #intro_box, #body_wrap, #work, #schooling, #skills, #statement, #settings, #finished").hide();
		$("#intro_box").show();
		$("#tab_intro").addClass("activated");
		$("#progressbar").val(0);
	}else if(navCounter==1){
		$("#intro_box").hide();
		$("#body_wrap").show();
		$("#instructions").html("Starting off easy, what's your <b>full name</b>?");
		$("#personal_name_input").show().focus();
		$("#tab_1").addClass("activated");
		$("#progressbar").val(3);
	}else if(navCounter==2){
		$("#instructions").html("This one is tougher, What is your <b>email address</b>?");
		$("#personal_email_input").show().focus();
		$("#tab_1").addClass("activated");
		$("#progressbar").val(6);
	}else if(navCounter==3){
		$("#instructions").html("I know we just met, but can I have your <b>number</b>?");
		$("#personal_phone_input").show().focus();
		$("#tab_1").addClass("activated");
		$("#progressbar").val(9);
	}else if(navCounter==4){
		$("#instructions").html("Not to be creepy but I need your <b>location</b> too.");
		$("#personal_location_input").show().focus();
		$("#tab_1").addClass("activated");
		$("#progressbar").val(12);
	}else if(navCounter==5){
		$("#instructions").html("Do you have a <b>portfolio or linkedin</b> or something?");
		$("#personal_link_input").show().focus();
		$("#tab_1").addClass("activated");
		$("#progressbar").val(15);
	}else if(navCounter==6){
		$("#instructions").html("Would you like to provide a <b>Personal statement</b>?<br/>I wouldn't judge if you don't.");
		$("#statement").show();
		$("#personal_statement_input").focus();
		$("#tab_2").addClass("activated");
		$("#progressbar").val(18);
	}else if(navCounter==7){
		$("#instructions").html("If you've had a <b>job</b> you should probably add it here.");
		$("#work").show();
		$("#employer").focus();
		$("#tab_3").addClass("activated");
		$("#progressbar").val(42);
	}else if(navCounter==8){
		$("#instructions").html("'Is our children learning?' - G.W. Bush");
		$("#schooling").show();
		$("#degree").focus();
		$("#tab_4").addClass("activated");
		$("#progressbar").val(67);
	}else if(navCounter==9){
		$("#instructions").html("Can you actually do anything?");
		$("#skills").show();
		$("#skillsinput").focus();
		$("#tab_5").addClass("activated");
		$("#progressbar").val(90);
	}else if(navCounter==10){
		$("#settings").show();
		$("#tab_6").addClass("activated");
		$("#progressbar").val(100);
	}
}


//Add job control
jobnum = 1;
$("#new_job").click(function(){
	saveFields();
	$("#employer, #job_location, #job_time, #employer_desc, #title, #job_desc").val("");
	$("#employer").focus();
	if(jobnum==1){
		$("#instructions").text("You know the drill. Second job This time.");
	}else if(jobnum==2){
		$("#instructions").text("I'm limiting you to 3. Nobody cares about the rest.");
		$("#new_job").prop("disabled",true);
	}
	 $("article").animate({ scrollTop: 0 }, "slow");
	 jobnum++;
})


//Add school control
schoolnum = 1;
$("#new_school").click(function(){
	saveFields();
	$("#degree, #school, #school_location, #graduation").val("");
	$("#degree").focus();
	if(schoolnum==1){
		$("#instructions").text("You better not be putting your high school.");
	}else if(schoolnum==2){
		$("#instructions").text("Seriously? Three schools? Okay, einstein.");
		$("#new_school").prop("disabled",true);
	}
	 $("article").animate({ scrollTop: 0 }, "slow");
	 schoolnum++;
})


// Final button, generate PDF
$("#generate").click(function(){
	if ($('#serifyes').is(':checked')) {
		$("#print_page").css("font-family","\'sans-serif\'");
	}else {
		$("#print_page").css("font-family","\'Lato\'");
	}
	generatePDF();
	$("#settings").hide();
	$("#thanks").show();
})

//After generation, return to editing
$("#backtoedit").click(function(){
	navCounter =  0;
	$("aside > ul > li").removeClass("activated");
	$("#thanks").hide();
	checkNavPos();
})





function saveFields(){
	user_name = $("#personal_name_input").val();
	user_email = $("#personal_email_input").val();
	user_phone = $("#personal_phone_input").val();
	user_location = $("#personal_location_input").val();
	user_link = $("#personal_link_input").val();

	user_statement = $("#personal_statement_input").val();

	if(jobnum==1){
		user_employer = $("#employer").val();
		user_job_location = $("#job_location").val();
		user_job_time = $("#job_time").val();
		user_emp_desc = $("#employer_desc").val();
		user_job_title = $("#title").val();
		user_job_desc = $("#job_desc").val();
	}else if(jobnum==2){
		user_employer2 = $("#employer").val();
		user_job_location2 = $("#job_location").val();
		user_job_time2 = $("#job_time").val();
		user_emp_desc2 = $("#employer_desc").val();
		user_job_title2 = $("#title").val();
		user_job_desc2 = $("#job_desc").val();
	}else if(jobnum==3){
		user_employer3 = $("#employer").val();
		user_job_location3 = $("#job_location").val();
		user_job_time3 = $("#job_time").val();
		user_emp_desc3 = $("#employer_desc").val();
		user_job_title3 = $("#title").val();
		user_job_desc3 = $("#job_desc").val();
	}
	if(schoolnum==1){
		user_degree = $("#degree").val();
		user_school = $("#school").val();
		user_school_location = $("#school_location").val();
		user_school_grad = $("#graduation").val();
	}else if(schoolnum==2){
		user_degree2 = $("#degree").val();
		user_school2 = $("#school").val();
		user_school_location2 = $("#school_location").val();
		user_school_grad2 = $("#graduation").val();
	}else if(schoolnum==3){
		user_degree3 = $("#degree").val();
		user_school3 = $("#school").val();
		user_school_location3 = $("#school_location").val();
		user_school_grad3 = $("#graduation").val();
	}
	user_skills = $("#skillsinput").val();
	saveLocal(); 
}

// Local storage stuff
function saveLocal(){
	localStorage.setItem('dataSavedName', user_name);
	localStorage.setItem('dataSavedEmail', user_email);
	localStorage.setItem('dataSavedPhone', user_phone);
	localStorage.setItem('dataSavedLocation', user_location);
	localStorage.setItem('dataSavedUrl', user_link);

	localStorage.setItem('dataSavedStatement', user_statement);

	localStorage.setItem('dataSavedEmp', user_employer);
	localStorage.setItem('dataSavedJobLoc', user_job_location);
	localStorage.setItem('dataSavedJobTime', user_job_time);
	localStorage.setItem('dataSavedEmpDesc', user_emp_desc);
	localStorage.setItem('dataSavedJobTitle', user_job_title);
	localStorage.setItem('dataSavedJobDesc', user_job_desc);

	localStorage.setItem('dataSavedDegree', user_degree);
	localStorage.setItem('dataSavedSchool', user_school);
	localStorage.setItem('dataSavedSchoolLoc', user_school_location);
	localStorage.setItem('dataSavedGrad', user_school_grad);

	localStorage.setItem('dataSavedSkills', user_skills);

}
function loadLocal(){
	$("#personal_name_input").val(localStorage.getItem('dataSavedName'));
	$("#personal_email_input").val(localStorage.getItem('dataSavedEmail'));
	$("#personal_phone_input").val(localStorage.getItem('dataSavedPhone'));
	$("#personal_location_input").val(localStorage.getItem('dataSavedLocation'));
	$("#personal_link_input").val(localStorage.getItem('dataSavedUrl'));

	$("#personal_statement_input").val(localStorage.getItem('dataSavedStatement'));

	$("#employer").val(localStorage.getItem('dataSavedEmp'));
	$("#job_location").val(localStorage.getItem('dataSavedJobLoc'));
	$("#job_time").val(localStorage.getItem('dataSavedJobTime'));
	$("#employer_desc").val(localStorage.getItem('dataSavedEmpDesc'));
	$("#title").val(localStorage.getItem('dataSavedJobTitle'));
	$("#job_desc").val(localStorage.getItem('dataSavedJobDesc'));

	$("#degree").val(localStorage.getItem('dataSavedDegree'));
	$("#school").val(localStorage.getItem('dataSavedSchool'));
	$("#school_location").val(localStorage.getItem('dataSavedSchoolLoc'));
	$("#graduation").val(localStorage.getItem('dataSavedGrad'));

	$("#skillsinput").val(localStorage.getItem('dataSavedSkills'));
}

// Generate the Actual PDF and call print function
function generatePDF(){
	$("#pdf_name").html(user_name);
	$("#pdf_email").html(user_email);
	$("#pdf_phone").html(user_phone);
	$("#pdf_location").html(user_location);
	$("#pdf_link").html(user_link);
	$("#pdf_statement").html(user_statement);
	
	$("#job_1_employer").html(user_employer);
	$("#job_1_loc").html(user_job_location);
	$("#job_1_time").html(user_job_time);
	$("#pdf_job1_emp_desc").html(user_emp_desc);
	$("#job1_title").html(user_job_title);
	user_job_desc_split = user_job_desc.replace(/\*/g, '&nbsp; &nbsp; \u2219');
	user_job_desc_lines = user_job_desc_split.replace(/\n\r?/g, '<br/>');
	$("#pdf_job1_job_desc").html(user_job_desc_lines);
	$("#job_2_employer").html(user_employer2);
	$("#job_2_loc").html(user_job_location2);
	$("#job_2_time").html(user_job_time2);
	$("#pdf_job2_emp_desc").html(user_emp_desc2);
	$("#job2_title").html(user_job_title2);
	user_job_desc_split2 = user_job_desc2.replace(/\*/g, '&nbsp; &nbsp; \u2219');
	user_job_desc_lines2 = user_job_desc_split2.replace(/\n\r?/g, '<br/>');
	$("#pdf_job2_job_desc").html(user_job_desc_lines2);
	$("#job_3_employer").html(user_employer3);
	$("#job_3_loc").html(user_job_location3);
	$("#job_3_time").html(user_job_time3);
	$("#pdf_job3_emp_desc").html(user_emp_desc3);
	$("#job3_title").html(user_job_title3);
	user_job_desc_split3 = user_job_desc3.replace(/\*/g, '&nbsp; &nbsp; \u2219');
	user_job_desc_lines3 = user_job_desc_split3.replace(/\n\r?/g, '<br/>');
	$("#pdf_job3_job_desc").html(user_job_desc_lines3);
	
	$("#pdf_degree").html(user_degree);
	$("#pdf_school").html(user_school);
	$("#pdf_school_loc").html(user_school_location);
	$("#pdf_graduation").html(user_school_grad);
	$("#pdf_degree2").html(user_degree2);
	$("#pdf_school2").html(user_school2);
	$("#pdf_school_loc2").html(user_school_location2);
	$("#pdf_graduation2").html(user_school_grad2);
	$("#pdf_degree3").html(user_degree3);
	$("#pdf_school3").html(user_school3);
	$("#pdf_school_loc3").html(user_school_location3);
	$("#pdf_graduation3").html(user_school_grad3);

	user_skills_split = user_skills.replace(/,/g, ' \u2219');
	$("#pdf_skills").html(user_skills_split);

	if(user_statement==""){$("#pdf_statement, #statement_hr").remove();}
	if(user_employer2==""){$("#pdf_job2").remove();}
	if(user_employer3==""){$("#pdf_job3").remove();}
	if(user_degree2==""){$("#pdf_edu_2").remove();}
	if(user_degree3==""){$("#pdf_edu_3").remove();}

	window.print();
}