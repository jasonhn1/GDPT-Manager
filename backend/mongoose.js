const mongoose = require('mongoose');
 
mongoose.Promise = global.Promise;
 
mongoose.connect("mongodb+srv://root:root@cluster0.7i9bo.mongodb.net/Chua?retryWrites=true&w=majority"
                ,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
        .then(()=> console.log("Database connected"))
        .catch((error) =>console.log(error));
 
module.exports = mongoose;