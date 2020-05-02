const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(express.static("public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("<h1>Nice to see you!</h1>");
});

app.get("/getData", (req, res) => {
  let { number } = req.query;

  if (!number) {
    return res.send("Lack of Parameter");
  }

  number = parseInt(number);

  if (Number.isNaN(number)) {
    res.send("Wrong Parameter");
  } else {
    let total = 0;
    for (let i = 1; i <= number; i++) {
      total += i;
    }
    res.send(`The result is: ${total}`);
  }
});

app.get("/myName", (req, res) => {
  const userName = req.cookies.username;
  res.render("myName", { userName });
});

app.get("/trackName", (req, res) => {
  const { name } = req.query;
  res.cookie("username", name);
  res.redirect("/myName");
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});
