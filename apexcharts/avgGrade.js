var options = {
            chart: {
                width: 380,
                type: 'pie',
            },
            series: gradesApp.grades[gradesApp.moduleCode],
            labels: gradesApp.gradesLabel,
            fill:{

            },
            stroke: {
                width: 4
            },
            dataLabels: {
                enabled: false
            }
        }

        var avgGrade = new ApexCharts(
            document.querySelector("#avgGrade"),
            options
        );

        avgGrade.render();