$(document).ready(function () {
  //Dom manipulation to put the current date into the HTML header when the page is loaded, using moment.js

  var currentTime = moment().format("dddd, MMMM Do, YYYY, h:mm A");
  var currentDate = $("#currentDate");
  currentDate.text(currentTime);
});

// 9 functions to save the user's text input for each row into local storage

//1

$("#saveSchedule1").on("click", updateSchedule1);
$("#schedule1").val(localStorage.getItem("9am"));

function updateSchedule1() {
  localStorage.setItem("9am", $("#schedule1").val());
}

//2

$("#saveSchedule2").on("click", updateSchedule2);
$("#schedule2").val(localStorage.getItem("10am"));

function updateSchedule2() {
  localStorage.setItem("10am", $("#schedule2").val());
}

//3

$("#saveSchedule3").on("click", updateSchedule3);
$("#schedule3").val(localStorage.getItem("11am"));

function updateSchedule3() {
  localStorage.setItem("11am", $("#schedule3").val());
}

//4

$("#saveSchedule4").on("click", updateSchedule4);
$("#schedule4").val(localStorage.getItem("12pm"));

function updateSchedule4() {
  localStorage.setItem("12pm", $("#schedule4").val());
}

//5

$("#saveSchedule5").on("click", updateSchedule5);
$("#schedule5").val(localStorage.getItem("1pm"));

function updateSchedule5() {
  localStorage.setItem("1pm", $("#schedule5").val());
}

//6

$("#saveSchedule6").on("click", updateSchedule6);
$("#schedule6").val(localStorage.getItem("2pm"));

function updateSchedule6() {
  localStorage.setItem("2pm", $("#schedule6").val());
}

//7

$("#saveSchedule7").on("click", updateSchedule7);
$("#schedule7").val(localStorage.getItem("3pm"));

function updateSchedule7() {
  localStorage.setItem("3pm", $("#schedule7").val());
}

//8

$("#saveSchedule8").on("click", updateSchedule8);
$("#schedule8").val(localStorage.getItem("4pm"));

function updateSchedule8() {
  localStorage.setItem("4pm", $("#schedule8").val());
}

//9

$("#saveSchedule9").on("click", updateSchedule9);
$("#schedule9").val(localStorage.getItem("5pm"));

function updateSchedule9() {
  localStorage.setItem("5pm", $("#schedule9").val());
}

//checks for time to change color of the rows

var hour = new Date().getHours();

console.log(hour);

if (hour > 9) {
  $("#schedule1").addClass("past");
} else if (hour >= 9 && hour < 10) {
  $("#schedule1").addClass("present");
} else if (hour < 9) {
  $("#schedule1").addClass("future");
}

if (hour > 10) {
  $("#schedule2").addClass("past");
} else if (hour >= 10 && hour < 11) {
  $("#schedule2").addClass("present");
} else if (hour < 10) {
  $("#schedule2").addClass("future");
}

if (hour > 11) {
  $("#schedule3").addClass("past");
} else if (hour >= 11 && hour < 12) {
  $("#schedule3").addClass("present");
} else if (hour < 11) {
  $("#schedule3").addClass("future");
}

if (hour > 12) {
  $("#schedule4").addClass("past");
} else if (hour >= 12 && hour < 13) {
  $("#schedule4").addClass("present");
} else if (hour < 12) {
  $("#schedule4").addClass("future");
}

if (hour > 13) {
  $("#schedule5").addClass("past");
} else if (hour >= 13 && hour < 14) {
  $("#schedule5").addClass("present");
} else if (hour < 13) {
  $("#schedule5").addClass("future");
}

if (hour > 14) {
  $("#schedule6").addClass("past");
} else if (hour >= 14 && hour < 15) {
  $("#schedule6").addClass("present");
} else if (hour < 14) {
  $("#schedule6").addClass("future");
}

if (hour > 15) {
  $("#schedule7").addClass("past");
} else if (hour >= 15 && hour < 16) {
  $("#schedule7").addClass("present");
} else if (hour < 15) {
  $("#schedule7").addClass("future");
}

if (hour > 16) {
  $("#schedule8").addClass("past");
} else if (hour >= 16 && hour < 17) {
  $("#schedule8").addClass("present");
} else if (hour < 16) {
  $("#schedule8").addClass("future");
}

if (hour > 17) {
  $("#schedule9").addClass("past");
} else if (hour >= 17 && hour < 18) {
  $("#schedule9").addClass("present");
} else if (hour < 17) {
  $("#schedule9").addClass("future");
}
//A function to clear local storage and refresh page

$("#clear").on("click", clear);

function clear() {
  localStorage.clear();

  //reload function found through https://www.w3schools.com/jsref/met_loc_reload.asp

  location.reload();
}
