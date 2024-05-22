require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const projectRoutes = require("./routes/projectRoutes");
const userRoutes = require("./routes/userRoute");

const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/projects", projectRoutes);
app.use("/api/user", userRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server rodando na porta http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
