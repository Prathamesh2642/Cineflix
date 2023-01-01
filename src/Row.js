import React,{useState,useEffect} from "react";
import axios from './axios';
import "./Row.css"
// import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const getposterurl=(posterpath)=>{
    return `https://image.tmdb.org/t/p/original${posterpath}`
}

function Row({title,fetchUrl,isLargerow}){
    const [movies,setMovies]=useState([]);
    const [trailerUrl,settrailerUrl]=useState([]);


    // a snippet of code that runs on some specific condition
    useEffect(() => {
        async function fetchData(){
           const request=await axios.get(fetchUrl);
        //    console.log(request.data.results); 
           setMovies(request.data.results);
            // const request1=await axios.get(requests.fetchTopRated);
            // console.log(request1.data.results);
            return request;
        }
        fetchData();
        
    //if-> run when the row loads and dont run it again
    },[fetchUrl]); // empty brackets-> reload 1 time on page/row reload, a variable is specified in the [] then reload everytime any change is made to the variable
    
    // console.table(movies);

    // const opts={
    //     height:"400",
    //     width:"100%",
    //     playerVars:{autoplay:0,},
    // }

    const handleClick = (movie) => {
      if (trailerUrl) {
        settrailerUrl("");
      } else {
        movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            settrailerUrl(urlParams.get("v"));
          })
          .catch((error) => console.log(error));
      }
    };

    return(
    <div className="row">
            {/*Title*/}
            <h2>{title}</h2>
            <div className="row_posters">

                {movies && movies.map(movie => (
                <img key={movie.id} 
                onClick={() => handleClick(movie)} className={`row_poster ${isLargerow && "row_posterlarge"}`} 
                src={isLargerow ? getposterurl(movie.poster_path): getposterurl(movie.poster_path)} alt={movie.name}/> 
                )
                )

                }
                
            </div>
            {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}
    
    </div>
    
    );
}
                
                // {/* <div className="imagediv"> */}
              //  {/* <figcaption className="caption"> */}{/*{movie.name||movie.title}*/} 
              //  {/* <br/>{movie.vote_average}</figcaption> */}{/*</div>*/}
              //  { /*</figure>*/}

export default Row
