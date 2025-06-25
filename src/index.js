const express = require("express");
const path = require("path");
const collection = require("./config");
const bcrypt = require('bcrypt');

const app = express();
app.use(express.static('views'));
app.use('/images',express.static('images'));

app.use(express.static(path.join('views', 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/login", function (req,res) {
    res.render("login", { errorMessage: "" });
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/pr", (req, res)=> {
    res.render("pr");
});

app.get("/abt", (req, res)=> {
    res.render("abt");
});

app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password,
        email: req.body.email
    }

    const existingEmail = await collection.findOne({ email: data.email });

    if (existingEmail) {
        res.send('Email already exists. Please use a different email.');
    } else {
        const existingUser = await collection.findOne({ name: data.name });

        if (existingUser) {
            res.send('User already exists. Please choose a different username.');
        } else {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(data.password, saltRounds);

            data.password = hashedPassword;

            const userdata = await collection.create(data);
            console.log(userdata);

            res.redirect('/');
        }
    }
});

app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ email: req.body.email });
        if (!check) {
            res.send("User email not found")
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (!isPasswordMatch) {
            res.send("Wrong Password");
        }
        else {
            res.render("home", { name: check.name }); 
        }
    }
    catch {
        res.send("Wrong Details");
    }
});

app.get("/logout", function (req, res) {
    req.logout(); 
    res.redirect('/home'); 
});

const port = 5555;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
