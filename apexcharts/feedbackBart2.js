var options = {
            chart: {
                height: 800,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                },
            }  
            },
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: '12px',
                    colors: ['#fff']
                }
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['#fff']
            },
            title: {
                text: 'The grade that I am most likely to get in the module is: '
            },
            series: [{
                name: '1',
                data: feedbackApp.t2_1[feedbackApp.moduleCode],
            },{
                name: '2',
                data: feedbackApp.t2_2[feedbackApp.moduleCode],
            },{
                name: '3',
                data: feedbackApp.t2_3[feedbackApp.moduleCode],
            },{
                name: '4',
                data: feedbackApp.t2_4[feedbackApp.moduleCode],
            },{
                name: '5',
                data: feedbackApp.t2_5[feedbackApp.moduleCode],
            }],
            xaxis: {
                categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
            },
            labels: ['1','2','3','4','5'],           
        }
    

       var feedbackBart2 = new ApexCharts(
            document.querySelector("#feedbackBart2"),
            options
        );
        
        feedbackBart2.render();