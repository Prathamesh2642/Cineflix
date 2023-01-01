const API_KEY="c55cf1bd94dbcd5b04a1bfdfa6c9f461";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchAmazonprimeOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=1024`,
    fetchBBCOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=100`,
    fetchAnime:`/discover/tv?api_key=${API_KEY}&with_networks=1`,
    fetchRandom:`/discover/tv?api_key=${API_KEY}&with_networks=16`,
    fetchActionmovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchFantasymovies:`/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchThrillermovies:`/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchCrimemovies:`/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchScifimovies:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchHorrormovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomancemovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchUpcomingmovies:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
}

export default requests;