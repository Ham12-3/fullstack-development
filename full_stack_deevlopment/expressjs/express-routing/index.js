const express = require('express');


const app = express();  


const PORT = 8082;

// Home Route 
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Express Routing' });
});

// -------USER ROUTES--------  
// Getting all users 
app.get("/users", (req, res) => {
    res.json({ message: 'Getting all users or all users fetched' });
    });
// Getting a single user 

app.get("/users/:id", (req, res) => {   
    res.json({ message: 'Getting a single user' });
    }
);
// Update a user 


app.put("/users/:id", (req, res) => {   
    res.json({ message: 'User updated successfully' });
    }   
);
// Delete a user 
app.delete("/users/:id", (req, res) => {   
    res.json({ message: 'User deleted successfully' });
    }
);



// -----POST ROUTES------  
// Getting all posts
app.get("/posts", (req, res) => {
    res.json({ message: 'Getting all posts or all posts fetched' });
    }
);

// Getting a single post
app.get("/posts/:id", (req, res) => {
    res.json({ message: 'Getting a single post' });
    }
);
// Update a post

app.put("/posts/:id", (req, res) => {
    res.json({ message: 'Post updated successfully' });
    }
);
// Delete a post

app.delete("/posts/:id", (req, res) => {
    res.json({ message: 'Post deleted successfully' });
    }
);


// Start the server 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);