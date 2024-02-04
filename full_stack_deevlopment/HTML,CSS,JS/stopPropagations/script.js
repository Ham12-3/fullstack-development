// Add event listener to the outer div

document.getElementById("outerDiv").addEventListener(
  "click",
  function (event) {
    alert("Outer div clicked! Event phase" + event.eventPhase);
  },
  false
);

// Bubbling Phase
// Add event listener to the middle div
document.getElementById("middleDiv").addEventListener(
  "click",
  function (event) {
    alert("middle Div Clicked! Event Phase", event.eventPhase);
    event.stopPropagation(); // Stops the event propagation
  },
  false
);

// Add event listener to the inner div
document.getElementById("innerDiv").addEventListener(
  "click",
  function (event) {
    alert("Inner div clicked! Event Phase" + event.eventPhase);
    event.stopPropagation();
  },
  false
);
