import { useContext, useEffect } from "react";
import { getShowsContext } from "../Context/Context";
import Show from "../Cmp/Show";
import "../styles/Home.css";

const Home = () => {
  const { getShows, shows } = useContext(getShowsContext);

  useEffect(() => {
    document.title = "TvMaze Home Page"
    !shows && getShows();
  }, []);

  return (
    <div className="m-3 Animation">
      <h3 className="pl-2">List of all shows from Tv Maze</h3>
      <hr />
      {shows !== null ? (
        <div className="home">
          <div className="All-shows">
            {shows.map((showData, index) => (
              <Show key={index} showData={showData.show} />
            ))}
          </div>
          {console.log(shows)}
        </div>
      ) : (
        <center>
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <br />
          <span>Data is loading</span>
        </center>
      )}
    </div>
  );
};

export default Home;
