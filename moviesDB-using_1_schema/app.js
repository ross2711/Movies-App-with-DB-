var express = require('express');
var app = express();

var MyMovies = require('./MyMovies');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moviesDB_new');


///=================== MOVIES API ======================///

// ======= ADD ======= //

// add genre
app.post('/add/:genre',(req,res)=>{
  var genre= {
    genre:req.params.genre
  };
  MyMovies.create(genre,(err, data)=>{
     data ? res.send(data) : res.send(err)
  });
});


// add movie
app.post('/add/:movie/:year/:genre',(req,res)=>{
  var movie = {
    movie:req.params.movie,
    year:req.params.year,
    genre:req.params.genre
  };
  MyMovies.create(movie,(err, data)=>{
     data ? res.send(data) : res.send(err);
  });
});


// ======= FIND ======= //

// find - List all movies
app.get('/find/movie/all',(req,res)=>{
  MyMovies.find({},(e,d)=>{
    e ? console.log(e) : res.send(d);
  });
});

// find movie
app.get('/find/:movie/movie',(req,res)=>{
  var movie = {
    movie:req.params.movie
  };
  MyMovies.find(movie,(e,d)=>{
    e ? console.log(e) : res.send(d);
  });
});

// find all movies by genre
app.get('/find/genre/:genre',(req,res)=>{
  var movie = {
    genre:req.params.genre
  };
  MyMovies.find(movie,(e,d)=>{
    e ? console.log(e) : res.send(d);
  });
});


// ======= REMOVE ======= //

//remove genre
app.post('/remove/genre/:genre',(req,res)=>{
  MyMovies.remove({genre:req.params.genre},(e,d)=>{
    e ? console.log(e) : res.send(d);
  });
});

//remove movie
app.post('/remove/movie/:movie',(req,res)=>{
  MyMovies.remove({movie:req.params.movie,},(e,d)=>{
    e ? console.log(e) : res.send(d);
  });
});


// ======= UPDATE ======= //

//update genre
app.post('/update/genre/:genre/:newGenre',(req,res)=>{
  MyMovies.update({genre:req.params.genre},{$set:{genre:req.params.newGenre}},(e,d)=>{
    e ? console.log(e) : res.send(d);
  });
});

// update movie
app.post('/update/:movie/:newMovie/movie', (req,res)=>{
  MyMovies.update({movie:req.params.movie}, {$set:{movie:req.params.newMovie}},(e,d)=>{
    e ? console.log(e) : res.send(d);
  });
};

// update year
app.post('/update/year/:movie/:newYear', (req,res)=>{
  MyMovies.update({movie:req.params.movie}, {$set:{year:req.params.newYear}},(e,d)=>{
    e ? console.log(e) : res.send(d);
  });
};

app.listen(3000,()=>{console.log('listening on port 3000')});




































// // find - List all genres
// app.get('/find/genre/all',(req,res)=>{
//   MyMovies.find({genre : res.send(d);
//   });
// });

// // find - List all movies
// app.get('/find/genre/all',(req,res)=>{
//   MyMovies.find({},(e,d)=>{
//     e ? console.log(e) : res.send(d)
//   })
// })

// // find - List all movies by specific genre
// app.get('/movies/all/:list',(req,res)=>{
//   MyMovies.find({genre:req.params.list},(e,d)=>{
//     e ? console.log(e) : res.send(d)
//   })
// })



///===================MOVIES API================================================

// // add movie
// app.post('/add/add/:movie/:genre',(req,res)=>{
//   var movie = {
//     movie:req.params.movie,
//     refe:req.params.genre
//   }
//   MyMovies.create(movie,(err, data)=>{

//      data ? res.send(data) : res.send(err)
//   })
// })

// // add genre
// app.post('/add/:genre',(req,res)=>{
//   var genre= {
//     genre:req.params.genre
//   }
//   Genres.create(genre,(err, data)=>{
//      data ? res.send(data) : res.send(err)
//   })
// })

// // find movies by genre
// app.get('/findstuff/:genre',(req,res)=>{
//   MyMovies.find({refe:req.params.genre},(e,d)=>{
//     e ? console.log(e) : res.send(d)
//   })
// })

// // find - check if genre exists
// // app.get('/findstuff/:genre',(req,res)=>{
// //   MyMovies.find({refe:req.params.genre},(e,d)=>{
// //     e ? console.log(e) : res.send(d)
// //   })
// // })

// // find - List all genres
// app.get('/genres/all/list',(req,res)=>{
//   Genres.find({},(e,d)=>{
//     e ? console.log(e) : res.send(d)
//   })
// })

// // find - List all movies
// app.get('/movies/all/list',(req,res)=>{
//   MyMovies.find({},(e,d)=>{
//     e ? console.log(e) : res.send(d)
//   })
// })

// //remove genre
// app.post('/remove/:genre',(req,res)=>{
//   Genres.remove({genre:req.params.genre},(e,d)=>{
//     e ? console.log(e) : res.send(d)
//   })
// })

// //update genre
// app.post('/update/:genre/:newG',(req,res)=>{
//   Genres.update({genre:req.params.genre},{$set:{genre:req.params.newG}},(e,d)=>{
//       e ? console.log(e) : res.send(d)
//   })
// })

// // update movie
// app.post('/update/:movie/:newM'), (req,res)=>{
//   MyMovies.update({movie:req.params.movie}, {$set:{movie:req.params.newM}},(e,d)=>{
//     e ? console.log(e) : res.send(d)
//   })
// }

// app.listen(3000,()=>{console.log('listening on port 3000')})