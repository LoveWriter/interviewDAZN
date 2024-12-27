const mongoose = require("mongoose");
const dotenv = require("dotenv");
let conn = null

const connectDB = async () => {
    const uri = "mongodb+srv://mraj33:RsHbMmbVXqqolBH1@clustermraj.flvcako.mongodb.net/?retryWrites=true&w=majority&appName=ClustermRaj";
    const clientOptions = {serverApi: {version: '1', strict: true, deprecationErrors: true}};

    try {
        conn = await mongoose.connect(uri, clientOptions);

        return conn;
    } catch (err) {
        console.log(err);
    }
}

async function closeDB() {
    if (conn) {
        await mongoose.connection.close();
    }
}
exports.connectDB = connectDB;
exports.closeDB = closeDB;