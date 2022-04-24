import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../Pagination/CustomPagination"
import SingleContent from "../SingleContent/SingleContent"
const Movies = () => {
    const [content,setContent]=useState([])
    const [page,setPage]=useState(1)
    const [numOfPages,setNumOfPages]=useState()

    const fetchMovies=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
        setContent(data.results)
        setNumOfPages(data.total_pages)
    }
    useEffect(()=>{
        fetchMovies()
        // eslint-disable-next-line
    },[page])

    return ( 
        <div>
            <span className="pageTitle">Movies</span>
            <div className="trending">
           {
              content && content.map((c)=>(
                 <SingleContent key={c.id}
                  id={c.id}
                   poster={c.poster_path}
                   title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type="movie"
                    vote_average={c.vote_average} />
              ))
           }
        </div>
        <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
        </div>
     );
}
 
export default Movies;