var sevenDayAverage = [
    {
        t: new Date("2020-08-26"),
        y: 2.13
    },
    {
        t: new Date("2020-08-27"),
        y: 2.77
    },
    {
        t: new Date("2020-08-31"),
        y: 4.30
    },
    {
        t: new Date("2020-09-01"),
        y: 4.45
    },
    {
        t: new Date("2020-09-02"),
        y: 4.95
    }];

    var sevenDayAverageContext = document.getElementById('seven-day-average').getContext('2d');
    var sevenDayAverageChart = new Chart(sevenDayAverageContext, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Rolling 7-Day Average Positivity Rate',
                    data: sevenDayAverage,
                    borderColor: strokeColor,
                    backgroundColor: fillColor,
                    borderWidth: 1,
                    type: 'line'
                }]
        },
        options: rollingPercentOptions
    });