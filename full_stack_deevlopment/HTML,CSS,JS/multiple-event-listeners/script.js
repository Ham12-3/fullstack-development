// Access the button element

const buttonEl = document.getElementById("actionButton");

// Single click
buttonEl.addEventListener("click", function () {
  console.log("Btn was clicked");
});

// Double click

buttonEl.addEventListener("dbclick", function () {
  console.log("Btn was double clicked");
});

// Mouse enter

buttonEl.addEventListener("mouseenter", function () {
  console.log("mouseenter");
});

buttonEl.addEventListener("mouseleave", function () {
  console.log("mouseleave");
});
