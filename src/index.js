var express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const port = 4000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
//http logger morgan
app.use(morgan("combined"));
//template engine

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/resources/views"));
//console.log('PATH: ', path.join(__dirname, 'resources/views')) //xem đường dẫn

//
//HTTP logger
app.use(morgan("combined"));
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
