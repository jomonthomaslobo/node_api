const { mongoose } = require(".");

module.exports = mongoose => {
    const Movie = mongoose.model(
        "movie",
        mongoose.Schema(
            {
                director :String,
                movie_year :Date,
                movie_name :String
            },
            {
                timestamps:false
            }
        )
    );
 return Movie;

}