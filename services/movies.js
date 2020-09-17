const MongoLib=require('../lib/mongo'); 

class MoviesService {
  constructor(){
    this.collection='movies';
    this.mongoDB=new MongoLib();
  }
  async getMovies({tags}) {
    const query=tags&&{tags:{$in:tags}};
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie({movieId}) {
    const movie = await this.mongoDB.get(this.collection, movieId);
    return movie || {};
  }

  async createMovie({movie}) {
    const createMovieId = await this.mongoDB.create(this.collection, movie);
    return createMovieId;
  }

  async updateMovie({movieId, movie}={}) {
    const updatedMovieId = await this.mongoDB.update(this.collection, movieId, movie);
    return updatedMovieId;
  }
/*
  async deleteMovie({movieId, movie}={}) {
    const deletedMovieId = await this.mongoDB.create(this.collection, movieId, movie);
    return deletedMovieId;
  }
  async sourcedMovie({movieId, movie}={}) {
    const sourceMovie = await this.mongoDB.create(this.collection, movieId, movie);
    return sourceMovie;
  }*/
}

module.exports = MoviesService;