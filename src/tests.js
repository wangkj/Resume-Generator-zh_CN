function loadTestData(){

	$("#pdf_job2, #pdf_job3").hide();


	//PDF Testing, filler info
	$("#pdf_name").html("Mitch A. Samuels");
	$("#pdf_email").html("Mitch@mitchs.co");
	$("#pdf_phone").html("507.330.5897");
	$("#pdf_location").html("Madison, WI");
	$("#pdf_link").html("<a href='#'>http://linkedin.com/in/mitchas</a>");
	$("#pdf_statement_title").html("Professional Summary");
	$("#pdf_statement").html("Bacon ipsum dolor amet tenderloin ball tip porchetta pork loin, strip steak fatback picanha shankle swine rump boudin biltong doner shoulder. Meatball flank cow, short loin chuck cupim pork loin picanha kielbasa corned beef sirloin doner brisket. Ham hock bresaola porchetta beef ribs capicola. Alcatra pancetta jerky frankfurter corned beef, pork belly andouille pig rump bacon. Picanha meatball sausage, spare ribs cow ham hock short loin. Ball tip ribeye short ribs fatback chicken ground round pork chop short loin beef ribs kevin landjaeger ham tri-tip. Ham hock bresaola porchetta beef ribs capicola. Alcatra pancetta jerky frankfurter corned beef, pork belly andouille pig rump bacon. Ham hock bresaola porchetta beef ribs capicola. Alcatra pancetta jerky frankfurter corned beef, pork belly.");
	
	$("#job_1_employer").html("Google, Inc.");
	$("#job_1_loc").html("Mountain View, California");
	$("#job_1_time").html("July 2012 - May 2014");
	$("#pdf_job1_emp_desc").html("Google is an American multinational corporation specializing in Internet-related services and products. These include online advertising technologies, search, cloud computing, and software.");
	$("#job1_title").html("Front End Developer");
	$("#pdf_job1_job_desc").html("Bacon ipsum dolor amet tenderloin ball tip porchetta pork loin, strip <a href='#'>steak fatback</a> picanha shankle swine rump boudin biltong doner shoulder. Meatball flank cow, short loin chuck cupim pork loin picanha kielbasa corned beef sirloin doner brisket. Ham hock bresaola porchetta beef ribs capicola. Alcatra pancetta jerky frankfurter corned beef, pork belly andouille pig rump bacon.<br/><b>Responsibilities Included</b><ul><li>Bacon ipsum dolor amet tenderloin ball tip porchetta pork loin, strip steak fatback picanha shankle</li><li>wine rump boudin biltong doner shoulder. Meatball flank cow, short loin chuck cupim pork loin picanha kielbasa corned beef sirloin doner brisket.</li><li>Ham hock bresaola porchetta beef ribs capicola. Alcatra pancetta jerky frankfurter corned beef, pork belly andouille pig rump</li></ul>Abiltong doner shoulder. Meatball flank cow, short loin chuck cupim pork loin picanha kielbasa corned beef sirloin doner brisket. Ham hock bresaola porchetta beef ribs capicola. Alcatra pancetta jerky frankfurter corned beef, pork belly andouille pig rump bacon.");
	
	// $("#job_2_employer").html("Google, Inc.");
	// $("#job_2_loc").html("Mountain View, California");
	// $("#job_2_time").html("July 2012 - May 2014");
	// $("#pdf_job2_emp_desc").html("Google is an American multinational corporation specializing in Internet-related services and products. These include online advertising technologies, search, cloud computing, and software.");
	// $("#job2_title").html("Front End Developer");
	// $("#pdf_job2_job_desc").html("Bacon ipsum dolor amet tenderloin ball tip porchetta pork loin, strip <a href='#'>steak fatback</a> picanha shankle swine rump boudin biltong doner shoulder. Meatball flank cow, short loin chuck cupim pork loin picanha kielbasa corned beef sirloin doner brisket. Ham hock bresaola porchetta beef ribs capicola. Alcatra pancetta jerky frankfurter corned beef, pork belly andouille pig rump bacon.<br/><b>Responsibilities Included</b><ul><li>Bacon ipsum dolor amet tenderloin ball tip porchetta pork loin, strip steak fatback picanha shankle</li><li>wine rump boudin biltong doner shoulder. Meatball flank cow, short loin chuck cupim pork loin picanha kielbasa corned beef sirloin doner brisket.</li><li>Ham hock bresaola porchetta beef ribs capicola. Alcatra pancetta jerky frankfurter corned beef, pork belly andouille pig rump</li></ul>Abiltong doner shoulder. Meatball flank cow, short loin chuck cupim pork loin picanha kielbasa corned beef sirloin doner brisket. Ham hock bresaola porchetta beef ribs capicola. Alcatra pancetta jerky frankfurter corned beef, pork belly andouille pig rump bacon.");
	


	$("#pdf_degree").html("Bachelor of Science in Computer Science");
	$("#pdf_school").html("University of Wisconsin-Madison");
	$("#pdf_school_loc").html("Madison, WI");
	$("#pdf_graduation").html("2017");
	$("#pdf_degree2").html("Bachelor of Arts in Communications");
	$("#pdf_school2").html("Berekely University");
	$("#pdf_school_loc2").html("Berkely, CA");
	$("#pdf_graduation2").html("2012");
	$("#pdf_degree3").html("Doctor of Philosophy in Organizational Psychology");
	$("#pdf_school3").html("University of Minnesota-Twin Cities");
	$("#pdf_school_loc3").html("Minneapolis, MN");
	$("#pdf_graduation3").html("2014");

	user_skills="HTML, CSS, Javascript, PHP, Django, Python, Bootstrap, Wordpress, Angular, Ionic, Java, Photoshop, Indesign, Dketch, Evernote, Git/Github"
	user_skills_split = user_skills.replace(/,/g, '<span class="skillbullet"> \u2219 </span>');
	$("#pdf_skills").html(user_skills_split);

}