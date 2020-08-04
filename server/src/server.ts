import express from "express";

const app = express();

app.use(express.json());

app.get("/users", () => {
  console.log();
});

app.listen(3333);
