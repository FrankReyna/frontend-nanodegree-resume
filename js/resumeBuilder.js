   var bio = {
	"name": "Francisco Reyna",
	"role": "IT Specialist / Software Developer",
	"contacts": {
		"mobile": "302-450-8694",
		"email": "josefreyna@gmail.com",
		"github": "FrankReyna",
		"twitter": "@EseFrankiie",
		"location": "Berkeley,CA"

	},
	"welcomeMessage": "Modus ponens",
	"skills": [
		"Computer Networking", "Management", "Systems Analyst"
	],
	"bioPic": "images/frank1.jpg",

    };

    //bio.display = function(){
    	//for (i in bio){
    		var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
    		$("#header").append(formattedHeaderName);
    		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    		$("#header").append(formattedRole);





    		var formattedMobile =HTMLmobile.replace("%data%", bio.contacts.mobile);
    		
    		//$("#header").append(formattedMobile);

    		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    		//$("#header").append(formattedEmail);
    		var formattedTwit = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    		var formattedGit= HTMLgithub.replace("%data%",bio.contacts.github)
    		var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
    		var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    		$("#header").append(formattedWelcome);
    		var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
    		$("#header").append(formattedBiopic);
    		
    		var formattedContacts = formattedMobile + formattedEmail + formattedTwit + formattedGit + formattedlocation;
    		$("#topContacts").append(formattedContacts);
    		$("#footerContacts").prepend(formattedContacts);

    	//}
    //};

  	if(bio.skills.length > 0) {
  	$("#header").append(HTMLskillsStart);

  	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  	  $("#skills").append(formattedSkill);
  	  
  	  formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  	  $("#skills").append(formattedSkill);
  	  
  	  formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  	  $("#skills").append(formattedSkill);

  	
  	};

  var education = {
	"schools": [
	    {
			"name": "Wilmington University",
			"location": " Dover, DE, US",
			"degree": "In School for BA",
			"major": "Information Systems Management"
		}

	],

	"onlineCourses": [{
			"Math": "Mathematical Thinking",
			"school": "Stanford"
		},

		{
			"Computational Structures 1": "Digital Circuits",
			"Computational Structures 2": "Computer Architecture",
			"school": "MITx"
		},

		{
			"Neuroscience": "Computational Neuroscience",
			"school": "University of Washington"
		},

		{
			"Neuroscience": "Foundational Neuroscience",
			"school": "Duke University"
		},

		{
			"Algorithms": "Algorithms, Part 1",
			"school": "Princeton"
		},

		{
			"Computer Networks": "Networks",
			"school": "University of Washington"

		}
	]
};

   function displayEducation() {
   	for (i in education.schools) {
   		$("#education").append(HTMLschoolStart);

   		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
   		  $(".education-entry:last").append(formattedSchoolName);

   		  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
   		  $(".education-entry:last").append(formattedSchoolDegree);

   		  var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
   		  $(".education-entry:last").append(formattedMajor);

   		  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
   		  $(".education-entry:last").append(formattedSchoolLocation);


   	}
   };
   displayEducation();
   

   var work = {
   	"jobs" : [
   	 {
       "employer" : " Family Wellness Center",
       "title" : "Medical Assistant",
       "location" : " Dover, DE",
       "dates" : " 2009-2010",
       "description": " Setup patient schedule, checked insurances, checked and recorded vitals : Blood pressure, weight, height, and annotated initial complaint on chart."
      },
      {
       "employer" : "Careys Diesel", 
       "title" : "Operations Manager",
       "location" : " Leipsic, DE",
       "dates" :"2011 - August 15, 2015", 
       "description" : " IT- Maintained and troubleshooted all electronic equipment enduser and employee machines, including company servers. Setup Disaster recovery and backup system of all important data to remote hardisk using VMware to virtualize some files to Also backup to Cloud. Configured all troubleshooting devices for Engines and reprogrammed engines acording to specs and region. Designed and implemented company websites. Leveraged Cost and Benefit of technology. Troubleshooted Engine's, and Gensets using software and electronic diagnostic tools using applied Electronics Theory. From ECMs to Individual components such as sensors and diesel injectors, Handled warranty reports and submissions and approvals. Scheduled work and invoiced from start of job to end, scheduled and communicated with technicians to most effecient work flow. Made sure vendors were paid and allocated capital to also do payroll for company. Also became Legal Rep for company, where setup collections for invoices past 90 days. - Loved This Job currently troubleshoot and update website and sell Marine Engines and Gensets"
      }

   ]
   };

function displayWork(){
  		for(job in work.jobs){
  		$("#workExperience").append(HTMLworkStart);

  		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  		var formattedEmployerTitle = formattedEmployer + formattedTitle;
  		        $(".work-entry:last").append(formattedEmployerTitle);
  		
  		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  		  		$(".work-entry:last").append(formattedWorkDates);
  		
  		var formatted_address1 = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  		  		$(".work-entry:last").append(formatted_address1);
  		
  		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  	  		    $(".work-entry:last").append(formattedWorkDescription);
  	 }
  	};

  	displayWork(); 

  	$("#mapDiv").append(googleMap);
    

  



  	






  
   