const ApiKey = 'a480b28d150d8fa2759d45ca66d1aecb';

const request = {
    fetchTrending: `/trending/all/week?api_key=${ApiKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${ApiKey}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${ApiKey}&language=en-US`,
    fetchActionMovie: `/discover/movie?api_key=${ApiKey}&with_genres=28`,
    fetchComedyMovie: `/discover/movie?api_key=${ApiKey}&with_genres=35`,
    fetchHorrorMovie: `/discover/movie?api_key=${ApiKey}&with_genres=27`,
    fetchRomanceMovie: `/discover/movie?api_key=${ApiKey}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${ApiKey}&with_genres=99`,
};

export default request;
