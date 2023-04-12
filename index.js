const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

const applicationRouter = require('./src/routes/applicationRoutes');


app.use('/application', applicationRouter)

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ result: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

// const path = require('path');
// const fs = require('fs');

// const { createModels } = require('./src/generator');

// const generateAPI = async ( project, tableName ) => {

//     const result = await JSON.parse(fs.readFileSync( path.join(__dirname, project)));
//     createModels( project );

// }

// generateAPI( "./project/test-project.json" );
// //console.log(project);
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
