var onCampusDaily = [
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
        y: 5.7
    },
    {
        t: new Date("2020-09-01"),
        y: 3.34
    },
    {
        t: new Date("2020-09-02"),
        y: 3.47
    }];
var onCampusTests = [
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
        y: 2828
    },
    {
        t: new Date("2020-09-01"),
        y: 2720
    },
    {
        t: new Date("2020-09-02"),
        y: 2310
    }];

    var oncampuscontext = document.getElementById('on-campus-data').getContext('2d');
    var oncampuschart = new Chart(oncampuscontext, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Positivity',
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