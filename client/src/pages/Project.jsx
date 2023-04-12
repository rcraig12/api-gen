import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import PageWrapper from '../components/PageWrapper'

const Project = () => {

  // eslint-disable-next-line
  const [projects, setProjects] = useState("");

  const getProjectList = async () => {

    try {
      const res = await axios.get(`/application`, {
        headers: {},
        params: {}
      });
      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }


  }

  useEffect(()=>{

    getProjectList();


  },[]);

  return (
    <>
      <NavBar />
      <PageWrapper>
        <h2 className='pageHeading'>Projects</h2>
      </PageWrapper>  
    </>
  )
}

export default Project
