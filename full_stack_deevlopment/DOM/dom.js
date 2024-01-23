// Browser window object
// ------
// Window Object
// --------
// console.log(window.location.host);

// console.log(window.history);
// console.log(window.navigator);
// console.log(window.screen);

// window.prompt();
// window.alert();
// window.confirm();
// window.open("https://ham12-portfolio.vercel.app");

// console.log(document);

// GetElementById method

const conferenceTitleEl = document.getElementById("conferenceTitle");
const conferenceDateEl = document.getElementById("conferenceDate");

const locationTitleEl = document.getElementById("locationTitle");
const conferenceLocationEl = document.getElementById("conferenceLocation");

const fictionBooksEl = document.getElementsByClassName("fiction");

const firstProductCardEl = document.querySelector(".product-card");

console.log(firstProductCardEl);

const highestRatingEl = document.querySelector("[data-rating ='4.8']");

// Get the first laptop category product

const laptopEl = document.querySelector("[data-category='laptop']");

// Selecting an id

const dashboardElement = document.querySelector("#dashboard");
console.log(dashboardElement);

// Using querySelectorAll

// Select all prouct cards

const prtoductCardEls = document.querySelectorAll(".product-card");
const productNameEls = document.querySelectorAll(".product-name");

const productNames = Array.from(productNameEls);

productNames.map((product) => {
  console.log(product);
});

const laptopPricesEl = document.querySelectorAll('[data-category="laptop"]');

laptopPricesEl.forEach((el) => {
  console.log(el);
});

// Select all products with a rating of 4.5 and above
const highestRatingsEl = document.querySelectorAll(
  '[data-rating="4.7"],[data-rating=4.8]'
);

highestRatingEl.forEach((el) => {
  console.log(el.innerHTML);
});
