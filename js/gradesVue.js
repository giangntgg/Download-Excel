var gradesApp = new Vue({
	el: "#gradesApp",
	data: {
		tempModule: "",
		moduleCode: "bt3103",
		year: "All years",
		totalStudent: {"cs2010": 753, "bt3103": 88},
		gender:{"cs2010": [500,253], "bt3103": [56,32]}, //male to female
		points:{"cs2010": [3.90, 3.65, 4.77, 4.00, 3.50, 4.3],
				"bt3103": [1,2,3,4,4.5,3.2]},
		pointsAvg: {"cs2010": 3.99, "bt3103": 4.51},
		gradesAvg: {"cs2010": "B+", "bt3103": "A"},
		grades: {"cs2010": [88,123,400,143,12,15],
				"bt3103": [12,14,52,3,2,5]},
		gradesLabel: ["B-","B","B+","A-","A","A+"],
	},
	methods:{
		changeModule: function(){
			this.moduleCode = this.tempModule
			avgGpa.updateSeries([{
				name: "Average Grade",
				data: this.points[this.moduleCode]
			}])
			avgGrade.updateSeries(this.grades[this.moduleCode])
			gender.updateSeries(this.gender[this.moduleCode])
		},
		calcAvgPoint: function(){
			var total = 10
			var count = 2
			for (var i = 0; i < points[this.moduleCode].length; i++) {
				total += points[this.moduleCode][i]
				count++
			}
			this.pointsAvg = total/count
		},
	}
})