const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res)=> {
    res.send('hello World')
})

app.get( '/date', (req, res)=>{
    res.send('Friday 2025')
} )

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})