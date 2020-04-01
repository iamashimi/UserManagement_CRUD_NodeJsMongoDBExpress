//IT17171298
const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required: 'This field is required.'
    },
    secondName :{
        type : String
    },
    birthday  :{
        type : Date
    },
});

mongoose.model('User', userSchema);