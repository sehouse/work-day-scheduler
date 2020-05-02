$(document).ready(function () {
  console.log("page is loaded");

  //Dom manipulatio to put the current date into the HTML header when the page is loaded, using moment.js

  var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss A");

  var currentDate = $("#currentDate");

  currentDate.text(currentTime);
});

// 9 functions to save the user's text input for each row into local storage

//1

$("#saveSchedule1").on("click", updateSchedule1);
$("#schedule1").val(localStorage.getItem("9am"));

function updateSchedule1() {
  localStorage.setItem("9am", $("#schedule1").val());

  console.log(localStorage);
}

//2

$("#saveSchedule2").on("click", updateSchedule2);
$("#schedule2").val(localStorage.getItem("10am"));

function updateSchedule2() {
  localStorage.setItem("10am", $("#schedule2").val());

  console.log(localStorage);
}

//3

$("#saveSchedule3").on("click", updateSchedule3);
$("#schedule3").val(localStorage.getItem("11am"));

function updateSchedule3() {
  localStorage.setItem("11am", $("#schedule3").val());

  console.log(localStorage);
}

//4

$("#saveSchedule4").on("click", updateSchedule4);
$("#schedule4").val(localStorage.getItem("12pm"));

function updateSchedule4() {
  localStorage.setItem("12pm", $("#schedule4").val());

  console.log(localStorage);
}

//5

$("#saveSchedule5").on("click", updateSchedule5);
$("#schedule5").val(localStorage.getItem("1pm"));

function updateSchedule5() {
  localStorage.setItem("1pm", $("#schedule5").val());

  console.log(localStorage);
}

//6

$("#saveSchedule6").on("click", updateSchedule6);
$("#schedule6").val(localStorage.getItem("2pm"));

function updateSchedule6() {
  localStorage.setItem("2pm", $("#schedule6").val());

  console.log(localStorage);
}

//7

$("#saveSchedule7").on("click", updateSchedule7);
$("#schedule7").val(localStorage.getItem("3pm"));

function updateSchedule7() {
  localStorage.setItem("3pm", $("#schedule7").val());

  console.log(localStorage);
}

//8

$("#saveSchedule8").on("click", updateSchedule8);
$("#schedule8").val(localStorage.getItem("4pm"));

function updateSchedule8() {
  localStorage.setItem("4pm", $("#schedule8").val());

  console.log(localStorage);
}

//9

$("#saveSchedule9").on("click", updateSchedule9);
$("#schedule9").val(localStorage.getItem("5pm"));

function updateSchedule9() {
  localStorage.setItem("5pm", $("#schedule9").val());

  console.log(localStorage);
}

//checks for time to change color of the rows

//A function to clear local storage and refresh page
