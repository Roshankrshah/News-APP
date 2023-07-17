const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

app.use(express.json());
PORT = 3002;

app.get('/',(req,res)=>{
    res.sendFile("index.html",{root:path.join(__dirname)});
})

app.get('/api',async(req,res)=>{
    //console.log(req._parsedUrl.query);
    let data = await axios(`https://newsapi.org/v2/everything?${req._parsedUrl.query}&apiKey=73dccde54f984428a50909384654f006`)
    let info = data.data;
    //console.log(info);
    res.json(info);
})

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});