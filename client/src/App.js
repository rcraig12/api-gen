import React from 'react'
import { Routes, Route } from "react-router-dom"

import './App.css';

import Home from './pages/Home'
import Project from './pages/Project'
import Model from './pages/Model'
import View from './pages/View'
import Controller from './pages/Controller'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/project" element={ <Project />} />
        <Route path="/controller" element={ <Controller />} />
        <Route path="/model" element={ <Model />} />
        <Route path="/view" element={ <View />} />
      </Routes>
    </>
  );
}

export default App;
