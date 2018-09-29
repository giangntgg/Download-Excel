var options = {
            chart: {
                height: 400,
                type: 'bar',
                dropShadow: {
                  enabled: true,
                  blur: 8,
                  top: 8,
                  opacity: 0.1
                }
            },
            plotOptions: {
                bar: {
                  barHeight: '90%',
                    horizontal: true,
                    dataLabels: {
                        position: 'bottom'
                    },
                }
            },
            title: {
                text: 'What is your overall opinion of the module?'
            },
            colors: ['#00E396'],
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    colors: ['#fff']
                },
                formatter: function(val, opt) {
                    return opt.globals.labels[opt.dataPointIndex] + ":  " + val
                },
                offsetX: 0,
                dropShadow: {
                  enabled: true
                }
            },
            series: [{
                name: 'Score',
                data: feedbackApp.t1[feedbackApp.moduleCode],
            }],
            stroke: {
                lineCap: 'round',
                width: 2,
              colors: ['#fff']
            },
            xaxis: {
                categories: ['1','2','3','4','5'],
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            fill: {
                //type: 'gradient',
                gradient: {
                  gradientToColors: ['#008FFB'],
                  stops: [40, 99, 100]
                }
            }
        }

       var feedbackBart1 = new ApexCharts(
            document.querySelector("#feedbackBart1"),
            options
        );
        
        feedbackBart1.render();