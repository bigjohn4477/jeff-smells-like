var express = require('express');
var app = express();

const path  = require('path');

// Setup views directory, file type and public filder.
app.set('views', __dirname + '/views');

// ejs is just like html, stands for Embedded JavaScript templates. 
app.set('view engine', 'ejs');

// This will allow all your files in public folder available on browser.
// Files like JS, CSS, and Images
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
   console.log("Listening")
})