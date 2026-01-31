
const router = require("express").Router();
const Product = require("../models/Product");

router.post("/add", async(req,res)=>{
  await Product.create(req.body);
  res.send("Product Added");
});

router.get("/", async(req,res)=>{
  res.json(await Product.find());
});

module.exports = router;
