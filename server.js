const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const noteRoutes = require("./routes/noteRoutes");
app.use("/api/notes", noteRoutes);

// MongoDB Atlas
const MONGO_URL = "mongodb+srv://honeych0013_db_user:honey_notes@cluster0.gr2ah8y.mongodb.net/notesDB?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
