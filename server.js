const express = require('express');
const path = require('path');
const app = express();

PORT = 3002;

app.get('/',(req,res)=>{
    res.sendFile("index.html",{root:path.join(__dirname)});
})

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});