const express = require('express');
const app = express();
const PORT = 8082;



// Start the server 

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    }
);