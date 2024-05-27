import React, { useEffect, useState,useCallback  } from 'react'
import { json } from 'react-router-dom';
import { genreids } from "./Helper";



const Table = () => {
    const [favMovies, setFavMovies] = useState([]);
    const [genre , setGenere]= useState([])
    const [currGenre,setCurrGenre]=useState(["All Genre"])
    const [filterMovies, setFilteredMovies] = useState([]);
    const [searchStr, setSearchStr] = useState("");

    useEffect(()=>{
        if(localStorage.getItem('movieWatchList')){
            const movies=JSON.parse(localStorage.getItem("movieWatchList")); 
            setFavMovies(movies);
            const listOfGenre = new Set(movies.map((movie)=> genreids[movie?.genre_ids[0]]));
             setGenere(["All Genre",...listOfGenre]);
             setFilteredMovies(movies); 
        }
    },[]);
 
    useEffect(()=>{
        
                const movies=JSON.parse(localStorage.getItem("movieWatchList")); 
                setFavMovies(movies);
                const listOfGenre = new Set(movies.map((movie)=> genreids[movie?.genre_ids[0]]));
                 setGenere(["All Genre",...listOfGenre]);
                 
            
        },[filterMovies]);

    const deleteMovieHandler = useCallback((movie)=>{
        const filteredMovies= favMovies?.filter(m=>m.id!==movie.id);
       
        setFavMovies(filteredMovies);
        setFilteredMovies(filteredMovies);
      
        
        setCurrGenre("All Genre");
    //   console.log(filteredMovies.length)
        
       
        localStorage.setItem("movieWatchList", JSON.stringify(filteredMovies));
    },[filterMovies,currGenre]);


    const currGenreHandler = useCallback(
        (eachGenre) => {
          setCurrGenre(eachGenre);
          let filteredMovies = [];
          if (eachGenre === "All Genre") {
            filteredMovies = favMovies;
          } else {
            filteredMovies = favMovies.filter(
              (m) => genreids[m?.genre_ids[0]] === eachGenre
            );
          }
          setFilteredMovies(filteredMovies);
        },
        []
      );
    const inputhandler=useCallback((val)=>{
        setSearchStr(val);
        if(val===""){
            currGenreHandler(currGenre);
        }else{
            setFilteredMovies(
                filterMovies.filter((m) =>
                  m.title.toLowerCase().includes(val.toLowerCase())
            ))
        }
        
      },[filterMovies,currGenre,currGenreHandler])
   
  return (
    <div className='border border-gray-300 shadow-sm m-4 rounded-sm'>
        <div className="mt-6 flex flex-wrap space-x-2 justify-center ">
        {genre?.length>0 && genre.map((eachGenre,idx)=>{
           return <div key={idx}className={currGenre===eachGenre?"m-2 text-lg p-1 bg-blue-400 text-white rounded-xl font-bold":"m-2 text-lg p-1 bg-gray-400 hover:bg-blue-400  text-white rounded-xl  font-bold"}
         onClick={()=>currGenreHandler(eachGenre)}
           >
            {eachGenre}</div>
        })}
        </div>

        <div className='text-center'>
            <label for="title">Movie Title</label>
        <input type ="text" id="title"className="bg-gray-200  p-1 m-1 border-4"
        placeholder='Sarch for the movie' value={searchStr}onChange={(e)=>inputhandler(e.target.value)}></input>
        </div>
      
        <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
            <thead>
                <tr>
                    <th className='p-2 m-4 text-gray-800'>Name</th>
                    <th className='p-2 m-4 text-gray-800'>Rating</th>
                    <th className='p-2 m-4 text-gray-800'>Popularity</th>
                    <th className='p-2 m-4 text-gray-800'>Release Date</th>
                    <th className='p-2 m-4 text-gray-800'>Genre</th>
                    <th className='p-2 m-4 text-gray-800'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    filterMovies?.length > 0 && 
                   filterMovies?.map((movie)=>{
                        return (
                            <tr  key={movie?.id}>
                    <td className="flex items-center space-x-2 px-5 py-6">
            <img src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie?.poster_path}`}
            className='h-[10rem] w-[10rem]' alt="Movie Poster"/>
            
            
                    <div>{movie?.title}</div></td>
                    <td className='p-2 m-4'>{movie?.vote_average}</td>
                    <td className='p-2 m-4'>{movie?.popularity}</td>
                    <td className='p-2 m-4'>{movie?.release_date}</td>
                    <td className='p-2 m-4'>{genreids[movie?.genre_ids[0]] } , {genreids[movie?.genre_ids[1]]}</td>
                    <td>
                        <button className='text-white border-2 border-black bg-red-600 p-2 rounded' onClick={()=>{
                            deleteMovieHandler(movie)
                        }}>
                            Delete
                        </button>
                    </td>
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