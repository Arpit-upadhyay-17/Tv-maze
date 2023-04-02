import axios from "axios";

export const TvMaze = axios.create( 
    {
        baseURL : "https://api.tvmaze.com/"
    }
)