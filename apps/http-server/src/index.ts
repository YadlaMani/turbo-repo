import express from "express";
const app = express();
app.get("/healthcheck", (req, res) => {
  res.send("I am alive");
});
app.listen(5555, () => {
  console.log("Server is running on port 5555");
});
