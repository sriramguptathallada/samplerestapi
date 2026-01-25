const express = require('express')
const app = express()

app.use(express.json());  // converts it into a JavaScript object makes it available in req.body

let users = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "CANADA"
  },
  {
    id: 2,
    name: "Pedro",
    username: "PedroTech",
    age: 20,
    nationality: "BRAZIL",
  },
  {
    id: 3,
    name: "Sarah",
    username: "cameron",
    age: 25,
    nationality: "INDIA"
  },
  {
    id: 4,
    name: "Rafe",
    username: "rafe123",
    age: 60,
    nationality: "GERMANY",
  },
  {
    id: 5,
    name: "Kelly",
    username: "kelly2019",
    age: 5,
    nationality: "CHILE",
  },
];


app.get("/users", (req, res) => {
  res.json(users);
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});