import React, { useEffect, useState } from "react";

const UserDetail = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    document.title = "success page";
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div className="userDetails">
      {userData !== null ? (
        <div>
          <h5 className="text-warning"> Your show is booked</h5>
          <p> User name : {userData.name} </p>
          <p> Show Id : {userData.id} </p>
          <p> Show name : {userData.name} </p>
          <p> Day : {userData.day} </p>
          <p> Slot : {userData.slot} </p>
          <p onClick={() => (window.location.href = "/")}>
            {" "}
            <u> Go to home page</u>{" "}
          </p>
        </div>
      ) : (
        <>No user found</>
      )}
    </div>
  );
};

export default UserDetail;
