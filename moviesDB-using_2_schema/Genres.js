var mongoose = require('mongoose');
  //require mongoose
var Schema = mongoose.Schema;
  //assign the schema propreties to the variable schema
var GenreGenreSchema = new Schema({
  genre:{type:String, unique:true}
});

//create the GenreGenreSchema with genre, which are strings and are unique
var Genres = mongoose.model("Genres", GenreGenreSchema);
//assign the schema to a variable called Genres.
module.exports = Genres;
//export Genres