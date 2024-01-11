const express = require("express");
const router = express.Router();

router.get("/products", (request, response) => {
  response.render("client/pages/products/index.pug");
});

module.exports = router;
