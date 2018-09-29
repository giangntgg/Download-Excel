var options = {
	chart: {
		height: 350,
		type: 'line',
		zoom: {
			enabled: false
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'straight'
	},
	series: [{
		name: "Average Grade",
		data: gradesApp.points[gradesApp.moduleCode],
	}],
	title: {
		text: 'Average Grade by Year',
		align: 'left'
	},
	grid: {
		row: {
		colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
		opacity: 0.5
		},
	},
	yaxis: {
		min: 0,
		max: 5,
		tickAmount: 5
	},
	xaxis: {
		categories: ['2005', '2006', '2007', '2008', '2009', '2010'],
	},
}

var avgGpa = new ApexCharts(
	document.querySelector("#avgGpa"),
	options
	);

avgGpa.render();
