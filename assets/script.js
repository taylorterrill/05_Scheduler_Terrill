$(document).ready(function () {
    var now;
    var currentDate = $('#currentDay');
    var currentHour = moment().hour();

    // Display current date and time in header
    setInterval(() => {
        var now = moment().format('ddd, MMM Do YYYY, h:mm:ss a');
        currentDate.text(now);
    }, 1000);    
    
    // sets styling for hour rows based on current time
    for (var i=9; i < 18; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past')
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present')
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add('future')
        }
    }
    
    // local storage
    $('.saveBtn').click(function () {
        var task9 = document.getElementById('9').value;
        var task10 = document.getElementById('10').value;
        var task11 = document.getElementById('11').value;
        var task12 = document.getElementById('12').value;
        var task13 = document.getElementById('13').value;
        var task14 = document.getElementById('14').value;
        var task15 = document.getElementById('15').value;
        var task16 = document.getElementById('16').value;
        var task17 = document.getElementById('17').value;

        localStorage.setItem('text9', task9);
        localStorage.setItem('text10', task10);
        localStorage.setItem('text11', task11);
        localStorage.setItem('text12', task12);
        localStorage.setItem('text13', task13);
        localStorage.setItem('text14', task14);
        localStorage.setItem('text15', task15);
        localStorage.setItem('text16', task16);
        localStorage.setItem('text17', task17);
    }) 

    var text9 = localStorage.getItem('text9');
    var text10 = localStorage.getItem('text10');
    var text11 = localStorage.getItem('text11');
    var text12 = localStorage.getItem('text12');
    var text13 = localStorage.getItem('text13');
    var text14 = localStorage.getItem('text14');
    var text15 = localStorage.getItem('text15');
    var text16 = localStorage.getItem('text16');
    var text17 = localStorage.getItem('text17');

    document.getElementById('9').value = text9
    document.getElementById('10').value = text10
    document.getElementById('11').value = text11
    document.getElementById('12').value = text12
    document.getElementById('13').value = text13
    document.getElementById('14').value = text14
    document.getElementById('15').value = text15
    document.getElementById('16').value = text16
    document.getElementById('17').value = text17
    
})