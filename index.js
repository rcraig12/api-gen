const path = require('path');
const fs = require('fs');

const { createModels } = require('./src/generator');





const generateModel = async ( project, tableName ) => {

    const result = await JSON.parse(fs.readFileSync( path.join(__dirname, project)));
    createModels( project );

}

generateModel( "./project/test-project.json", "users");
//console.log(project);
