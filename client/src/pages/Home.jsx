import React, { useState, useEffect } from 'react'
import axios from 'axios'

import NavBar from '../components/NavBar'
import PageWrapper from '../components/PageWrapper'

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
      <PageWrapper centered={true}>
        <img src={Banner} alt="" />
      </PageWrapper>
    </>
  );
}

export default Home
