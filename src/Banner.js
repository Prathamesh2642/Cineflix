import React, { useState,useEffect } from "react";
import axios from './axios';
import requests from "./request";
import "./Banner.css"

function Banner(){
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchTrending);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);
        }
        fetchData();
    },[]); //piece of code that runs on specific condition
    
    console.log(movie);
 
    return( <header className="Banner" 
     style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center"
     }}>
    <div className="Banner_contents">
        <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* <div>
            <button className="Banner_button">Play</button>
            <button className="Banner_button">My List</button>

        </div> */}
        <div className="Banner_rating">
            {Math.round((movie?.vote_average)*100)/100}
        </div>
        <h1 className="Banner_overview">
            {movie?.overview}
        </h1>
    </div>
    <div className="Banner_fadeeffect" />
    </header>
    )
}

export default Banner;