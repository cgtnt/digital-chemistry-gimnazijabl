const express = require("express");
const fs = require('fs');

const app = express()
const elementsJson = JSON.parse(fs.readFileSync('elements.json', 'utf8'));

//port for production || port local testing
const port = process.env.PORT || 8080

app.set('view engine', 'ejs');

//public folder is for all resources (css, js, images)
app.use(express.static('public'))

//default page is periodic table
app.get("/",(req,res) => {
    res.render('pages/periodicTable')
})

app.get("/credits", (req,res) => {
 res.send("creidte")
})

app.get("/elementi/:elementId", (req,res) => { 
    if (elementsJson.hasOwnProperty(req.params.elementId)) {
        res.render('pages/elementTemplate', {elementId: req.params.elementId, symbol: elementsJson[req.params.elementId]})
    } else {
        res.send("doesnt exist")
    }
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})