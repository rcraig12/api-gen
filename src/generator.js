const path = require('path');
const fs = require('fs');

const buildPath = '../build';

const checkAndCreateBuildPaths = async ( projectFile ) => {

  // First path to check and create is the build folder itself

  if ( !fs.existsSync( path.join( __dirname, buildPath ) ) ) {

    console.log(`Creating build directory at ${path.join( __dirname, buildPath )}`);
    fs.mkdirSync( path.join( __dirname, buildPath ) );
  
  }

  // Next check if the project folder exists

  const parts = projectFile.split('/')
  let projectFolder = parts[parts.length - 1];

  projectFolder = projectFolder.replace( '.json', '' );

  if ( !fs.existsSync( path.join( __dirname, `${buildPath}/${projectFolder}` ) ) ) {

    console.log(`Creating project directory at ${path.join( __dirname, `${buildPath}/${projectFolder}` )}`);
    fs.mkdirSync( path.join( __dirname, `${buildPath}/${projectFolder}` ) );
  
  } 

  // All API servers use MVC to keep things organised so lets check and create the project folder structure now

  if ( !fs.existsSync( path.join( __dirname, `${buildPath}/${projectFolder}/src` ) ) ) {

    console.log(`Creating project src directory at ${path.join( __dirname, `${buildPath}/${projectFolder}/src` )}`);
    fs.mkdirSync( path.join( __dirname, `${buildPath}/${projectFolder}/src` ) );
  
  }

  if ( !fs.existsSync( path.join( __dirname, `${buildPath}/${projectFolder}/src/models` ) ) ) {

    console.log(`Creating project models directory at ${path.join( __dirname, `${buildPath}/${projectFolder}/src/models` )}`);
    fs.mkdirSync( path.join( __dirname, `${buildPath}/${projectFolder}/src/models` ) );
  
  } 

  if ( !fs.existsSync( path.join( __dirname, `${buildPath}/${projectFolder}/src/controllers` ) ) ) {

    console.log(`Creating project controllers directory at ${path.join( __dirname, `${buildPath}/${projectFolder}/src/controllers` )}`);
    fs.mkdirSync( path.join( __dirname, `${buildPath}/${projectFolder}/src/controllers` ) );
  
  } 

  if ( !fs.existsSync( path.join( __dirname, `${buildPath}/${projectFolder}/src/routes` ) ) ) {

    console.log(`Creating project routes directory at ${path.join( __dirname, `${buildPath}/${projectFolder}/src/routes` )}`);
    fs.mkdirSync( path.join( __dirname, `${buildPath}/${projectFolder}/src/routes` ) );
  
  } 

  if ( !fs.existsSync( path.join( __dirname, `${buildPath}/${projectFolder}/src/views` ) ) ) {

    console.log(`Creating project views directory at ${path.join( __dirname, `${buildPath}/${projectFolder}/src/views` )}`);
    fs.mkdirSync( path.join( __dirname, `${buildPath}/${projectFolder}/src/views` ) );
  
  } 

  if ( !fs.existsSync( path.join( __dirname, `${buildPath}/${projectFolder}/src/middleware` ) ) ) {

    console.log(`Creating project middleware directory at ${path.join( __dirname, `${buildPath}/${projectFolder}/src/middleware` )}`);
    fs.mkdirSync( path.join( __dirname, `${buildPath}/${projectFolder}/src/middleware` ) );
  
  } 

}


module.exports.createModels = async ( projectFile ) => {

  // First of all lets make sure the build path is there and a appropriate project folder exists
  await checkAndCreateBuildPaths( projectFile );
  const project = await JSON.parse( fs.readFileSync( path.join( __dirname, '../' + projectFile ) ) );
  console.log(project.models.length);


}