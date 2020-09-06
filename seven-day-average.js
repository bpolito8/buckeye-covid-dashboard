var sevenDayAverage = [
    {
        t: new Date("2020-08-26T00:00:00.000-04:00"),
        y: 2.13
    },
    {
        t: new Date("2020-08-27T00:00:00.000-04:00"),
        y: 2.77
    },
    {
        t: new Date("2020-08-31T00:00:00.000-04:00"),
        y: 4.30
    },
    {
        t: new Date("2020-09-01T00:00:00.000-04:00"),
        y: 4.45
    },
    {
        t: new Date("2020-09-02T00:00:00.000-04:00"),
        y: 4.95
    },
    {
        t: new Date("2020-09-03T00:00:00.000-04:00"),
        y: 5.48
    },
    {
        t: new Date("2020-09-04T00:00:00.000-04:00"),
        y: 5.81
    }
];

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