const db = require("../models");
const Movie = db.Movie;

exports.create = (req,res)=>{
    const movie  = new Movie({
        movie_name :req.body.movie_name,
        director   :req.body.director,
        movie_year :req.body.movie_year

    });
    movie.save(movie)
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Movie."
        });
      });

};

exports.find = (req,res)=>{
    const id = req.params.id;

    Movie.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Movie with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Movie with id=" + id });
      });

}

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Movie.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
          });
        } else {
          res.send({
            message: "Movie was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Movie with id=" + id
        });
      });
  };
  exports.findAll = (req, res) => {
    const title = req.query.movie_name;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Movie.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Movies."
        });
      });
  };