
var header = document.getElementById("welcome-header");

var headerInterval;
var values;
let calculateBounds = function(){
    normalLeftGap = (document.body.offsetWidth-header.offsetWidth)/2;
    values = {
        start: -(normalLeftGap+header.offsetWidth),
        end: document.body.offsetWidth-normalLeftGap,
        step:4,
        delay:26
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
    }, values.delay);
}
calculateBounds();
screenResized();

const topLeftElement = document.getElementById("date-time");

var writeTime = function(){
    setInterval(function(){
        const today = new Date();
        const jDate = jalaali.toJalaali(today.getFullYear(), today.getMonth() + 1, today.getDate());
        const formattedDate = `${jDate.jy}/${jDate.jm}/${jDate.jd}`;
        const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        const jalaliDateTime = `${formattedDate} ${time}`;
        topLeftElement.textContent = jalaliDateTime;
    }, 1000);
};

// Function to handle tab switching
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set default tab to open on page load
document.getElementById("projects").style.display = "block";

