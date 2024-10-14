require('dotenv').config();
const express = require('express');
// import express from 'express';// same as require('express');
const app = express();

const githubData = {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "site_admin": false
  }

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

app.get('/github', (req, res) => { 
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});