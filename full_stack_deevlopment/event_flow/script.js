// Add event listener to the div

document.getElementById("parentDiv").addEventListener(
  "click",
  function (event) {
    alert("Div clicked! Event phase" + event.eventPhase);
  },
  true
);

// add event listener to the ul
document.getElementById("list").addEventListener(
  "click",
  function (event) {
    alert("List clicked! Event Phase " + event.eventPhase);
  },
  true
);
// capturing

// Add event listener to the li

document.getElementById("item1").addEventListener(
  "click",
  function (event) {
    alert("Item1 clicked! Event Phase" + event.eventPhase);
  },
  true
);
// Bubbling Phase
