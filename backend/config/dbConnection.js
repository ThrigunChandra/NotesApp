const mongoose = require("mongoose")

const connectDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`Database is connected: ${connect.connection.name}`)
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}

module.exports = connectDb;