/* Setting 'target date' */
/* .getTime() returns the value of the date in 'milliseconds' */
var countDate = new Date('Jan 1, 2022 00:00:00').getTime();


function newYear() {
    /* Getting 'current date' */
    /* .getTime() returns the value of the date in 'milliseconds' */
    var now = new Date().getTime();

    /* getTime() values are in milliseconds
        therefore, gap is equal to the difference between the dates in milliseconds 
    */
    var gap = countDate - now;

   /* Note that gap is in milliseconds */
   /* therefore, each 'unit' of time that we divide by (or find remainder with) must be converted to milliseconds first */
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    /* (gap % day) is the 'fraction' of a 'day' */
    /* (gap % hour) is the 'fraction' of a 'hour' */
    /* (gap % minute) is the 'fraction' of a 'minute' */
    /* using Math.floor() (and NOT Math.ceil() or Math.round() )
            for example, when you divide the 'fraction' of a day by an hour, you get 
                'whole number of hours' + 'fraction of an hour'
            for 'h', we only want the 'whole' number of hours, 
                so we truncate the value using Math.floor() to remove the 'fraction of an hour'
            that fraction of an hour won't be lost
                as that 'fraction of an hour' will be used to calculate m
                and the 'fraction of a minute' will be used to calculate s
    */
    /* To get the 'whole  number' part of days */
    var d = Math.floor(gap / (day));
    /* To get the 'whole  number' part of hours */
    var h = Math.floor((gap % day) / (hour));
    /* To get the 'whole  number' part of minutes */
    var m = Math.floor((gap % hour) / (minute));
    /* To get the 'whole  number' part of seconds */
    var s = Math.floor((gap % minute) / (second));

    /* Assigning the calculated time values to the day, hour, minute and second divs*/
    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}


/* setInterval will execute the function every 1000 milliseconds (1 second) */
setInterval(function(){
    newYear();
}, 1000);

