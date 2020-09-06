var cumulativePositivity = [
    {
        t: new Date("2020-08-26T00:00:00.000-04:00"),
        y: 1.81
    },
    {
        t: new Date("2020-08-27T00:00:00.000-04:00"),
        y: 2.15
    },
    {
        t: new Date("2020-08-31T00:00:00.000-04:00"),
        y: 3.13
    },
    {
        t: new Date("2020-09-01T00:00:00.000-04:00"),
        y: 3.38
    },
    {
        t: new Date("2020-09-02T00:00:00.000-04:00"),
        y: 3.43
    },
    {
        t: new Date("2020-09-03T00:00:00.000-04:00"),
        y: 3.60
    },
    {
        t: new Date("2020-09-04T00:00:00.000-04:00"),
        y: 3.71
    }
];

    var cumulativePositivityContext = document.getElementById('cumulative-positivity').getContext('2d');
    var cumulativePositivityChart = new Chart(cumulativePositivityContext, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Cumulative Positivity Rate',
                    data: cumulativePositivity,
                    borderColor: strokeColor,
                    backgroundColor: fillColor,
                    borderWidth: 1,
                    type: 'line'
                }]
        },
        options: rollingPercentOptions
    });