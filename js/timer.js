document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
    // set time you want countdown to end
    var target_date  = new Date("April 17, 2015").getTime();
    // variables for time units
    var d, h, m, s;
    // input into tag element
    var countdown = document.getElementById("timer");
    // have the code run every second
    setInterval (function () {
        // get amount of second between now and target date
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
        // determine amount of days, hours, minutes, seconds remaining
          // as a side note parseInt parses a string and brings it back as an integer
        d = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        h = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        m = parseInt(seconds_left / 60);
        s = parseInt(seconds_left % 60);
    //format and insert into element
        countdown.innerHTML = d + "d, " + h + "h, "
            + m + "m, " + s + "s";
    }, 1000);


}
