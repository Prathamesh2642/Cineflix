import axios from 'axios';

/* base url to make requests to the TMDB*/
const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
// const request=axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=c55cf1bd94dbcd5b04a1bfdfa6c9f461&language=en-US');
// console.log(request);
export default instance;