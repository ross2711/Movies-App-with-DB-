var mongoose = require('mongoose');
  //require mongoose
var Schema = mongoose.Schema;
  //assign the schema propreties to the variable schema
var MyMoviesSchema = new Schema({
  movie:{type:String, unique:true},
  year:String,
  genre:String
  // refe:String // refe
});

//create the MyMoviesSchema with 'movie' which are strings and are unique, 'year' and 'genre' which are strings.
var MyMovies = mongoose.model("MyMovies", MyMoviesSchema);
//assign the schema to a variable called MyMovies.
module.exports = MyMovies;
//export MyMovies