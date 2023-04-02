import React, { useEffect, useState } from "react";
import dummyImage from "../assets/dummy.png";
import { useNavigate } from "react-router-dom";

const Show = ({ showData }) => {
  const navigate = useNavigate();
  const [isLoaded, setisloaded] = useState(false);
  const [img, setImge] = useState();
  const settingImage = () => {
    if (showData.image !== null) {
      return setImge(showData.image.medium);
    }
    return setImge(dummyImage);
  };

  useEffect(() => {
    settingImage();
  }, []);

  return (
    <div className="showw">
      <img src={img} onLoad={() => setisloaded(true)} width="100%" alt="show" />
      {!isLoaded ? (
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="details text-center">
          <p>
            
            <b> ⌛ {showData.name} </b>
          </p>
          <span className="rating">
            
            {showData.rating.average || "Rating not available"}{" "}
          </span>
          <p className="mt-3">
            
            <b> {showData.language}</b>{" "}
          </p>
          <p>{showData.genres.join(", ")}</p>
          <p
            className="btn btn-success"
            onClick={() => navigate(`/summary/${showData.id}`)}
          >
            
            More
          </p>
        </div>
      )}
    </div>
  );
};

export default Show;
