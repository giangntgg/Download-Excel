var feedbackApp = new Vue({
	el: "#gradesApp",
	data: {
		tempModule: "",
		moduleCode: "bt3103",
		year: "All years",
		t1: {"cs2010": [400, 470, 540, 1200, 1380], "bt3103": [40, 40, 54, 1205, 130]},
		t2_1:{"cs2010": [44, 55, 41, 64, 22, 43, 21], "bt3103": [77, 20, 75, 46, 35, 43, 29]},
		t2_2:{"cs2010": [42, 14, 63, 86, 23, 54, 38], "bt3103": [64, 42, 43, 65, 86, 12, 87]},
		t2_3:{"cs2010": [32, 75, 32, 98, 43, 65, 76], "bt3103": [12, 32, 75, 43, 35, 57, 21]},
		t2_4:{"cs2010": [54, 55, 76, 64, 84, 43, 32], "bt3103": [77, 35, 32, 86, 32, 76, 87]},
		t2_5:{"cs2010": [87, 21, 67, 22, 56, 78, 32], "bt3103": [21, 67, 32, 89, 56, 43, 67]},
		t3:{"cs2010": [400, 430, 540, 580, 1200], "bt3103": [643,235,657,483,425,900]},
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