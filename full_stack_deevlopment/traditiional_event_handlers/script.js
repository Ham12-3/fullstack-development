const clickButtonEl = document.getElementById("clickButton");

clickButtonEl.onclick = function clickHandler() {
  console.log("Click event is called");
};

document.getElementById("doubleClickButton").ondblclick =
  function dbClickHandler() {
    console.log("dbClickHanler event is called");
  };

document.getElementById("hoverDiv").onmouseover =
  function onMouseOverHandler() {
    console.log("önMouseOverHandler event is called");
  };

document.getElementById("hoverDiv").onmouseout = function onMouseOutHandler() {
  console.log("önMouseOutHandler event is called");
};

document.getElementById("keyInput").onkeydown = function onkeydownHandler() {
  console.log("onkeydownHandler event is called");
};

document.getElementById("keyInput").onkeyup = function onkeyupHandler() {
  console.log("onkeyupHandler event is called");
};

document.getElementById("keyInput").onkeypress = function onkeypressHandler() {
  console.log("onkeypressHandler event is called");
};

document.getElementById("myForm").onfocus = function onfocusHandler() {
  console.log("onfocusHandler event is called");
};

document.getElementById("myForm").onblur = function onblurHandler() {
  console.log("onblurHandler event is called");
};
