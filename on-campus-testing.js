var onCampusDaily = [
    {
        t: new Date("2020-08-26T00:00:00.000-04:00"),
        y: 3.74
    },
    {
        t: new Date("2020-08-27T00:00:00.000-04:00"),
        y: 5.86
    },
    {
        t: new Date("2020-08-31T00:00:00.000-04:00"),
        y: 5.7
    },
    {
        t: new Date("2020-09-01T00:00:00.000-04:00"),
        y: 3.34
    },
    {
        t: new Date("2020-09-02T00:00:00.000-04:00"),
        y: 3.47
    },
    {
        t: new Date("2020-09-03T00:00:00.000-04:00"),
        y: 4.02
    },
    {
        t: new Date("2020-09-04T00:00:00.000-04:00"),
        y: 4.33
    }
];
var onCampusTests = [
    {
        t: new Date("2020-08-26T00:00:00.000-04:00"),
        y: 2111
    },
    {
        t: new Date("2020-08-27T00:00:00.000-04:00"),
        y: 1463
    },
    {
        t: new Date("2020-08-31T00:00:00.000-04:00"),
        y: 2828
    },
    {
        t: new Date("2020-09-01T00:00:00.000-04:00"),
        y: 2720
    },
    {
        t: new Date("2020-09-02T00:00:00.000-04:00"),
        y: 2310
    },
    {
        t: new Date("2020-09-03T00:00:00.000-04:00"),
        y: 1601
    },
    {
        t: new Date("2020-09-04T00:00:00.000-04:00"),
        y: 199
    }
];

    var oncampuscontext = document.getElementById('on-campus-data').getContext('2d');
    var oncampuschart = new Chart(oncampuscontext, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Positivity (%)',
                data: onCampusDaily,
                borderColor: strokeColor,
                backgroundColor: fillColor,
                borderWidth: 1,
                yAxisID: 'a',
                type: 'line'
            },
            {
                label: 'Tests',
                data: onCampusTests,
                backgroundColor: secondaryFillColor,
                borderColor: secondaryStrokeColor,
                borderWidth: 1,
                yAxisID: 'b'
            }]
        },
        options: options
    });