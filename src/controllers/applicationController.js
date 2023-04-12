const express = require('express');
const path = require('path');
const fs = require('fs');

// return all projects on the server
const index = async (req,res) => {

  let response = {
    projects: []
  };

  const getFiles = async source =>
  (await fs.readdirSync(source, { withFileTypes: true }))
    .filter(fileent => fileent.isFile())
    .map(fileent => fileent.name);

  const projects = await getFiles( path.join( __dirname, '../../project'));

  projects.map( element => {

    response.projects.push({ project: element.replace(/\.[^/.]+$/, "")});
    
  });

  res.status(200).send(response);

}

module.exports = {
    index
};
