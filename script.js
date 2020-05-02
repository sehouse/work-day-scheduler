$(document).ready(function () {
  console.log("page is loaded");

  //Dom manipulatio to put the current date into the HTML header when the page is loaded, using moment.js

  var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss A");

  var currentDate = $("#currentDate");

  currentDate.text(currentTime);
});

// 9 functions to save the user's text input for each row into local storage

$("#saveSchedule1").on("click", updateNotes1);
$("#schedule1").val(localStorage.getItem("notes"));

function updateNotes1() {
  localStorage.setItem("notes", $("#schedule1").val());
}

//1

//2

//3

//4

//5

//6

//7

//8

//9

//checks for time to change color of the rows

//A function to clear local storage and refresh page
