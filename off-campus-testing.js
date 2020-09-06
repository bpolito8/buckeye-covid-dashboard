var offCampusDaily = [
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
        y: 9.66
    },
    {
        t: new Date("2020-09-01T00:00:00.000-04:00"),
        y: 10.83
    },
    {
        t: new Date("2020-09-02T00:00:00.000-04:00"),
        y: 11.03
    },
    {
        t: new Date("2020-09-03T00:00:00.000-04:00"),
        y: 9.61
    },
    {
        t: new Date("2020-09-04T00:00:00.000-04:00"),
        y: 5.45
    }
];
var offCampusTests = [
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
        y: 916
    },
    {
        t: new Date("2020-09-01T00:00:00.000-04:00"),
        y: 799
    },
    {
        t: new Date("2020-09-02T00:00:00.000-04:00"),
        y: 766
    },
    {
        t: new Date("2020-09-03T00:00:00.000-04:00"),
        y: 790
    },
    {
        t: new Date("2020-09-04T00:00:00.000-04:00"),
        y: 1457
    }
];

    var offcampuscontext = document.getElementById('off-campus-data').getContext('2d');
    var offcampuschart = new Chart(offcampuscontext, {
        type: 'bar',
        data: {
            datasets: [
                {
                    label: 'Positivity (%)',
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