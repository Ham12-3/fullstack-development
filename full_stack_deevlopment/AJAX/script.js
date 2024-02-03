// AJAX
// help me pull the data and place it inside our application without having to refresh the page
// AJAX is a technique for accessing web servers from a web page
// AJAX stands for Asynchronous JavaScript And XML
// AJAX is not a programming language
// AJAX just uses a combination of:
// A browser built-in XMLHttpRequest object (to request data from a web server)
// JavaScript and HTML DOM (to display or use the data)
// AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.
// AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
//

// Path: full_stack_deevlopment/AJAX/script.js

const url = "https://jsonplaceholder.typicode.com/posts";

// Create a new instance of XMLHttpRequest object

const xhr = new XMLHttpRequest();
// Configure the request using the open method
xhr.open("GET", url, true);

// Attach an event listener to the xhr object to listen for the load event. This event is triggered when the request is complete. The callback function will be called when the event is triggered.

xhr.onreadystatechange = function () {
  // Check if the request is complete {readyState 4} and successful(status 200)
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
