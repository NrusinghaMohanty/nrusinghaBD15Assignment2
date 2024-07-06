import express from "express";
import cors from "cors";

const app = express();
let PORT = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Stock portfolio analysis API");
});

//Exercise 1
app.get("/calculate-returns", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  let result = ((marketPrice - boughtAt) * quantity).toString();
  res.send(result);
});

//Exercise 2
app.get("/total-returns", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result = ( stock1 + stock2 + stock3 + stock4 ).toString();
  res.send(result);
});

//Exercise 3
app.get("/calculate-return-percentage", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let returnPercentage = ((returns / boughtAt) * 100).toString()
  res.send(returnPercentage);
});

//Exercise 4
app.get("/total-return-percentage", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result = ( stock1 + stock2 + stock3 + stock4 ).toString();
  res.send(result);
});

//Exercise 5
app.get("/status", (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  let result = returnPercentage > 0 ? "Profit" : "Loss"
  res.send(result);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
