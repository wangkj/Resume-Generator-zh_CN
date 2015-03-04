$( document ).ready(function() {


	//Statement Character Count
	var text_max = 800;
    $('#statement_remaining').html(text_max);

    $('#personal_statement_input').keyup(function() {
        var text_length = $('#personal_statement_input').val().length;
        var text_remaining = text_max - text_length;

        $('#statement_remaining').html(text_remaining);
    });




});

// NAV CONTROL
$("aside > ul > li").click(function(){
	$(this).addClass("activated").siblings().removeClass("activated");
})
$("aside > ul > li").click(function(){
	var clicked = $(this).index();
	$("section").hide();
	$("section").eq(clicked).show();
})



//Inputs control
$('#name_block').find('.next').click(function(){
	saveFields();
	var splitname = user_name.split(" ");
	$(".first_name_here").text(splitname[0]);
	$("#name_block").hide();
	$("#email_block").show();
	$("#personal-email-input").focus();
})
$('#email_block').find('.next').click(function(){
	saveFields();
	$("#email_block").hide();
	$("#phone_block").show();
	$("#personal-phone-input").focus();
})
$('#phone_block').find('.next').click(function(){
	saveFields();
	$("#phone_block").hide();
	$("#location_block").show();
	$("#personal-location-input").focus();
})
$('#location_block').find('.next').click(function(){
	saveFields();
	$("#location_block").hide();
	$("#link_block").show();
	$("#personal-link-input").focus();
})
$('#link_block').find('.next').click(function(){
	saveFields();
	$(".full_name_here").text(user_name);
	$(".email_here").text(user_email);
	$(".phone_here").text(user_phone);
	$(".location_here").text(user_location);
	$(".link_here").text(user_link);
	$("#link_block").hide();
	$("#location_personal_overview").show();
})

$('#location_personal_overview').find('.next').click(function(){
	$("#personal_information").hide();
	$("#location_personal_overview").hide();
	$("#name_block").show();
	$("#personal_statement").show();
	$("#tab_2").addClass("activated");
	$("#tab_1, #tab_3, #tab_4, #tab_5, #tab_6").removeClass("activated");
})

$('#personal_statement').find('.next').click(function(){
	saveFields();
	$("#personal_statement").hide();
	$("#work_experience").show();
	$("#tab_3").addClass("activated");
	$("#tab_1, #tab_2, #tab_4, #tab_5, #tab_6").removeClass("activated");
})

$('#work_experience').find('.next').click(function(){
	saveFields();
	$("#work_experience").hide();
	$("#education").show();
	$("#tab_4").addClass("activated");
	$("#tab_1, #tab_2, #tab_3, #tab_5, #tab_6").removeClass("activated");
})

$('#education').find('.next').click(function(){
	saveFields();
	$("#education").hide();
	$("#skills").show();
	$("#tab_5").addClass("activated");
	$("#tab_1, #tab_2, #tab_3, #tab_4, #tab_6").removeClass("activated");
})

$('#skills').find('.next').click(function(){
	saveFields();
	$("#skills").hide();
	$("#finished").show();
	$("#tab_6").addClass("activated");
	$("#tab_1, #tab_2, #tab_3, #tab_4, #tab_5").removeClass("activated");
})



// Save all inputs, called at EVERY continue click
function saveFields(){
	user_name = $("#personal-name-input").val();
	user_email = $("#personal-email-input").val();
	user_phone = $("#personal-phone-input").val();
	user_location = $("#personal-location-input").val();
	user_link = $("#personal-link-input").val();

	user_statement = $("#personal_statement_input").val();

	user_employer = $("#employer").val();
	user_job_location = $("#location").val();
	user_job_time = $("#time").val();
	user_emp_desc = $("#employer_desc").val();
	user_job_title = $("#title").val();
	user_job_desc = $("#desc").val();

	user_degree = $("#degree").val();
	user_school = $("#school").val();
	user_school_location = $("#school_location").val();
	user_school_grad = $("#graduation").val();

	user_skills = $("#skillsinput").val();

}

// When button is clicked, call function to generate pdf
$("#generate").click(function(){
	generatePDF();
})
// Actual pdf generation. Fill in text, print window.
function generatePDF(){
	$("#pdf_name").text(user_name);
	$("#pdf_email").text(user_email);
	$("#pdf_phone").text(user_phone);
	$("#pdf_location").text(user_location);
	$("#pdf_link").text(user_link);
	$("#pdf_statement").text(user_statement);
	$("#job_1_employer").text(user_employer);
	$("#job_1_loc").text(user_job_location);
	$("#job_1_time").text(user_job_time);
	$("#pdf_job1_emp_desc").text(user_emp_desc);
	$("#job1_title").text(user_job_title);

	user_job_desc_split = user_job_desc.replace(/\*/g, ' \u2219');
	user_job_desc_lines = user_job_desc_split.replace(/\n\r?/g, '<br/>');
	$("#pdf_job1_job_desc").html(user_job_desc_lines);
	$("#pdf_degree").text(user_degree);
	$("#pdf_school").text(user_school);
	$("#pdf_school_loc").text(user_school_location);
	$("#pdf_graduation").text(user_school_grad);

	user_skills_split = user_skills.replace(/,/g, ' \u2219');
	$("#pdf_skills").text(user_skills_split);
	window.print();
}