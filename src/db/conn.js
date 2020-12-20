const mongoose = require("mongoose")

//creating a database
mongoose.connect("mongodb+srv://zahid1:neerrihan1234@cluster0.zujui.mongodb.net/zahid?retryWrites=true&w=majority", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})