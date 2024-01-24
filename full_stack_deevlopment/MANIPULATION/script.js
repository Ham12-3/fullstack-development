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
