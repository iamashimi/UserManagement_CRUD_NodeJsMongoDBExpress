//IT17171298
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/UserDB', {useNewUrlParser: true},
(err) =>{
    if(!err){ console.log('MongoDB Connection Succeded')}
    else{console.log('Error in DB connection: ' + err)}
});

require('./user.model');