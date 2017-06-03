var onmsHost = "demo.opennms.org",
        onmsPort = 443,
        onmsUsername = 'demo',
        onmsPassword = 'demo',
        end = Date.now(),
        start = end - (1 * 2 * 60 * 1000), // 2 Minutes ago
        resolution = 5;


function getBaseHref() {
  return "https://" + onmsHost + ":" + onmsPort;
}

/*
 * This function get all date from timestamp
 */
function dataFromTimestamp(timestamp){
    var d = new Date(timestamp);

    // Time
    var h = addZero(d.getHours());              //hours
    var m = addZero(d.getMinutes());            //minutes
    var s = addZero(d.getSeconds());            //seconds

    // Date
    var da = d.getDate();                       //day
    var mon = d.getMonth() + 1;                 //month
    var yr = d.getFullYear();                   //year
    var dw = d.getDay();                        //day in week

    // Readable feilds
    months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    var monName = months[d.getMonth()];         //month Name
    var time = h + ":" + m + ":" + s;           //full time show
    var thisDay = da + "/" + mon + "/" + yr;    //full date show

    var dateTime = {
        seconds : s,
        minutes : m,
        hours : h,
        dayInMonth : da,
        month : mon,
        year : yr,
        dayInTheWeek : dw,
        monthName : monName,
        fullTime : time,
        fullDate : thisDay
    };
    return dateTime;

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
}
