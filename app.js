require('dotenv').config();
const express = require('express');
// import express from 'express';// same as require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {// if twitter route is not inn use  then give response in the  form of callback function 
    res.send('Twitter@example.com');
});

app.get('/login', (req, res) => {// if twitter route is not inn use  then give response in the  form of callback function 
    res.send('<h1>please login</h1>');
});

app.get('/youtube', (req, res) => {// if twitter route is not inn use  then give response in the  form of callback function 
    res.send('<h1>Code and chai</h1>');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});