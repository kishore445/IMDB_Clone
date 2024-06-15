import React from 'react'

const MovieInfo = ({movie}) => {
  const { title, overview, poster_path, release_date, vote_average } = movie;
  return (
    <div className="bg-white rounded p-2  h-25">
        <img
        className="w-full rounded-lg mb-8 h-[40vh] flex"
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={`${title} Poster`}
      />
      <h2 className="text-2xl font-bold text-center pt-4 texxt-blue-400">{title}</h2>
      <p className="font-bold">Release Date:{release_date}</p>
      <p className="font-bold">Average Vote:{vote_average}</p>
      <p>{overview}</p>
    
    </div>
  )
}

export default MovieInfo