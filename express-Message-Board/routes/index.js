require('dotenv').config();
var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
const messages = [{
  text: 'Hi there!',
  user:'Amando',
  added: new Date(),
},{
  text: 'Hello World!',
  user:'Charles',
  added: new Date(),
}]

mongoose.connect(process.env.mongodb_URI,{
  useNewUrlParse: true,
  useUnifiedTopology: true
}).then(()=> {
  console.log('Connected to MongoDB')
}).catch(err => {
  console.log(err)
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages });
});
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Form', messages });
});
router.post('/new',function(req, res, next) {
  messages.push({text: req.body.text, user: req.body.user, added: new Date()})
  res.redirect('/')
})
module.exports = router;
