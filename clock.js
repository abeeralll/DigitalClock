//setInterval(displayTime, 1000);

// // function displayTime() {

// //     const timeNow = new Date();

// //     let hoursOfDay = timeNow.getHours();
// //     let minutes = timeNow.getMinutes();
// //     let seconds = timeNow.getSeconds();
// //     let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// //     let today = weekDay[timeNow.getDay()];
// //     let months = timeNow.toLocaleString("default", {
// //         month: "long"
// //     });
// //     let year = timeNow.getFullYear();
// //     let period = "AM";

// //     if (hoursOfDay > 12) {
// //         hoursOfDay-= 12;
// //         period = "PM";
// //     }
// //     if (hoursOfDay === 0) {
// //         hoursOfDay = 12;
// //         period = "AM";
// //     }

// //     hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
// //     minutes = minutes < 10 ? "0" + minutes : minutes;
// //     seconds = seconds < 10 ? "0" + seconds : seconds;

// //     let time = hoursOfDay + ":" + minutes + ":" + seconds + period;

// //     document.getElementById('Clock').innerHTML = time + " " + today + " " + months + " " + year;

// // }
// // displayTime();

// // setInterval(displayTime1, 1000);

// // function displayTime1() {

// //     const timeNow = new Date();

// //     let hoursOfDay = timeNow.getUTCHours();
// //     let minutes = timeNow.getUTCMinutes();
// //     let seconds = timeNow.getUTCSeconds();
// //     let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// //     let today = weekDay[timeNow.getDay()];
// //     let months = timeNow.toLocaleString("default", {
// //         month: "long"
// //     });
// //     let year = timeNow.getFullYear();
// //     let period = "AM";

// //     if (hoursOfDay > 12) {
// //         hoursOfDay-= 12;
// //         period = "PM";
// //     }
// //     if (hoursOfDay === 0) {
// //         hoursOfDay = 12;
// //         period = "AM";
// //     }

// //     hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
// //     minutes = minutes < 10 ? "0" + minutes : minutes;
// //     seconds = seconds < 10 ? "0" + seconds : seconds;

// //     let time = hoursOfDay + ":" + minutes + ":" + seconds + period;

// //     document.getElementById('Clock2').innerHTML = time + " " + today + " " + months + " " + year;

// // }
// // displayTime1();






// setInterval(displayTime, 1000);




// function displayTime() {

//     const timeNow = new Date();

//     let hoursOfDay = timeNow.getHours();
//     let minutes = timeNow.getMinutes();
//     let seconds = timeNow.getSeconds();
//     let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//     let today = weekDay[timeNow.getDay()];
//     let months = timeNow.toLocaleString("default", {
//         month: "long"
//     });
//     let year = timeNow.getFullYear();
//     let period = "AM";

//     if (hoursOfDay > 12) {
//         hoursOfDay-= 12;
//         period = "PM";
//     }
//     if (hoursOfDay === 0) {
//         hoursOfDay = 12;
//         period = "AM";
//     }

//     hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     let time = hoursOfDay + ":" + minutes + ":" + seconds + period;

//     document.getElementById('Clock').innerHTML = time + " " + today + " " + months + " " + year;

// }

// displayTime();

// setInterval(displayTime1, 1000);

// function displayTime1() {

//     const timeNow = new Date();

//     let hoursOfDay = timeNow.getUTCHours();
//     let minutes = timeNow.getUTCMinutes();
//     let seconds = timeNow.getUTCSeconds();
//     let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//     let today = weekDay[timeNow.getDay()];
//     let months = timeNow.toLocaleString("default", {
//         month: "long"
//     });
//     let year = timeNow.getFullYear();
//     let period = "AM";

//     if (hoursOfDay > 12) {
//         hoursOfDay-= 12;
//         period = "PM";
//     }
//     if (hoursOfDay === 0) {
//         hoursOfDay = 12;
//         period = "AM";
//     }

//     hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     let time = hoursOfDay + ":" + minutes + ":" + seconds + period;

//     document.getElementById('Clock2').innerHTML = time + " " + today + " " + months + " " + year;

// }
// displayTime1();

setInterval(function() {

    console.log("habibi");
    $("#sydney").load("php/sydney.php");
    $("#london").load("php/london.php");
    $("#ktm").load("php/ktm.php");
    
}, 1000)

