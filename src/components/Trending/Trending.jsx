import "./Trending.css"
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../SingleContent/SingleContent"
import CustomPagination from "../Pagination/CustomPagination"
const Trending = () => {

   const [content,setContent]=useState([])
   const [page,setPage]=useState(1)
   const [numOfPages,setNumOfPages]=useState()
   const fetchTrending=async()=>{
     const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_api_key}&page=${page}`)
      setContent(data.results)
      setNumOfPages(data.total_pages)
   }
   useEffect(()=>{
      fetchTrending()
   },[page])

    return ( 
       <>
          <span className="pageTitle">Trending</span>
        <div className="trending">
           {
              content && content.map((c)=>(
                 <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average} />
              ))
           }
        </div>
        {numOfPages>1 && (<CustomPagination setPage={setPage} numOfPages={numOfPages}/>)}
        
       </>
        
     );
}
 
export default Trending;