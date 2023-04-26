const { default: mongoose } = require("mongoose")

const dbConnect = () =>{
    try{
        const conn= mongoose.connect("mongodb+srv://admin:admin@cliq.eazhhvq.mongodb.net/cliQ?retryWrites=true&w=majority");//link
    }
}