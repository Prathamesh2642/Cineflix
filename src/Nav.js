import React from "react";
import './Nav.css';

function Nav(){
   return( 
    <div className="nav">
        <img className="movieflixlogo" src={require('D:\\MRS05\\cineflix\\src\\Cineflix.png')} alt="cineflix logo"/>
        <img className="Watchlist" src={require('D:\\MRS05\\cineflix\\src\\bookmark.png')} alt="watchlist logo" />
    </div>
   )
}
export default Nav;