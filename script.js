function intial(){
	 fetchData();

let tableEl = document.getElementById("table")


let data = {labels: [], population: []}

function fetchData() {


$.ajax({
		url: `https://api.population.io:80/1.0/population/1980/aged/18/`,
		success: function (apidata) {
			

			for(let i = 0; i < 5; i++){

			data.labels.push(apidata[i].country);
			data.population.push(apidata[i].total);
			// console.log(data.labels.push(apidata[i].country))
			// console.log(data.population.push(apidata[i].total))


			}


   
	new Chart(document.getElementById("doughnut-chart"), {
  
		type: 'doughnut',
		data: {
			labels: data.labels,
			datasets: [
			{
				label: "Population (millions)",
				backgroundColor: ["#f37123", "#0fad00","#a44599","#d20264","#C5007D"],
				data: data.population
			}
			]
		},
		options: {
			title: {
				display: true,
				text: 'Predicted world population (millions) in 2050'
			}
		}
	});


		},
		error: function (err) {
			// alert();
		}
	});
}


}