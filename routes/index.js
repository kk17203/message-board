const express = require("express");
const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Kevin",
        added: new Date(),
    },
    {
        text: "Hello World",
        user: "James",
        added: new Date(),
    },
];

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

/* POST a new message to the messages array from the form.ejs, then redirect to home page */
router.post("/new", function (req, res, next) {
    const newMessage = {
        text: req.body.message, // message is the name associated with the input field in form.ejs
        user: req.body.name, // name is the name associated with the input field in form.ejs
        added: new Date(),
    };
    messages.push(newMessage);
    res.redirect("/");
});

module.exports = router;
