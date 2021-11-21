import React from 'react'
import ReactPlayer from 'react-player';


const Trailer = ({movie}) => {
    return (
        <div>
            <h1>{movie.name}</h1>
            <ReactPlayer playing={true} url={movie.trailer} width="100%" height="500px" />
            <p> {movie.description} </p>
        </div>
    )
}

export default Trailer
