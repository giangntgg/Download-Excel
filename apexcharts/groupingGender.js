var options = {
            chart: {
                width: 380,
                type: 'pie',
            },
            colors: ['#ff3434', '#1535d4'],
            series: groupingsApp.gender,
            labels: ["Male","Female"],
            fill:{

            },
            stroke: {
                width: 4
            },
            dataLabels: {
                enabled: false
            }
        }

        var gender = new ApexCharts(
            document.querySelector("#gender"),
            options
        );

        gender.render();