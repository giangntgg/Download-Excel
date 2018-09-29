var options = {
            chart: {
                height: 400,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            series: [{
                name: 'Score',
                data: feedbackApp.t3[feedbackApp.moduleCode]
            }],
            title: {
                text: 'The teacher has increased my interest in the subject.'
            },
            xaxis: {
                categories: ['1','2','3','4','5'],
            },
            yaxis: {
                
            },
            tooltip: {

            }
        }

       var feedbackBart3 = new ApexCharts(
            document.querySelector("#feedbackBart3"),
            options
        );
        
        feedbackBart3.render();