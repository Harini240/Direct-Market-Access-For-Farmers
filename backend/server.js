
const express = require("express");
const cors = require("cors");
require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", require("./routes/productRoutes"));

app.listen(5000, ()=>console.log("Server running on port 5000"));
