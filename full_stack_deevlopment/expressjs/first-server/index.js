const express = require('express');

// Next step is to create an instance of express

const app = express();

// CREATE THE PORT TO LISTEN TO

const PORT = 8082;

// Define the router handler 

app.get('/', (req, res) => {
    res.send('Hello World');
});

// START THE SERVER 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);

console.log(app);
