var mongoose  = require('mongoose'),
  //require mongoose
    Schema    = mongoose.Schema,
  //assign the schema propreties to the variable schema
    MyMoviesSchema = new Schema({
      movie:{type:String, unique:true},
      year:String,
      // refe:String // refe
      genre:String
  });

//create the todoSchema with todos, which are strings and are unique
var MyMovies = mongoose.model("MyMovies", MyMoviesSchema)
//assign the schema to a variable called Todos.
module.exports = MyMovies;
//export Todos