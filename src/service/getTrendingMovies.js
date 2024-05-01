import axios from "axios";

export const getTrrendingMovies =async (pageNo =1)=>{
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        params :{languange :"en-us", page: pageNo },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjUxOWQ1YWZlMzc3Y2NjMmE2MzViY2I4MjY5NzMxOCIsInN1YiI6IjY2Mjc0ODIxY2I1YzhlMDEzMTNlOWYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H9_apjBq_oVL5wgItgKEm9awwlKM5PwxgmFNflWQRzg'
        },
      };
      const response = await axios.request(options);
      
      return response?.data?.results;
}