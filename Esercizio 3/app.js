const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

var user = { username : "username", password : "password" }
const users = [];
var isLoggedIn = false;

users.push(user);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get("/login", (req,res) => {
  if(isLoggedIn){
    res.send('Mi ricordo di te!');

  }else{
    res.sendFile("login.html", { root: "."});
  }
});

app.get("/signup", (req,res) => {
  res.sendFile("signup.html", { root: "."});
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', (req, res) => {
  const array = Object.values(req.body);
  var user = new Object();
  user.username = array[0];
  user.password = array[1];
  users.push(user);
  res.send('Ora sei Registrato, ' + users[users.length - 1].username);
})

app.post('/login', (req, res) => {
  const array = Object.values(req.body);
  
  const anyMatch = users.some(user => 
        user.username.toString().localeCompare(array[0]) == 0 &&
        user.password.toString().localeCompare(array[1]) == 0);

  if(anyMatch){
    isLoggedIn = true;
    res.sendFile("home.html", { root: "."});
  }else{
    res.send('Le credenziali non sono corrette')
  }
})

app.get("/logout", (req,res) => {
  isLoggedIn = false;
  res.send('Hai effettuato il logout');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})