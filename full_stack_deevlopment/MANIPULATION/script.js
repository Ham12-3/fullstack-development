// Using tectContent to update the blog title

const blogTitleEl = document.getElementById("title");

// blogTitleEl.textContent = "New Blog Title"

// Change the background color

const paragraphEl = document.getElementById("paragraph");

paragraphEl.innerHTML = "<h3>I have changed</h3>";

// using innerText to modify the comment section

const firstCommentEl = document
  .getElementById("comment1")
  .querySelector(".commentText");

// Using setAttribute

const product1ImageEl = document
  .getElementById("product1")
  .querySelector("img");

product1ImageEl.setAttribute("src", "new Image");

// using setAttributes to change product links

const product1linkEl = document.getElementById("product1").querySelector("a");

product1linkEl.setAttribute("href", "new.html");

// Using the getAttributes

const imagesEl = document.getElementById("gallery").querySelectorAll("img");

let imagesByAlice = [];

// Using getAttributes to filter images by author Alice
imagesEl.forEach((img) => {
  const author = img.getAttribute("style");

  if (author === "Alice") {
    imagesByAlice.push(img);
  }
});

imagesByAlice.forEach((img) => console.log(img));

// Using createElement and appendChild()

function createTask(newTask) {
  // Create a new div element to hold the task
  const taskEl = document.createElement("div");
  taskEl.className = "task";
  const taskTextNodeEl = document.createTextNode(newTask);
  taskEl.appendChild(taskTextNodeEl);
}

createTask("Programming");
createTask("video Editing");

// Using insertBefore
function addStudent(name, grade) {
  // Create a new div element to hold the student div

  const studentEl = document.createElement("div");

  //   Add CSS to it

  studentEl.className = "student";
  //   Create a text node containing the student name and grade
  const studentTextNode = document.createTextNode(`${name}:${grade}`);

  studentEl.appendChild(studentTextNode);
  //   Select the container
  const containerEl = document.getElementById("studentList");
  let beforeNode = null;

  //   Loop through existing students to find the correct position for the new student

  for (const child of containerEl.children) {
    const childGrade = parseInt(child.textContent.split(":")[1]);

    if (grade < childGrade) {
      beforeNode = child;
      break;
    }
  }
  //   Insert the new student in the container
  containerEl.insertBefore(studentEl, beforeNode);
}

adddStudent("Ben", 70);

// Replacing elements

function replaceArticle(articleId, newContent) {
  // fnd the exisiting article element by ID

  const existingArticle = document.getElementById("articleId");

  //   create a new div element for the updated article
  const newArticleEl = document.createElement("div");

  //   add css to it
  newArticleEl.className = "article";
  // Keep the ID same for the article
  newArticleEl.id = articleId;

  //   Create a text node for the new content
  const newTextNode = document.createTextNode(newContent);
  newArticleEl.appendChild(newTextNode);

  //   Replace the existing article with the new article

  existingArticle.parentNode.replaceChild(newArticleEl, existingArticle);
}

// Using removeChild

function addFruit(name) {
  const ulEl = document.getElementById("fruitList");

  // Create a li Element
  const li = document.createElement("li");

  li.className = "fruits";
  li.textContent = "Apple";
  ulEl.appendChild(li);
}

addFruit("apple");
addFruit("banana");

function removeFruit(name) {
  const ulEl = document.getElementById("fruitLsit");
  let fruitFound = false;

  // loop through the fruits to find the fruits we want

  for (const li of ulEl.children) {
    if (li.textContent === name) {
      fruitFound = true;

      //   remove the fruit

      ulEl.removeChild(li);
      break;
    }
  }
  //   Update the message whether the fruit was found

  document.getElementById("message").textContent = fruitFound
    ? `${name} was removed from the list`
    : `$[name] not found in the list`;
}

removeFruit("apple");

// Using classList in javascript

// Select the p Element

const p = document.getElementById("textElement");

p.classList.add("highlight", "italic");
p.classList.add("bold");

// removeClass

p.classList.remove("highlight", "bold", "italic");

function toggleClass() {
  p.classList.toggle("highlight");
}

function checkContains() {
  alert(
    p.classList.contains("highlight")
      ? "Contains highlight"
      : "Does not contain highlight"
  );
}

// replaceClass
function replaceClass() {
  if (p.classList.contains("ítalic")) {
    p.classList.replace("italic", "red-text");
  } else {
    p.classList.add("red-text");
  }
}

// listItem

function listItem() {
  alert("The first class " + p.classList.item);
  console.log(p.classList.item(0));
}

function getValue() {
  const pValue = p.classList.value;
}
