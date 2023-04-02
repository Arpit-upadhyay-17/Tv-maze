import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const [ second , setSecond ] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        
        const Timer = setInterval(() => {
            if(second === 0){
                navigate("/")
            }
            setSecond(second-1)
        } , 1000 )

        return () => {
            clearInterval(Timer)
        }

    } , [second] )

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height : "100vh" }} >
        <center>
            <p style={{ fontSize : "25px"}} className='text-danger'  >Error : Page Not Found</p>
            <p  > You will redirect to home page in { second } seconds </p>
        </center>
    </div>
  )
}

export default NotFound;