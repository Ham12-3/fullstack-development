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
    console.log(JSON.parse(xhr.responseText));
  }

  //   handle errors if any
  if (xhr.readyState === 4 && xhr.status === 404) {
    console.log("Error 404: Page not found");
  }
};

// Send the request using the send method
xhr.send();

// using fetch API to make AJAX request
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Fetch API
// The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.
// The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request, whether it is successful or not.
// You can also optionally pass in an init options object as the second argument (see Request).

// The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request, whether it is successful or not.
// You can also optionally pass in an init options object as the second argument (see Request).

const fetchData = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

fetchData();

// using async await with fetch API

// const fecthData2 = async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fecthData2().then((res) => console.log(res));

// using Axios to make AJAX request
// Axios is a promise-based HTTP client for the browser and Node.js. It has a convenient and modern API simplifying asynchronous HTTP request and response handling.

// Axios is a promise-based HTTP client for the browser and Node.js. It has a convenient and modern API simplifying asynchronous HTTP request and response handling.
// Axios is not built into JavaScript like fetch, so you need to install it using npm or yarn before using it in your project.

const fecthData2 = () => {
  axios
    .get(url)
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
};

fecthData2();

const fetchData3 = async () => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
