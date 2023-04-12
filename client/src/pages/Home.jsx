import React, { useState, useEffect } from 'react'
import axios from 'axios'

import NavBar from '../components/NavBar'

import Banner from '../homebanner.png'

const Home = () => {

  // eslint-disable-next-line
  const [response, setResponse] = useState("");

  const getProjectList = async () => {

    try {
      const res = await axios.get(`/application`, {
        headers: {},
        params: {}
      });
      setResponse(res.data);
    } catch (error) {
      console.log(error);
    }


  }

  useEffect(()=>{

    getProjectList();


  },[])


  return (
    <>
      <NavBar />
      <div className='homecontainer'><img src={Banner} alt="" /></div>
    </>
  );
}

export default Home
