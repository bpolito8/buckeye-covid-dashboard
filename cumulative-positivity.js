var cumulativePositivity = [
    {
        t: new Date("2020-08-26"),
        y: 1.81
    },
    {
        t: new Date("2020-08-27"),
        y: 2.15
    },
    {
        t: new Date("2020-08-31"),
        y: 3.13
    },
    {
        t: new Date("2020-09-01"),
        y: 3.38
    },
    {
        t: new Date("2020-09-02"),
        y: 3.43
    },
    {
        t: new Date("2020-09-03"),
        y: 3.60
    },
    {
        t: new Date("2020-09-04"),
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