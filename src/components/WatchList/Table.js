import React, { useEffect, useState,useCallback  } from 'react'

const Table = () => {
    const [favMovies, setFavMovies] = useState([]);
    useEffect(()=>{
        if(localStorage.getItem('movieWatchList')){
            setFavMovies(JSON.parse(localStorage.getItem("movieWatchList")))
        }
    },[]);
  return (
    <div className='border border-gray-300 shadow-sm m-4 rounded-sm'>
        <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
            <thead>
                <tr>
                    <th className='p-2 m-4 text-gray-800'>Name</th>
                    <th className='p-2 m-4 text-gray-800'>Rating</th>
                    <th className='p-2 m-4 text-gray-800'>Popularity</th>
                    <th className='p-2 m-4 text-gray-800'>Release Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    favMovies?.length > 0 && 
                    favMovies?.map((movie)=>{
                        return (
                            <tr>
                    <td className=' flex items-center space-x-2 px-5 py-6'>
            <img src={`url(https://image.tmdb.org/t/p/original/t/p/w500/${movie?.poster_path})`} 
            className='h-[10rem] w-[10rem]' alt="Movie Poster"/>
                    <div>{movie?.title}</div></td>
                    <td className='p-2 m-4'>{movie?.vote_average}</td>
                    <td className='p-2 m-4'>{movie?.popularity}</td>
                    <td className='p-2 m-4'>{movie?.release_date}</td>
                </tr>
                        )
                            
                        
                    })
                };
                
            </tbody>
        </table>
    </div>
  )
}

export default Table;