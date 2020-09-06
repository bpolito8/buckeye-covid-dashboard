var offCampusDaily = [
    {
        t: new Date("2020-08-26"),
        y: 3.74
    },
    {
        t: new Date("2020-08-27"),
        y: 5.86
    },
    {
        t: new Date("2020-08-31"),
        y: 9.66
    },
    {
        t: new Date("2020-09-01"),
        y: 10.83
    },
    {
        t: new Date("2020-09-02"),
        y: 11.03
    },
    {
        t: new Date("2020-09-03"),
        y: 9.61
    }
];
var offCampusTests = [
    {
        t: new Date("2020-08-26"),
        y: 2111
    },
    {
        t: new Date("2020-08-27"),
        y: 1463
    },
    {
        t: new Date("2020-08-31"),
        y: 916
    },
    {
        t: new Date("2020-09-01"),
        y: 799
    },
    {
        t: new Date("2020-09-02"),
        y: 766
    },
    {
        t: new Date("2020-09-03"),
        y: 790
    }
];

    var offcampuscontext = document.getElementById('off-campus-data').getContext('2d');
    var offcampuschart = new Chart(offcampuscontext, {
        type: 'bar',
        data: {
            datasets: [
                {
                    label: 'Positivity',
                    data: offCampusDaily,
                    borderColor: strokeColor,
                    backgroundColor: fillColor,
                    borderWidth: 1,
                    yAxisID: 'a',
                    type: 'line'
                },
                {
                label: 'Tests',
                data: offCampusTests,
                backgroundColor: secondaryFillColor,
                borderColor: secondaryStrokeColor,
                borderWidth: 1,
                yAxisID: 'b'
            }]
        },
        options: options
    });