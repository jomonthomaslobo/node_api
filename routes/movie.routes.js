// module.exports = app => {
//     const movies = require("../controllers/movie.controller.js");
//     var router = require("express").Router();
//     router.post("create/", movies.create);
//     router.delete("delete/:id",movies.delete);
//     router.get("get/:id",movies.find);

//     app.use('/api/movies/',router);
// }