import { useState, useEffect, useContext, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getShowsContext } from "../Context/Context";
import dummyImage from "../assets/dummy.png";
import Form from "../Cmp/Form";

const Summary = () => {
  const { id } = useParams();
  const { getShows, shows } = useContext(getShowsContext);
  const [CurrentShow, setCurrentShow] = useState();
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();
  const P = useRef();

  const handleClick = (e) => {
    window.scrollTo(0, 0);
    return setIsClick(true);
  };

  useEffect(() => {
    !id && navigate("/");
    !shows && getShows();
    shows &&
      shows.find((item) => {
        if (item.show.id === parseInt(id)) {
          P.current.innerHTML = item.show.summary;
          setCurrentShow(item.show);
        }
      });
  }, [shows]);

  return (
    <div className="Summary p-3 Animation">
      <center className="p-2" style={{ position: "relative" }}>
        <h5> {id} </h5>
        {CurrentShow && (
          <>
            {CurrentShow.image !== null ? (
              <img
                src={CurrentShow.image.original}
                className="shadow img-fluid"
                alt={CurrentShow.name}
              />
            ) : (
              <>
                
                <b
                  style={{
                    position: "absolute",
                    top: "37%",
                    left: "45%",
                    color: "black",
                  }}
                >
                  
                  {CurrentShow.name}
                </b>
                <img
                  src={dummyImage}
                  className="img-fluid"
                  alt={CurrentShow.name}
                />
              </>
            )}
            <br /> <br />
            <button
              type="button"
              className="btn btn-warning px-3"
              onClick={handleClick}
            >
              Book Now
            </button>
            
            {CurrentShow.schedule && (
              <p className="mt-2">
                <b>Time : </b>{" "}
                {CurrentShow.schedule.time || <> Time is not available </>}
                <br />
                <b>Day :</b>{" "}
                {CurrentShow.schedule.days.join(", ") || (
                  <> Days not available </>
                )}
              </p>
            )}
            <p className="m-2">{CurrentShow.genres.join(", ")}</p>
          </>
        )}
        <p className="mt-3" ref={P} style={{ textAlign: "justify" }}>
          {" "}
        </p>
        {isClick && <Form show={CurrentShow} cancel={setIsClick} />}
      </center>
    </div>
  );
};

export default Summary;
