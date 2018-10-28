var db = firebase.initializeApp({
			databaseURL: 'https://theshoeupdated.firebaseio.com/'
			}).database()

var groupingsRef = db.ref('groupings')

var dataset = []

var groupingsApp = new Vue({
	el: "#groupingsApp",
	data: {
		databaseUrl: 'https://theshoeupdated.firebaseio.com/groupings.json',
		gender: [],
		gradesPre: [],
		major: [],
		relSkills: [],
		year: [],
		groupBy: "",
		tutClass: "",
		numGroup: "",
		numStd: "",
	},
	mounted: function () { //Will start at zero if you don't update on init
        this.submit();
    },
    firebase: {
    	genderArr: db.ref('groupings').child("gender"), // loopable with v-for
    	yearArr: db.ref('groupings').child("year"), // loopable with v-for
    	majorArr: db.ref('groupings').child("major"), // loopable with v-for
    	gpaArray: db.ref('groupings').child("gpa"), // loopable with v-for
  		groupsObj: { // can use keys, but v-for doesn't loop
    		source: db.ref('groupings'),
    		asObject: true
  		}
    },
	methods:{
		// Note: As i combined the functions, you have to refresh twice to clear the input fields in the form
		submit: async function() {

			// Send data to server
			groupingsRef.child("groupBy").set(this.groupBy)
			groupingsRef.child("tut_class").set(this.tutClass)
			groupingsRef.child("numGroup").set(this.numGroup)
			// // Run python script to generate the groups
			// $.ajax({
		 //      type:'GET',
		 //      url:'https://788ru9qm0i.execute-api.ap-southeast-1.amazonaws.com/default/group3103',
		 //      cache:false,
		 //      async:'asynchronous',
		 //      crossDomain: true,
		 //      dataType:'json',
		 //      success: function(data) {
		 //        console.log(JSON.stringify(data))
		 //      },
		 //      error: function(request, status, error) {
		 //        console.log("Error: " + error)
		 //      }
		 //   });
		 	var groupsArr = []

		 	if (this.groupBy == "gender"){
		 		groupsArr = this.genderArr;
		 	} else if (this.groupBy == "major"){
		 		groupsArr = this.majorArr;
		 	} else if (this.groupBy == "year"){
		 		groupsArr = this.yearArr;
		 	} else {
		 		groupsArr = this.gpaArr;
		 	}
			// Update number of students for overview
			this.numStd = this.groupsObj["numStd"]

			// Hard code
			var idx = Number(String(this.tutClass) + String(this.numGroup))
			// Obtain json from firebase
          	dataset = JSON.parse(JSON.stringify(this.groupsObj[this.groupBy][idx]))

          	// Convert json to array
          	const resultArray = Object.keys(dataset).map(function(key) {
  					return [dataset[key]["matric"],"Y" + String(dataset[key]["year"]),dataset[key]["major"],
  					String(dataset[key]["preReqGpa"]),dataset[key]["gender"],String(dataset[key]["group"])];
						});

          	// Re set your variable (dataset should be an array)
          	dataset = resultArray
          	
          	// Only update the table if it is of the correct dimension
          	if (dataset[0].length == 6){
          		$('#groupings').DataTable().clear().rows.add(dataset).draw(); // Clear before adding or else will stack
          	}
			
   //        	let res = await fetch(this.databaseUrl) 
   //        	let theJson = await res.json()
		 //  	if (theJson && theJson.groupBy){
   //        		this.groupBy = theJson.groupBy
		 //  	}
		 //  	if (theJson && theJson.numGroup){
   //        		this.numGroup = theJson.numGroup
		 //  	}
		 //  	if (theJson && theJson.tut_class){
   //        		this.tutClass = theJson.tut_class
		 //  	}
		 //  	gender.updateSeries(this.gender)
			// }
		// }
		}
	}
});

var table = $(document).ready( function () {
    $('#groupings').DataTable({
	  "scrollY": '70vh',
	  "scrollCollapse": true,
	  "paging": false,
      "ordering": true,
      data: dataset,
      columns: [
            { title: "Matric Number" },
            { title: "Year" },
            { title: "Major" },
            { title: "Grades of pre requisite module" },
            { title: "Gender" },
            { title: "Group" }
      ]
    });
});


