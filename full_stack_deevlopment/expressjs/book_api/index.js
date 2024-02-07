const express = require('express');

const app = express();

const PORT = 8082;

// Receiving JSON data from the client configuration
// Middlewares 
app.use(express.json());

const books =[
    {
        id: 1,
        title: 'Book 1',  
        author: 'Author 1'  

    },
    {
        id: 2,
        title: 'Book 2',
author: 'Author 2'
    },
    {
        id: 3,
        title: 'Book 3',
author: 'Author 3'
    },
   
    {
        id: 4,
        title: 'Book 4',
author: 'Author 4'
    },
    {
        id: 5,
        title: 'Book 5',
author: 'Author 5',

    },
    {
        id: 6,
        title: 'Book 6',
author: 'Author 6'
    },
    {
        id: 7,
        title: 'Book 7',
author: 'Author 7'
    },
    {
        id: 8,
        title: 'Book 8',
author: 'Author 8'
    },
    {
        id: 9,
        title: 'Book 9',
author: 'Author 9'
    },
    {
        id: 10,
        title: 'Book 10',
author: 'Author 10'
    }
]

// Home Route 
app.get('/', (req, res) => {
 res.json({
    status: 'success',
    message: "Welcome to the Book API"
 })
});
// Fetching all books 

app.get('/books', (req, res) => {
    res.json({
        status: 'success',
        message: "All books fetched successfully",
        data: books
    })
}
);
// Fetch a single book 
app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find(book => book.id == id);

    if (book) {
        res.json({
            status: 'success',
            message: "Book fetched successfully",
            data: book
        })
    } else {
        res.json({
            status: 'error',
            message: "Book not found"
        })
    }
}
);
// Create a new book 
app.post('/books', (req, res) => {
    const {id, title, author} = req.body;
    const book = {
        id,
        title,
        author
    };
    books.push(book);
    res.json({
        status: 'success',
        message: "Book created successfully",
        data: book
    })
}
);

// START THE SERVER

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}       
);