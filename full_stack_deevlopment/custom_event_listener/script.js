// Accessing the username input and submit button

const usernameEl = document.getElementById("username");

const submitButtonEl = document.getElementById("submitButton");

// Create a custom

const usernameSubmitted = new CustomEvent("usernameSubmitted", {
  bubbles: true,
  cancelable: true,
  detail: { text: "" },
});

// Attach an event listener

submitButtonEl.addEventListener("uernameSubmitted", function (event) {
  console.log(`Username is ${event.detail.text} has been submitted`);
});

submitButtonEl.addEventListener("click", function (event) {
  // Populate the detail property with the input value
  usernameSubmitted.detail.text = usernameEl.value;

  //   disptach custom event
  document.dispatchEvent(usernameSubmitted);
});
