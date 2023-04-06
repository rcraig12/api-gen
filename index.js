const path = require('path');
const fs = require('fs');

const { createModels } = require('./src/generator');

const generateAPI = async ( project, tableName ) => {

    const result = await JSON.parse(fs.readFileSync( path.join(__dirname, project)));
    createModels( project );

}

generateAPI( "./project/test-project.json" );
//console.log(project);
