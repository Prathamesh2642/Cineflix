import React from 'react';
import './homescreen.css';
import Row from '../Row';
import requests from '../request';
import Banner from '../Banner';
import Nav from '../Nav';




function Homescreen() {
    return( 
     <div className="HomeScreen">
    <Nav />
    <Banner />  
    <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargerow/>
    <Row title="Amazon Prime Originals" fetchUrl={requests.fetchAmazonprimeOriginals} isLargerow/>  
    <Row title="BBC Latest" fetchUrl={requests.fetchBBCOriginals} isLargerow/>
    <Row title="Popular Anime" fetchUrl={requests.fetchAnime} isLargerow/>
    <Row title="Upcoming Movies" fetchUrl={requests.fetchUpcomingmovies} isLargerow />
    <Row title="Random recommendations" fetchUrl={requests.fetchRandom} isLargerow/>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionmovies}/>
    <Row title="Fantasy Movies" fetchUrl={(requests.fetchFantasymovies)}/>
    <Row title="Thriller Movies" fetchUrl={requests.fetchThrillermovies}/>
    <Row title="Crime Movies" fetchUrl={requests.fetchCrimemovies}/>
    <Row title="Science Fiction Movies" fetchUrl={requests.fetchScifimovies}/>
    <Row title="Romantic Movies" fetchUrl={requests.fetchRomancemovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrormovies}/>
     </div>
    );
 }
export default Homescreen;