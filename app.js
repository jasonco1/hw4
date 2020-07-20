const express = require("express");
const app = express();
const faker = require("faker");
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index.html");
})

app.get("/about", function(req, res){
    res.render("about.html");
});

app.get("/history", function(req, res){
    res.render("history.html");
});

app.get("/action", function(req, res){
    res.render("action.html");
});

app.get("/sources", function(req, res){;
    //fake name, donation and date 
    let fakerData = {
        fakeName: faker.name.findName(),
        fakeAmount: faker.finance.amount(),
        pastDate: faker.date.past(),
        
        secondName: faker.name.findName(),
        secondAmount: faker.finance.amount(),
        secondPastDate: faker.date.past()
    }
    res.render("sources.html", fakerData)
});



//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});

