import React, { useEffect, useState } from 'react';
import { TvMaze } from "../Apis/TvMaze";
import { getShowsContext } from './Context';


const Wrapper = ({ children }) => {
  const [ shows , setShows  ]  = useState(null);

  const getShows = async () => {
    try {
        const response =  await TvMaze.get("search/shows?q=all");
        return  setShows(response.data)
    } catch (error) {
        return  console.log(error);
    }
  }

  

  return (
    <>
        <getShowsContext.Provider value={{ getShows , shows }} >
              { children }
        </getShowsContext.Provider>
    </>

  )
}

export default Wrapper;