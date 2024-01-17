const express = require("express");
const app = express()

//port for production || port local testing
const port = process.env.PORT || 8080

app.set('view engine', 'ejs');

//public folder is for all resources (css, js, images)
app.use(express.static('public'))

//default page is periodic table
app.get("/",(req,res)=>{
    res.render('pages/index')
})

app.get("/:elementId", (req,res)=>{ //dynamic routing for elements //add /elements here; domain also needs to have credits page
    //add checks if el exists and create json object with all necessary info
    res.render('pages/elementTemplate', {elementId: req.params.elementId})
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})