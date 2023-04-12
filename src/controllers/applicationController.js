const express = require('express');


const index = (req,res) => {

    res.send({ result: 'A list of all the projects' });
}

module.exports = {
    index
};
