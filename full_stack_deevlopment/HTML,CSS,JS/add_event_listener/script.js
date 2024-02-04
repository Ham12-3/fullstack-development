const clickButtonEl = document.getElementById("clickButton");

function addEvent() {
  console.log("Click event is called");
}

clickButtonEl.addEventListener("click", addEvent);
document
  .getElementById("doubleClickButton")
  .addEventListener("dblclick", () => {
    console.log(this);
  });

document.getElementById("hoverDiv").addEventListener("mouseover", () => {
  console.log(this);
});

document.getElementById("hoverDiv").addEventListener("mouesout", () => {
  console.log(this);
});

document.getElementById("keyInput").addEventListener("keydown", () => {
  console.log(this);
});

document.getElementById("keyInput").addEventListener("keyup", () => {
  console.log(this);
});

document.getElementById("keyInput").addEventListener("keypress", () => {
  console.log(this);
});

document.getElementById("myForm").addEventListener("focus", () => {
  console.log(this);
});
// document.getElementById("myForm").onblur = function onblurHandler() {
//   console.log("onblurHandler event is called");
// };

// removeEventListener

// Named function for alert

function showAlert() {
  console.log("Hello");
}

// getting the button element

const alertButtonEl = document.getElementById("alertButton");

// Add addEventListener to the element

alertButtonEl.addEventListener("click", showAlert);

// Named function for removing alert event

function removeAlert() {
  alertButtonEl.removeEventListener("click", showAlert);
}

const removeButtonEl = document.getElementById("removeButton");

removeButtonEl.addEventListener("click", removeAlert);

// Event flow | Bubbling ,capturing ,target
