const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MEAN_Curd',(err)=>{
    if(!err)
    console.log('Connected to Mongodb..');
    else
    console.log('error to connect mongodb : '+JSON.stringify(err,undefined,2));
});

module.exports = mongoose;