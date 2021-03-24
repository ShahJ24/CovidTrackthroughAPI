/******* Use of third Party Api *****/

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Percentage of Age Groups Affected by Corona Virus "
	},
	axisY:{
		includeZero: false
	},
	data: [{        
		type: "line",
      	indexLabelFontSize: 15,
        labelFontSize:15,
		dataPoints: [
			{ label: "Infants: < 1", y: 2 ,indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross"},
			{ label: "Children: < 18", y:7 },
			{ label: "Adults: 18+", y: 26 },
			{ label: "Elderly: 65+", y: 65 ,indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle" },
		]
	}]
});
chart.render();

}
