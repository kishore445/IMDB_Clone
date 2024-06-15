import React, { useEffect , useState, useCallback} from 'react';
import { getTrrendingMovies } from '../service/getTrendingMovies';
import Pagination from './Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark  } from '@fortawesome/free-regular-svg-icons';
import image from '../Asserts/bookmark.png';





const Movies = () => {
const [movies,setMovies]=useState([]);
const [page, setpage]=useState(1);
const [WatchList,setWatchlist]=useState([]);
useEffect(() => {
  const watchListFromLocalStorage = localStorage?.getItem("movieWatchList");
  setWatchlist(JSON.parse(watchListFromLocalStorage));
}, []);
  useEffect(()=>{
getTrrendingMovies(page).then
( (data)=>setMovies(data) ).catch
((err)=>console.log((err)));
    
  },[page]);

  const loadNextPageMovies=useCallback(()=>{
    setpage((prevPage)=>prevPage+1);
  },[]);
  const loadPrevPageMovies=useCallback(()=>{
   
    if(page>1){
      setpage((prevPage)=>prevPage-1);
    }
    
  },[page]);
  const toggleWatchList=useCallback((movie)=>{
    const isInWatchlist = WatchList&&WatchList.some(
      (item) => item.id === movie.id
    );
    if(isInWatchlist){
      setWatchlist((previousMoviesList)=>{
       const filtermovies= previousMoviesList.filter((m)=> m.id!==movie.id);
       localStorage.setItem('movieWatchList',JSON.stringify(filtermovies));
       return filtermovies;
      })
      
    }else{
      setWatchlist((previousMoviesList) =>{
        const filtermovie=previousMoviesList?.length>0?[...previousMoviesList,movie]:[movie];
        localStorage.setItem('movieWatchList',JSON.stringify(filtermovie));
        return filtermovie;
      });
     
    }
   
  },[WatchList]);

  return (
    <div>
    <div className="text-3xl mb-0 font-bold text-center  bg-black text-white p-2px hover:scale-110 duration-100">Trending Movies</div>
    <div className="flex  flex-wrap   bg-black justify-center">
    
      {movies &&
       movies.map((movie) =>{
        const isInWatchlist = WatchList&&WatchList.some(
          (item) => item.id === movie.id
        );
        return (
           <div key={movie?.id} 
           className="w-[160px] h-[30vh] md:h-[30vh] bg-center bg-cover rounded-xl m-4 hover:scale-110 duration-300 relative" 
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/t/p/w500/${movie?.poster_path})`}} 
    onClick={()=>{console.log("1")}}>
    
      
      <div className= "text-white text-center font-bold bg-opacity-40">
      <div className="absolute left-2 text-3xl  border-slate-950 hover:scale-125 " >
        {!isInWatchlist?
        (<button 
        onClick={()=>{toggleWatchList(movie);} }>
        <FontAwesomeIcon icon={faBookmark} />
        </button>):(
        <button 
        onClick={()=>{toggleWatchList(movie);} }>
     <img src={image} alt="movie" />
        </button>)}
      </div>
      </div>
      
    </div>
   
        );
        
      })}
  
    </div>
       <Pagination onNext={loadNextPageMovies} onprev={loadPrevPageMovies} currpage={page}/>  
    </div>
    
  );
};

export default Movies