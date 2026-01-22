const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/", (req, res) => {
  res.send("Oh Yeah API Working ");
});

app.get("/api/health",(req,res)=> {

res.json({ status: "Server OK" });
});

import contactRoutes from "./routes/contactRoutes.js";

app.use(express.json());
app.use("/api/contact", contactRoutes);
