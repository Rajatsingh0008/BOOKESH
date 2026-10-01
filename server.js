const express = require("express");
const cors = require("cors");
const path = require("path");

const bookRoutes = require("./routes/books");

const app = express();

app.use(cors());
app.use(express.json());

// Book API
app.use("/api/books", bookRoutes);

// Frontend
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend.html"));
});

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Bookesh server running on http://localhost:${PORT}`);
});