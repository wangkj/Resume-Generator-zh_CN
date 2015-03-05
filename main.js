$( document ).ready(function() {

	loadLocal();

	checkStep();
	//Statement Character Count
	var text_max = 800;
    $('#statement_remaining').html(text_max);

    $('#personal_statement_input').keyup(function() {
        var text_length = $('#personal_statement_input').val().length;
        var text_remaining = text_max - text_length;

        $('#statement_remaining').html(text_remaining);
    });




});

//Branding link
$("#branding").click(function(){
	window.open("http://mitchs.co");
})

//Close Intro
$("#close_intro").click(function(){
	$("#intro_inner").animate({
	    marginTop: "-110%"
	  }, 500);
	$("#intro_wrapper").delay(500).fadeOut(300);
})

var stepcounter = 1;

$('#personal-name-input, #personal-email-input, #personal-phone-input, #personal-location-input, #personal-link-input ').bind('keyup', function(e) {
    if ( e.keyCode === 13 ) { // 13 is enter key
	    $("#personal_continue").click();
    }
});


$("#info_bar").click(function(){
	$("#intro_wrapper").fadeIn(300);
	$("#intro_inner").delay(100).animate({
	    marginTop: "75px"
	  }, 500);
})

$(".next").click(function(){
	saveFields();
	stepcounter++;
	console.log(stepcounter);
	checkStep();
})

function checkStep(){
	$("aside > ul > li").removeClass("activated");
	if(stepcounter<=6){
		$("#personal_information").show();
		
		$("#personal_information").toggleClass("pulse, pulse2");
		$(".personal_block > input").hide();
		$("#tab_1").addClass("activated");
	}
	if(stepcounter==1){
		// $(".personal_block > input").hide();
		$("#personal-name-input").show().focus();
		$("#personal_desc").html("Hey there, what's your full <b>name</b>?");
	}else if(stepcounter==2){
		// $("#personal_information").show();
		$("#personal-email-input").show().focus();
		$("#personal_desc").html("Nice to meet you, "+splitname[0]+"!<br/>What is your <b>email address</b>?");
	}else if(stepcounter==3){
		$("#personal-phone-input").show().focus();
		$("#personal_desc").html("I know we just met, but can I have your <b>phone number</b>?");
	}else if(stepcounter==4){
		$("#personal-location-input").show().focus();
		$("#personal_desc").html("This might sound creepy, but I need your <b>location</b>.");
	}else if(stepcounter==5){
		$("#personal-link-input").show().focus();
		$("#personal_desc").html("Lastly, do you have a <b>Linkedin or portfolio</b> link.");
	}else if(stepcounter==6){
		$("#personal_desc").html("Alrighty!<br/><br/>To recap, you are <b>"+user_name+"</b> from <b>"+user_location+"</b> who can be emailed at <b>"+user_email+"</b> or called at <b>"+user_phone+"</b>. Finally, Your online portfolio can be seen at <b>"+user_link+"</b>");
	}else if(stepcounter==7){
		$("#tab_2").addClass("activated");
		$("#personal_information").hide();
		$("#personal_statement").show();
		$("#personal_statement").toggleClass("pulse, pulse2");
		$("#personal_statement_input").focus();
	}else if(stepcounter==8){
		$("#tab_3").addClass("activated");
		$("#personal_statement").hide();
		$("#work_experience").show();
		$("#work_experience").toggleClass("pulse, pulse2");
		$("#employer").focus()
	}else if(stepcounter==9){
		$("#tab_4").addClass("activated");
		$("#work_experience").hide();
		$("#education").show();
		$("#education").toggleClass("pulse, pulse2");
		$("#degree").focus();
	}else if(stepcounter==10){
		$("#tab_5").addClass("activated");
		$("#education").hide();
		$("#skills").show();
		$("#skills").toggleClass("pulse, pulse2");
		$("#skillsinput").focus();
	}else if(stepcounter==11){
		$("#tab_6").addClass("activated");
		$("#skills").hide();
		$("#settings").show();
		$("#settings").toggleClass("pulse, pulse2");
	}else if(stepcounter==12){
		$("#tab_7").addClass("activated");
		$("#settings").hide();
		$("#finished").show();
		$("#finished").toggleClass("pulse, pulse2");
	}
	else{
		alert("error.");
	}
}


//Add job control
jobnum = 1;
$("#add_job").click(function(){
	saveFields();
	$("#employer, #job_location, #job_time, #employer_desc, #title, #job_desc").val("");
	if(jobnum==1){
		$("#work_header").text("Alright, do it again for Job 2");
	}else if(jobnum==2){
		$("#work_header").text("I'm limiting you to 3. Nobody cares about the rest.");
		$("#add_job").prop("disabled",true);
	}
	 $("article").animate({ scrollTop: 0 }, "slow");
	 jobnum++;
})
//Add school control
schoolnum = 1;
$("#add_school").click(function(){
	saveFields();
	$("#degree, #school, #school_location, #graduation").val("");
	if(schoolnum==1){
		$("#school_header").text("You better not be putting your high school.");
	}else if(schoolnum==2){
		$("#school_header").text("Seriously? Three schools? Okay, einstein.");
		$("#add_school").prop("disabled",true);
	}
	 $("article").animate({ scrollTop: 0 }, "slow");
	 schoolnum++;
})

// NAV CONTROL
$("aside > ul > li").click(function(){
	$(this).addClass("activated").siblings().removeClass("activated");
	$("section").hide();
})
$("#tab_1").click(function(){stepcounter=1; checkStep();})
$("#tab_2").click(function(){stepcounter=7; checkStep();})
$("#tab_3").click(function(){stepcounter=8; checkStep();})
$("#tab_4").click(function(){stepcounter=9; checkStep();})
$("#tab_5").click(function(){stepcounter=10; checkStep();})
$("#tab_6").click(function(){stepcounter=11; checkStep();})
$("#tab_7").click(function(){stepcounter=12; checkStep();})





function saveFields(){


	user_name = $("#personal-name-input").val();
	splitname = user_name.split(" ");
	user_email = $("#personal-email-input").val();
	user_phone = $("#personal-phone-input").val();
	user_location = $("#personal-location-input").val();
	user_link = $("#personal-link-input").val();

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

$("#settings_continue").click(function(){
	stepcounter=12; 
	checkStep();
})
$("#generate").click(function(){
	if ($('#serifyes').is(':checked')) {
		$("#print_page").css("font-family","\'Lora\'");
	}else {
		$("#print_page").css("font-family","\'Lato\'");
	}
	generatePDF();
})

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
	$("#personal-name-input").val(localStorage.getItem('dataSavedName'));
	$("#personal-email-input").val(localStorage.getItem('dataSavedEmail'));
	$("#personal-phone-input").val(localStorage.getItem('dataSavedPhone'));
	$("#personal-location-input").val(localStorage.getItem('dataSavedLocation'));
	$("#personal-link-input").val(localStorage.getItem('dataSavedUrl'));

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

$("#clear_localstorage").click(function(){
	localStorage.clear();
	location.reload();
})

user_job_location = "";
user_job_time = "";
user_emp_desc = "";
user_job_title = "";
user_job_desc = "";
user_employer2 = "";
user_job_location2 = "";
user_job_time2 = "";
user_emp_desc2 = "";
user_job_title2 = "";
user_job_desc2 = "";
user_employer3 = "";
user_job_location3 = "";
user_job_time3 = "";
user_emp_desc3 = "";
user_job_title3 = "";
user_job_desc3 = "";
user_degree = "";
user_school = "";
user_school_location = "";
user_school_grad = "";
user_degree2 = "";
user_school2 = "";
user_school_location2 = "";
user_school_grad2 = "";
user_degree3 = "";
user_school3 = "";
user_school_location3 = "";
user_school_grad3 = "";

