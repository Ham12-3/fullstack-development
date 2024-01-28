// Add a single event listener to the ul

document
  .getElementById("itemListt")
  .addEventListener("click", function (event) {
    console.log(event);

    const clicked = event.target;
    // Check if the clicked element is a list item
    console.log(clicked.tagName);
    if (clicked.tagName === "LI") {
      const itemNumber = clicked.getAttribute("data-item");
      console.log(`You clicked item ${itemNumber}`);
    }
  });
