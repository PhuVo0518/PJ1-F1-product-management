// [GET] /products/

module.exports.index = (request, response) => {
  response.render("client/pages/products/index.pug", {
    pageTitle: "Product List",
  });
};
