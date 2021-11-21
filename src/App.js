import React, {useState} from 'react';
import { Route, } from 'react-router-dom';
import { movieData } from './Data';
import './App.css';
import MovieList from './Components/MovieList';
import Filter from './Components/Filtre';
import AddMovie from './Components/AddMovie';

import Trailer from './Components/Trailer';

function App() {
  const [movies, setMovies] = useState(movieData);
  const [searchTitle, setSearchTitle]= useState("")
  const [searchRating, setSearchRating]= useState(0)

  const handleMovie = (newMovie)=>{
    setMovies([...movies,newMovie])
  }
console.log(movies)
  return (
   <div>
     <Route exact path='/' render={props=>(
       <div>
         <Filter setSearchTitle={setSearchTitle} setSearchRating={setSearchRating} />
     <AddMovie  handleMovie={handleMovie} />
     <MovieList movies={movies} searchTitle={searchTitle} searchRating={searchRating} />
     </div>
     )} />
     
     <Route path='/description/:id' render={props =>
      {
        const id = Number(props.match.params.id);
        const movie = movies.find(movie=> movie.id === id)
        return <Trailer movie={movie} />
      }

    }/>
       
   
   </div>
  );
}

export default App;