var header = document.getElementById("welcome-header");

var headerInterval;
var values;
let calculateBounds = function(){
    normalLeftGap = (document.body.offsetWidth-header.offsetWidth)/2;
    values = {
        start: -(normalLeftGap+header.offsetWidth),
        end: document.body.offsetWidth-normalLeftGap,
        step:6,
        delay:15,
    };
}; 
setInterval(calculateBounds,500);
function screenResized(){
    var left = values.start;
    headerInterval = setInterval(function(){
        if(left >= values.end)
            left = values.start;
        else
            left += values.step;
        header.style.left = left + 'px';
        // console.log(left);
    }, values.delay);
}
calculateBounds();
screenResized();

const topLeftElement = document.getElementById("date-time");

var writeTime = function(){
    setInterval(function(){
        // Get today's date in Gregorian format
        const today = new Date();

        // Convert to Jalali using jalaali-js functions
        const jDate = jalaali.toJalaali(today.getFullYear(), today.getMonth() + 1, today.getDate());

        // Format the Jalali date (year, month, day)
        const formattedDate = `${jDate.jy}/${jDate.jm}/${jDate.jd}`;

        // Get current time (hours, minutes, seconds)
        const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

        // Combine Jalali date and time for display
        const jalaliDateTime = `${formattedDate} ${time}`;

        topLeftElement.textContent = jalaliDateTime; // Set content of top-left element
    }, 1000);
};


  
